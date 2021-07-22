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
  deleteUserAuth,
  deleteUserInFirestore,
} from "../../../redux/adminActions";
import { useSnackbar } from "notistack";
import NativeSelects from "./RowAddForm";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

export default function Row({ users }) {
  const classes = useRowStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [alertOne, setAlertOne] = useState({});
  const [alertTwo, setAlertTwo] = useState({});

  const dleteHandler = (email, password, uid, name) => {
    try {
      dispatch(deleteUserAuth(email, password));
      setAlertOne({
        variant: "success",
        title: `Користувач ${name} успішно видалений з Firebase Auth!`,
        isAlert: true,
      });
    } catch (error) {
      console.log(error);
      setAlertOne({
        variant: "error",
        title: `Користувач ${name} не видалений з Firebase Auth!`,
        isAlert: true,
      });
    }
    try {
      dispatch(deleteUserInFirestore(uid));
      setAlertTwo({
        variant: "success",
        title: `Користувач ${name} успішно видалений з Firestore!`,
        isAlert: true,
      });
    } catch (error) {
      setAlertTwo({
        variant: "error",
        title: `Користувач ${name} не видалений з Firestore!`,
        isAlert: true,
      });
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
        <TableCell component="th" scope="row">
          <Avatar src={users.avatar} />
        </TableCell>
        <TableCell align="center">{users.name}</TableCell>
        <TableCell align="center">
          {users.reating !== undefined &&
            `${average(users.reating).toFixed(1)}/5`}
        </TableCell>
        <TableCell align="center">{users.totalNumberPoints}</TableCell>
        <TableCell align="center">
          <IconButton
            onClick={() =>
              dleteHandler(users.email, users.password, users.id, users.name)
            }
          >
            <HighlightOffIcon color="secondary" />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Панель керування оцінками на уроці
              </Typography>
              <NativeSelects users={users} />
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Дата</TableCell>
                    <TableCell align="center">Предмет</TableCell>
                    <TableCell align="center">Урок</TableCell>
                    <TableCell align="center">Оцінка</TableCell>
                    <TableCell align="center">Присутність на занятті</TableCell>
                    <TableCell align="center">Імя викладача</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.reating !== undefined &&
                    users.reating.map((e, i) => (
                      <TableRow key={i}>
                        <TableCell align="center" component="th" scope="row">
                          {e.date}
                        </TableCell>
                        <TableCell align="center">{e.subject}</TableCell>
                        <TableCell align="center">{e.lesson}</TableCell>
                        <TableCell align="center">{e.estimation}</TableCell>
                        <TableCell align="center">
                          <Checkbox checked={e.isLesson} disabled color='secondary' />
                        </TableCell>
                        <TableCell align="center">{e.author}</TableCell>
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
