import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Collapse,
  IconButton,
  Avatar,
  Checkbox,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { average } from "../../../module/avarage";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { useDispatch } from "react-redux";
import {
  deleteRaitingItem,
  deleteUserAuth,
  deleteUserInFirestore,
} from "../../../redux/adminActions";
import { useSnackbar } from "notistack";
import NativeSelects from "./RowAddForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  omissions: {
    backgroundColor: "rgba(255, 76, 107, 0.46)",
  },
  tableCell: {
    padding: "0px",
  },
}));

export default function Row({ users }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [alertOne, setAlertOne] = useState({});
  const [alertTwo, setAlertTwo] = useState({});

  const deleteUserHandler = (email, password, uid, name) => {
    try {
      dispatch(deleteUserAuth(email, password));
      setAlertOne({
        variant: "success",
        title: `Користувач ${name} успішно видалений з Firebase Auth!`,
      });
    } catch (error) {
      console.log(error);
      setAlertOne({
        variant: "error",
        title: `Користувач ${name} не видалений з Firebase Auth!`,
      });
    }
    try {
      dispatch(deleteUserInFirestore(uid));
      setAlertTwo({
        variant: "success",
        title: `Користувач ${name} успішно видалений з Firestore!`,
      });
    } catch (error) {
      setAlertTwo({
        variant: "error",
        title: `Користувач ${name} не видалений з Firestore!`,
      });
    }
  };
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
      if (alertTwo.title !== undefined) {
        setTimeout(() => {
          snackBars(alertTwo.title, alertTwo.variant);
        }, 500);
      }
    }
  }, [alertOne, alertTwo, snackBars]);

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className={classes.tableCell} component="th" scope="row">
          <Avatar src={users.avatar} />
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          {users.name}
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          {users.reating !== undefined &&
            `${average(users.reating).toFixed(1)} / ${users.totalNumberPoints}`}
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          <span style={{ color: "#0092ff" }}>{`${users.reating.length} `}</span>
          /<span style={{ color: "red" }}>{` ${users.omissions.length}`}</span>
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          <IconButton
            onClick={() =>
              deleteUserHandler(
                users.email,
                users.password,
                users.id,
                users.name
              )
            }
          >
            <HighlightOffIcon color="secondary" />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={classes.tableCell} align="center" colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Панель керування оцінками на уроці
              </Typography>
              <NativeSelects users={users} />
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
                  {users.reating !== undefined &&
                    users.reating.map((e, i) => (
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
                          <Checkbox
                            checked={e.isLesson}
                            disabled
                            color="secondary"
                          />
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
                            <HighlightOffIcon color="secondary" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
          {/* <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Панель керування оцінками домашня робота
              </Typography>
              <NativeSelects uid={users.id}/>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Дата</TableCell>
                    <TableCell>Предмет</TableCell>
                    <TableCell>Урок</TableCell>
                    <TableCell>Оцінка</TableCell>
                    <TableCell align="center">Імя викладача</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.reating !== undefined &&
                    users.reating.map((e, i) => (
                      <TableRow key={i}>
                        <TableCell component="th" scope="row">
                          {e.date}
                        </TableCell>
                        <TableCell>{e.subject}</TableCell>
                        <TableCell>{e.lesson}</TableCell>
                        <TableCell>{e.estimation}</TableCell>
                        <TableCell align="center">{e.author}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse> */}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
