import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles, Typography, TextField, Tooltip } from "@material-ui/core";
import * as adminActions from "../../redux/adminActions";
import HelpIcon from "@material-ui/icons/Help";
import { lessonValidation } from "./lessonValidation";
import ButtonLoading from "../../components/ButtonLoading";
import { useSnackbar } from "notistack";


const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: "20ch",
    },
  },
  helpIcon: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(0.2),
    color: "greey",
    fontSize: theme.spacing(1.5),
  },
}));

const AddLesson = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [groupName, setGroupName] = useState("");
  const [year, setYear] = useState("");
  const [date, setDate] = useState("");
  const [dayLessonsName, setDayLessonsName] = useState("");
  const [teachers, setTeachers] = useState("");
  const [lessonOneTime, setLessonOneTime] = useState("");
  const [lessonOneName, setLessonOneName] = useState("");
  const [breakOneTime, setBreakOneTime] = useState("");
  const [breakOneName, setBreakOneName] = useState("");
  const [lessonTwoTime, setLessonTwoTime] = useState("");
  const [lessonTwoName, setLessonTwoName] = useState("");
  const [breakTwoTime, setBreakTwoTime] = useState("");
  const [breakTwoName, setBreakTwoName] = useState("");
  const [lessonThreeTime, setLessonThreeTime] = useState("");
  const [lessonThreeName, setLessonThreeName] = useState("");

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({});

  const clearInputs = () => {
    setGroupName("");
    setYear("");
    setDate("");
    setDayLessonsName("");
    setTeachers("");
    setLessonOneTime("");
    setLessonOneName("");
    setBreakOneTime("");
    setBreakOneName("");
    setLessonTwoTime("");
    setLessonTwoName("");
    setBreakTwoTime("");
    setBreakTwoName("");
    setLessonThreeTime("");
    setLessonThreeName("");
  };

  const snackBars = (title, variant) => {
    enqueueSnackbar(`${title}`, { variant });
  };

  useEffect(() => {
    if (!loading && alert.title !== undefined) {
      snackBars(alert.title, alert.variant);
    }
  }, [alert]);

  const addLessonHandler = async () => {
    setAlert(lessonValidation(groupName, date));

    if (lessonValidation(groupName, date) === true) {
      try {
        setLoading(true);
        await dispatch(
          adminActions.addCalendarData(
            groupName,
            year,
            date,
            dayLessonsName,
            teachers,
            lessonOneTime,
            lessonOneName,
            breakOneTime,
            breakOneName,
            lessonTwoTime,
            lessonTwoName,
            breakTwoTime,
            breakTwoName,
            lessonThreeTime,
            lessonThreeName
          )
        );
        setLoading(false);
        setAlert({
          variant: "success",
          title: "Заняття додано успішно",
          strong: "Статус OK",
          isAlert: true,
        });
        clearInputs();
      } catch (error) {
        setLoading(false);
        console.log(error.code);
      }
    }
  };

  return (
    <>
      <Typography align="center">Додати заняття</Typography>
      <form className={classes.form} noValidate autoComplete="off">
        <div>
          <TextField
            size="small"
            id="text"
            label="Назва групи*"
            variant="outlined"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <Tooltip
            arrow
            title="Обовязкове поле! Примір: а1, b1, admin"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="year"
            label="Рік"
            variant="outlined"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <Tooltip arrow title="Значення по дефолту: 2021" placement="right">
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="date"
            label="Дата*"
            variant="outlined"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Tooltip
            arrow
            title="Обовязкове поле! Примір: 2021-07-18"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="dayLessonsName"
            label="Назва блоку"
            variant="outlined"
            value={dayLessonsName}
            onChange={(e) => setDayLessonsName(e.target.value)}
          />
          <Tooltip
            arrow
            title="Значення по дефолту: Основи програмування"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="teachers"
            label="Викладачі"
            variant="outlined"
            value={teachers}
            onChange={(e) => setTeachers(e.target.value)}
          />
          <Tooltip
            arrow
            title="Значення по дефолту: Андрій Лось та Єнько Олег"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="lessonOneTime"
            label="Час заннятя 1"
            variant="outlined"
            value={lessonOneTime}
            onChange={(e) => setLessonOneTime(e.target.value)}
          />
          <Tooltip
            arrow
            title="Значення по дефолту: 09:00-10:00"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="lessonOneName"
            label="Назва заннятя 1"
            variant="outlined"
            value={lessonOneName}
            onChange={(e) => setLessonOneName(e.target.value)}
          />
          <Tooltip arrow title="Значення по дефолту: HTML" placement="right">
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="breakOneTime"
            label="Час перерви 1"
            variant="outlined"
            value={breakOneTime}
            onChange={(e) => setBreakOneTime(e.target.value)}
          />
          <Tooltip
            arrow
            title="Значення по дефолту: 10:00-10:15"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="breakOneName"
            label="Назва перерви 1"
            variant="outlined"
            value={breakOneName}
            onChange={(e) => setBreakOneName(e.target.value)}
          />
          <Tooltip arrow title="Значення по дефолту: Перерва" placement="right">
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="lessonTwoTime"
            label="Час заннятя 2"
            variant="outlined"
            value={lessonTwoTime}
            onChange={(e) => setLessonTwoTime(e.target.value)}
          />
          <Tooltip
            arrow
            title="Значення по дефолту: 10:15-11:15"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="lessonTwoName"
            label="Назва заннятя 2"
            variant="outlined"
            value={lessonTwoName}
            onChange={(e) => setLessonTwoName(e.target.value)}
          />
          <Tooltip arrow title="Значення по дефолту: CSS" placement="right">
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="breakTwoTime"
            label="Час перерви 2"
            variant="outlined"
            value={breakTwoTime}
            onChange={(e) => setBreakTwoTime(e.target.value)}
          />
          <Tooltip
            arrow
            title="Значення по дефолту: 11:15-11:30"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="breakTwoName"
            label="Назва перерви 2"
            variant="outlined"
            value={breakTwoName}
            onChange={(e) => setBreakTwoName(e.target.value)}
          />
          <Tooltip arrow title="Значення по дефолту: Перерва" placement="right">
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="lessonThreeTime"
            label="Час заняття 3"
            variant="outlined"
            value={lessonThreeTime}
            onChange={(e) => setLessonThreeTime(e.target.value)}
          />
          <Tooltip
            arrow
            title="Значення по дефолту: 11:30-12:30"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="lessonThreeName"
            label="Назва заняття 3"
            variant="outlined"
            value={lessonThreeName}
            onChange={(e) => setLessonThreeName(e.target.value)}
          />
          <Tooltip arrow title="Значення по дефолту: JS" placement="right">
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
      </form>
      <ButtonLoading
        title="Додати студента"
        loading={loading}
        handleButtonClick={addLessonHandler}
      />
    </>
  );
};

export default AddLesson;
