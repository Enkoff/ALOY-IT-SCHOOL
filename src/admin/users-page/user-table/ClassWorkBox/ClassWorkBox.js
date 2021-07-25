import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  IconButton,
  Checkbox,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { useDispatch } from "react-redux";
import { deleteRaitingItem } from "../../../../redux/adminActions";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  omissions: {
    backgroundColor: "rgba(255, 76, 107, 0.46)",
  },
  tableCell: {
    padding: "0px",
  },
}));

const ClassWorkBox = ({ users, dateSelect }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const [alertOne, setAlertOne] = useState({});

  const filterUsersDate = users.reating.filter((el) => el.date === dateSelect);

  const deleteRatingHandler = (uid, reatingItemId, estimation, isLesson) => {
    try {
      dispatch(deleteRaitingItem(uid, reatingItemId, estimation, isLesson));
      if (estimation === "Пропуск") {
        setAlertOne({
          variant: "info",
          title: `Проопуск студента ${users.name} успішно видалено!`,
        });
      } else {
        setAlertOne({
          variant: "success",
          title: `Оцінкy студента ${users.name} успішно видалено!`,
        });
      }
    } catch (error) {
      console.log(error);
      if (estimation === "Пропуск") {
        setAlertOne({
          variant: "error",
          title: `Пропуск студента ${users.name} не видалено через помилку сервера!`,
        });
      } else {
        setAlertOne({
          variant: "error",
          title: `Оцінку студента ${users.name} не видалена через помилку сервера!`,
        });
      }
    }
  };

  const snackBars = useCallback(
    (title, variant) => {
      enqueueSnackbar(`${title}`, { variant });
    },
    [enqueueSnackbar]
  );

  useEffect(() => {
    if (alertOne.title !== undefined) {
      snackBars(alertOne.title, alertOne.variant);
    }
  }, [alertOne, snackBars]);

  return (
    <Box margin={1}>
       <Typography variant="h6" gutterBottom component="div">
        {`Уроки за ${dateSelect}`}
      </Typography>
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell} align="center">
              Дата
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Предмет
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Урок
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Оцінка
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Додаткові бали + 2 за активність
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Ім'я викладача
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Видалити оцінку
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterUsersDate !== undefined &&
            filterUsersDate
              .sort((a, b) => a.lesson - b.lesson)
              .map((e, i) => (
                <TableRow
                  className={
                    e.estimation === "Пропуск" ? classes.omissions : ""
                  }
                  key={i}
                >
                  <TableCell
                    className={classes.tableCell}
                    align="center"
                    component="th"
                    scope="row"
                  >
                    {e.date}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    {e.subject}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    {e.lesson}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    {e.estimation}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    <Checkbox checked={e.isLesson} disabled color="secondary" />
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    {e.author}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    <IconButton
                      onClick={() =>
                        deleteRatingHandler(
                          users.id,
                          e.id,
                          e.estimation,
                          e.isLesson
                        )
                      }
                    >
                      <DeleteForeverIcon color='secondary' />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ClassWorkBox;
