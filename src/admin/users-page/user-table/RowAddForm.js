import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import moment from "moment";
import { Button, Checkbox } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addRating } from "../../../redux/adminActions";
import { useSnackbar } from "notistack";
import { reatingValidation } from "./reatingValidation";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
      date
    );
    setAlert(validation);

    if (validation === true) {
      try {
        dispatch(
          addRating(id, date, subject, lesson, estimation, author, isLesson)
        );
        setAlert({
          variant: "success",
          title: `Оцінка користувачу ${name} додана успішно!!!`,
        });
      } catch (error) {
        console.log(error);
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
          <option value={0}>Оцінка</option>
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
      <Checkbox value={isLesson} onChange={lessonHandler} />
      <Button variant="contained" onClick={addBtnHandler}>
        Додати оцінку
      </Button>
    </div>
  );
}
