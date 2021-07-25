import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  IconButton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { useDispatch } from "react-redux";
import { deleteHomeWorkItem } from "../../../../redux/adminActions";
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

  const filterUsersDate = users.homeWork.filter((el) => el.date === dateSelect);

  const deleteHomeWorkItemHandler = (uid, homeWorkItemId, estimation) => {
    try {
      dispatch(deleteHomeWorkItem(uid, homeWorkItemId));
      if (estimation === "Not performed") {
        setAlertOne({
          variant: "info",
          title: `Не виконане домашне завдання студента ${users.name} успішно видалено!`,
        });
      } else {
        setAlertOne({
          variant: "success",
          title: `Оцінкy студента ${users.name} успішно видалено!`,
        });
      }
    } catch (error) {
      console.log(error);
      if (estimation === "Not performed") {
        setAlertOne({
          variant: "error",
          title: `Не виконане домашне завдання студента ${users.name} не видалено через помилку сервера!`,
        });
      } else {
        setAlertOne({
          variant: "error",
          title: `Оцінка студента ${users.name} не видалена через помилку сервера!`,
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
        {`Домашні завдання за ${dateSelect}`}
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
              Назва домашнього завдання
            </TableCell>
            <TableCell className={classes.tableCell} align="center">
              Оцінка
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
            filterUsersDate.map((e, i) => (
              <TableRow
                className={
                  e.estimation === "Не виконано" ? classes.omissions : ""
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
                  {e.nameHomeWork}
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  {e.estimation}
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  {e.author}
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  <IconButton
                    onClick={() =>
                      deleteHomeWorkItemHandler(users.id, e.id, e.estimation)
                    }
                  >
                    <DeleteForeverIcon color="primary" />
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
