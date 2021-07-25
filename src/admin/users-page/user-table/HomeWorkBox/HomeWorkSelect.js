import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  NativeSelect,
  Button,
  TextField,
} from "@material-ui/core";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { homeWorkValidation } from "./homeWorkValidation";
import { addHomeWorkItem } from "../../../../redux/adminActions";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  helpIcon: {
    position: "absolute",
    right: theme.spacing(2),
    bottom: theme.spacing(-1),
    color: "greey",
    fontSize: theme.spacing(1.5),
  },
  btnDateNow: {
    backgroundColor: "#7FDBFF",
    color: "white",
    "&:hover": {
      backgroundColor: "#7FDBFF",
    },
    fontSize: ".64rem",
  },
  btnAdd: {
    backgroundColor: "#2ECC40",
    color: "white",
    "&:hover": {
      backgroundColor: "#2ECC40",
    },
    fontSize: ".64rem",
  },
}));

export default function NativeSelects({ users: { id, homeWork, name } }) {
  const dateNow = moment().format().split("T")[0];
  const date = dateNow;
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [homeWorkDate, setHomeWorkDate] = useState("");
  const [alert, setAlert] = useState({});
  const [subject, setSubject] = useState("");
  const [nameHomeWork, setNameHomeWork] = useState("");
  const [estimation, setEstimation] = useState("");
  const [author, setAuthor] = useState("");

  const snackBars = useCallback(
    (title, variant) => {
      enqueueSnackbar(`${title}`, { variant });
    },
    [enqueueSnackbar]
  );

  useEffect(() => {
    if (alert.title !== undefined) {
      snackBars(alert.title, alert.variant);
    }
  }, [alert, snackBars]);

  const addBtnHandler = () => {
    const validation = homeWorkValidation(
      homeWorkDate,
      subject,
      nameHomeWork,
      estimation,
      author,
      homeWork
    );
    setAlert(validation);
    if (validation === true) {
      try {
        dispatch(
          addHomeWorkItem(
            id,
            homeWorkDate,
            subject,
            nameHomeWork,
            estimation,
            author
          )
        );
        if (estimation === "Not performed") {
          setAlert({
            variant: "info",
            title: `Пропуск користувачу ${name} успішно створений!`,
          });
          return;
        }
        setAlert({
          variant: "success",
          title: `Оцінка користувачу ${name} додана успішно!`,
        });
      } catch (error) {
        console.log(error);
        if (estimation === "Not performed") {
          setAlert({
            variant: "error",
            title: `Пропуск користувачу ${name} не створений через помилку сервера!`,
          });
          return;
        }
        setAlert({
          variant: "error",
          title: `Оцінка не додана користувачу ${name} через помилку сервера!`,
        });
      }
    }
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <Button
          size="small"
          className={classes.btnDateNow}
          variant="contained"
          onClick={() => setHomeWorkDate(date)}
        >
           Date Now
        </Button>
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="standard-basic"
          label={`Дата`}
          value={homeWorkDate}
          onChange={(e) => setHomeWorkDate(e.target.value)}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectEmpty}
          value={subject}
          name="subject"
          onChange={(e) => setSubject(e.target.value)}
          inputProps={{ "aria-label": "subject" }}
        >
          <option value="">Предмет</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JS">JS</option>
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectEmpty}
          value={nameHomeWork}
          name="lesson"
          onChange={(e) => setNameHomeWork(e.target.value)}
          inputProps={{ "aria-label": "lesson" }}
        >
          <option value="">Назва дз</option>
          <option value={"Створити функцію"}>Створити функцію</option>
          <option value={"Перебрати масив"}>Перебрати масив</option>
          <option value={"Слухачі подій"}>Слухачі подій</option>
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectEmpty}
          value={estimation}
          name="estimation"
          onChange={(e) => setEstimation(e.target.value)}
          inputProps={{ "aria-label": "estimation" }}
        >
          <option value={""}>Оцінка</option>
          <option value={"Not performed"}>Не виконано</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectEmpty}
          value={author}
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
          inputProps={{ "aria-label": "author" }}
        >
          <option value="">Викладач</option>
          <option value="Андрій Лось">Андрій Лось</option>
          <option value="Олег Єнько">Олег Єнько</option>
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button
          variant="contained"
          className={classes.btnAdd}
          onClick={addBtnHandler}
        >
          Додати оцінку
        </Button>
      </FormControl>
    </div>
  );
}
