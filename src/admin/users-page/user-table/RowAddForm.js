import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  Tooltip,
  FormControl,
  NativeSelect,
  Button,
  Checkbox,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addRating } from "../../../redux/adminActions";
import { useSnackbar } from "notistack";
import { reatingValidation } from "./reatingValidation";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(3)
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
}));

export default function NativeSelects({ users: { id, reating, name } }) {
  const dateNow = moment().format().split("T")[0];
  const date = dateNow;
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [alert, setAlert] = useState({});
  const [subject, setSubject] = useState("");
  const [lesson, setLesson] = useState("");
  const [estimation, setEstimation] = useState("");
  const [author, setAuthor] = useState("");
  const [isLesson, setIsLesson] = useState(false);

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
    const validation = reatingValidation(
      subject,
      lesson,
      estimation,
      author,
      reating,
      date,
      isLesson
    );
    setAlert(validation);

    if (validation === true) {
      try {
        dispatch(
          addRating(id, date, subject, lesson, estimation, author, isLesson)
        );
        if (estimation === "Пропуск") {
          setAlert({
            variant: "info",
            title: `Пропуск користувачу ${name} успішно створений!!!`,
          });
          return;
        }
        setAlert({
          variant: "success",
          title: `Оцінка користувачу ${name} додана успішно!!!`,
        });
      } catch (error) {
        console.log(error);
        if (estimation === "Пропуск") {
          setAlert({
            variant: "error",
            title: `Пропуск користувачу ${name} не створений через помилку сервера!!!`,
          });
          return;
        }
        setAlert({
          variant: "error",
          title: `Оцінка не додана користувачу ${name} через помилку сервера!!!`,
        });
      }
    }
  };

  const lessonHandler = () => {
    setIsLesson((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl} disabled>
        <InputLabel htmlFor="name-native-disabled"></InputLabel>
        <NativeSelect value={date}>
          <option value={dateNow}>{dateNow}</option>
        </NativeSelect>
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
          value={lesson}
          name="lesson"
          onChange={(e) => setLesson(e.target.value)}
          inputProps={{ "aria-label": "lesson" }}
        >
          <option value="">Урок</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
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
          <option value={"Пропуск"}>Пропуск</option>
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
      <div style={{ position: "relative" }}>
        <Checkbox value={isLesson} onChange={lessonHandler} />
        <Tooltip arrow title="Додатковий бал за активність" placement="right">
          <HelpIcon className={classes.helpIcon} />
        </Tooltip>
      </div>
      <Button variant="contained" onClick={addBtnHandler}>
        Додати оцінку
      </Button>
    </div>
  );
}
