import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Collapse,
  IconButton,
  Avatar,
  TableCell,
  TableRow,
  Box,
  TableHead,
  Table,
  TableBody,
  Typography,
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
import ClassWorkBox from "./ClassWorkBox/ClassWorkBox";
import HomeWokrBox from "./HomeWorkBox/HomeWorkBox";
import ClassWorkSelect from "./ClassWorkBox/ClassWorkSelect";
import HomeWorkSelect from "./HomeWorkBox/HomeWorkSelect";

//РОЗБИТИ НА КОМПОНЕНТИ ДУЖЕ ВЕЛИКИЙ КОМПОНЕНТ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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
  trBtn: {
    width: '10%',
    boxShadow: '0px 5px 10px 2px #DDDDDD inset',
    borderRadius: '20px',
    "&:hover": {
      backgroundColor: "#DDDDDD",
      cursor: 'pointer'
    },
  },
}));

export default function Row({ users }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [dateClassWorkSelect, setDateClassWorkSelect] = useState("");
  const [openDateClassWork, setOpenDateClassWork] = useState(false);
  const [openClassWork, setOpenClassWork] = useState(false);

  const [dateHomeWorkSelect, setDateHomeWorkSelect] = useState("");
  const [openDateHomeWork, setOpenDateHomeWork] = useState(false);
  const [openHomeWork, setOpenHomeWork] = useState(false);

  const [alertOne, setAlertOne] = useState({});
  const [alertTwo, setAlertTwo] = useState({});

  const usersDate = users.reating.map((el) => el.date);
  const usersDateUnique = [...new Set(usersDate)].sort((a, b) => {
    const yearA = a.slice(0, 4);
    const monthA = a.slice(5, 7);
    const dayA = a.slice(8, 10);
    let sumA = yearA + monthA + dayA;

    const yearB = b.slice(0, 4);
    const monthB = b.slice(5, 7);
    const dayB = b.slice(8, 10);
    let sumB = yearB + monthB + dayB;

    return sumB - sumA;
  });

  const usersDateHomeWork = users.homeWork.map((el) => el.date);
  const usersDateHomeWorkUnique = [...new Set(usersDateHomeWork)].sort(
    (a, b) => {
      const yearA = a.slice(0, 4);
      const monthA = a.slice(5, 7);
      const dayA = a.slice(8, 10);
      let sumA = yearA + monthA + dayA;

      const yearB = b.slice(0, 4);
      const monthB = b.slice(5, 7);
      const dayB = b.slice(8, 10);
      let sumB = yearB + monthB + dayB;

      return sumB - sumA;
    }
  );

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

  const snackBars = useCallback(
    (title, variant) => {
      enqueueSnackbar(`${title}`, { variant });
    },
    [enqueueSnackbar]
  );

  const dateClassWorkHandler = (date) => {
    setDateClassWorkSelect(date);
    if (date === dateClassWorkSelect || openDateClassWork === false) {
      setOpenDateClassWork((prev) => !prev);
    }
  };

  const dateHomeWorkHandler = (date) => {
    setDateHomeWorkSelect(date);
    if (date === dateHomeWorkSelect || openDateHomeWork === false) {
      setOpenDateHomeWork((prev) => !prev);
    }
  };

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
        <TableCell className={classes.tableCell}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setOpenDateClassWork(false);
              setOpenHomeWork(false);
              setOpenClassWork(!openClassWork);
            }}
          >
            {openClassWork ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
          <IconButton
            aria-label="expand ro"
            size="small"
            onClick={() => {
              setOpenDateHomeWork(false);
              setOpenClassWork(false);
              setOpenHomeWork(!openHomeWork);
            }}
          >
            {openHomeWork ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
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
          /
          <span style={{ color: "red" }}>{` ${
            users.reating.filter((el) => el.estimation === "Пропуск").length
          }`}</span>
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          <span
            style={{ color: "#0092ff" }}
          >{`${users.homeWork.length} `}</span>
          /
          <span style={{ color: "red" }}>{` ${
            users.homeWork.filter((el) => el.estimation === "Не виконано")
              .length
          }`}</span>
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
        <TableCell className={classes.tableCell} align="center" colSpan={7}>
          <Collapse in={openClassWork} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                {`Панель керування оцінками студента ${users.name} на уроці`}
              </Typography>
              <ClassWorkSelect users={users} />
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableCell} align="center">
                      Дата
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      Кількість оцінок / пропусків
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {usersDateUnique.map((e, i) => {
                    return (
                      <TableRow key={i}>
                        <TableCell
                          onClick={() => dateClassWorkHandler(e)}
                          className={`${classes.tableCell} ${classes.trBtn}`}
                          align="center"
                        >
                          {e}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="center">
                          {`${
                            users.reating.filter((el) => el.date === e).length
                          } / ${
                            users.reating.filter(
                              (el) =>
                                el.date === e && el.estimation === "Пропуск"
                            ).length
                          }`}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
          <Collapse in={openHomeWork} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                {`Панель керування оцінками студента ${users.name} домашні завдання`}
              </Typography>
              <HomeWorkSelect users={users} />
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableCell} align="center">
                      Дата
                    </TableCell>
                    <TableCell className={classes.tableCell} align="center">
                      Кількість оцінок дз / не виконаних дз
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {usersDateHomeWorkUnique.map((e, i) => {
                    return (
                      <TableRow key={i}>
                        <TableCell
                          onClick={() => dateHomeWorkHandler(e)}
                          className={`${classes.tableCell} ${classes.trBtn}`}
                          align="center"
                        >
                          {e}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="center">
                          {`${
                            users.homeWork.filter((el) => el.date === e).length
                          } / ${
                            users.homeWork.filter(
                              (el) =>
                                el.date === e && el.estimation === "Не виконано"
                            ).length
                          }`}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
          <Collapse in={openDateClassWork} timeout="auto" unmountOnExit>
            <ClassWorkBox users={users} dateSelect={dateClassWorkSelect} />
          </Collapse>
          <Collapse in={openDateHomeWork} timeout="auto" unmountOnExit>
            <HomeWokrBox users={users} dateSelect={dateHomeWorkSelect} />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
