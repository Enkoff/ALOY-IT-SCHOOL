import React, { useEffect, useState } from "react";
import {
  Paper,
  Grid,
  makeStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as adminActions from "../../redux/adminActions";
import AdminAlert from "../components/AdminAlert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: theme.spacing(9),
    marginTop: theme.spacing(7),
    padding: `1rem 1rem`,
  },
  paper: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    height: "80vh",
    color: theme.palette.text.secondary,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: "20ch",
    },
  },
  goupContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

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

  const [alert, setAlert] = useState({
    variant: "warning",
    title: "ПОМИЛКА",
    subTitle: "Якась помилка",
    strong: "Перевір",
    isAlert: false,
  });

  const dispatch = useDispatch();

  const addUserHandler = async () => {
    setAlert((prev) => {
      return {
        ...prev,
        isAlert: false,
      };
    });

    const validateEmail = (em) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(em).toLowerCase());
    };

    if (!validateEmail(email)) {
      setAlert((prev) => ({
        ...prev,
        variant: "warning",
        title: "ІМЕЙЛ",
        subTitle: "не валідний імейл",
        isAlert: true,
      }));
      setTimeout(() => {
        setAlert((prev) => {
          return {
            ...prev,
            isAlert: false,
          };
        });
      }, 3000);
      return;
    }

    if (password.length < 6) {
      setAlert((prev) => ({
        ...prev,
        variant: "warning",
        title: "ПАРОЛЬ",
        subTitle: "пароль має бути не менше 6-ти символів",
        isAlert: true,
      }));
      setTimeout(() => {
        setAlert((prev) => {
          return {
            ...prev,
            isAlert: false,
          };
        });
      }, 3000);
      return;
    }

    if (name.length === 0) {
      setAlert((prev) => ({
        ...prev,
        variant: "warning",
        title: "ІМЯ",
        subTitle: "поле імя не може бути порожнім",
        isAlert: true,
      }));
      setTimeout(() => {
        setAlert((prev) => {
          return {
            ...prev,
            isAlert: false,
          };
        });
      }, 3000);
      return;
    }

    if (role.length === 0) {
      setAlert((prev) => ({
        ...prev,
        variant: "warning",
        title: "ГРУПА",
        subTitle: "поле група не може бути порожнім",
        isAlert: true,
      }));
      setTimeout(() => {
        setAlert((prev) => {
          return {
            ...prev,
            isAlert: false,
          };
        });
      }, 3000);
      return;
    }

    try {
      await dispatch(adminActions.addUser(email, password, name, role));
      setAlert((prev) => {
        return {
          ...prev,
          variant: "success",
          title: "Успіх",
          subTitle: "Корістувач успішно зареєстрований",
          strong: "Статус OK",
          isAlert: true,
        };
      });
      setTimeout(() => {
        setAlert((prev) => {
          return {
            ...prev,
            isAlert: false,
          };
        });
      }, 5000);
    } catch (error) {
      console.log("ЖОРСТКА ПОМИЛКА СЕРВАКА");
    }
  };

  const addLessonsToCalendar = async () => {
    dispatch(
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
  };

  useEffect(() => {
    dispatch(adminActions.setUsers());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography align="center">Додати студент</Typography>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                size="small"
                id="email"
                label="Імейл"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                size="small"
                id="password"
                label="Пароль"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                size="small"
                id="name"
                label="Імя"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                size="small"
                id="role"
                label="Група"
                variant="outlined"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
              <TextField
                disabled
                size="small"
                id="pole 1"
                label="Додаткове поле"
                variant="outlined"
                // value={role}
                // onChange={(e) => setRole(e.target.value)}
              />
              <TextField
                disabled
                size="small"
                id="pole 2"
                label="Додаткове поле"
                variant="outlined"
                // value={role}
                // onChange={(e) => setRole(e.target.value)}
              />
            </form>
            <Button
              onClick={addUserHandler}
              variant="contained"
              color="primary"
              disableElevation
            >
              Додати cтудента
            </Button>
            {alert.isAlert && (
              <AdminAlert
                variant={alert.variant}
                title={alert.title}
                subTitle={alert.subTitle}
                strong={alert.strong}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography align="center">Додати заняття</Typography>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                size="small"
                id="text"
                label="Назва групи"
                variant="outlined"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />

              <TextField
                size="small"
                id="year"
                label="Рік"
                variant="outlined"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <TextField
                size="small"
                id="date"
                label="Дата"
                variant="outlined"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <TextField
                size="small"
                id="dayLessonsName"
                label="Назва блоку"
                variant="outlined"
                value={dayLessonsName}
                onChange={(e) => setDayLessonsName(e.target.value)}
              />
              <TextField
                size="small"
                id="teachers"
                label="Викладачі"
                variant="outlined"
                value={teachers}
                onChange={(e) => setTeachers(e.target.value)}
              />
              <TextField
                size="small"
                id="lessonOneTime"
                label="Час заннятя 1"
                variant="outlined"
                value={lessonOneTime}
                onChange={(e) => setLessonOneTime(e.target.value)}
              />
              <TextField
                size="small"
                id="lessonOneName"
                label="Назва заннятя 1"
                variant="outlined"
                value={lessonOneName}
                onChange={(e) => setLessonOneName(e.target.value)}
              />
              <TextField
                size="small"
                id="breakOneTime"
                label="Час перерви 1"
                variant="outlined"
                value={breakOneTime}
                onChange={(e) => setBreakOneTime(e.target.value)}
              />
              <TextField
                size="small"
                id="breakOneName"
                label="Назва перерви 1"
                variant="outlined"
                value={breakOneName}
                onChange={(e) => setBreakOneName(e.target.value)}
              />
              <TextField
                size="small"
                id="lessonTwoTime"
                label="Час заннятя 2"
                variant="outlined"
                value={lessonTwoTime}
                onChange={(e) => setLessonTwoTime(e.target.value)}
              />
              <TextField
                size="small"
                id="lessonTwoName"
                label="Назва заннятя 2"
                variant="outlined"
                value={lessonTwoName}
                onChange={(e) => setLessonTwoName(e.target.value)}
              />
              <TextField
                size="small"
                id="breakTwoTime"
                label="Час перерви 2"
                variant="outlined"
                value={breakTwoTime}
                onChange={(e) => setBreakTwoTime(e.target.value)}
              />
              <TextField
                size="small"
                id="breakTwoName"
                label="Назва перерви 2"
                variant="outlined"
                value={breakTwoName}
                onChange={(e) => setBreakTwoName(e.target.value)}
              />
              <TextField
                size="small"
                id="lessonThreeTime"
                label="Час заняття 3"
                variant="outlined"
                value={lessonThreeTime}
                onChange={(e) => setLessonThreeTime(e.target.value)}
              />
              <TextField
                size="small"
                id="lessonThreeName"
                label="Назва заняття 3"
                variant="outlined"
                value={lessonThreeName}
                onChange={(e) => setLessonThreeName(e.target.value)}
              />
            </form>
            <Button
              onClick={addLessonsToCalendar}
              variant="contained"
              color="primary"
              disableElevation
            >
              Додати заняття
            </Button>
            {alert.isAlert && (
              <AdminAlert
                variant={alert.variant}
                title={alert.title}
                subTitle={alert.subTitle}
                strong={alert.strong}
              />
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
