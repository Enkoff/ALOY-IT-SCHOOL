import React, { useCallback, useEffect, useState } from "react";
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

  const snackBars = useCallback((title, variant) => {
    enqueueSnackbar(`${title}`, { variant });
  },[enqueueSnackbar]);

  useEffect(() => {
    if (!loading && alert.title !== undefined) {
      snackBars(alert.title, alert.variant);
    }
  }, [alert, snackBars, loading]);

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
          title: "?????????????? ???????????? ??????????????",
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
      <Typography align="center">???????????? ??????????????</Typography>
      <form className={classes.form} noValidate autoComplete="off">
        <div>
          <TextField
            size="small"
            id="text"
            label="?????????? ??????????*"
            variant="outlined"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <Tooltip
            arrow
            title="???????????????????? ????????! ????????????: ??1, b1, admin"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="year"
            label="??????"
            variant="outlined"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <Tooltip arrow title="???????????????? ???? ??????????????: 2021" placement="right">
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="date"
            label="????????*"
            variant="outlined"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Tooltip
            arrow
            title="???????????????????? ????????! ????????????: 2021-07-18"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="dayLessonsName"
            label="?????????? ??????????"
            variant="outlined"
            value={dayLessonsName}
            onChange={(e) => setDayLessonsName(e.target.value)}
          />
          <Tooltip
            arrow
            title="???????????????? ???? ??????????????: ???????????? ??????????????????????????"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="teachers"
            label="??????????????????"
            variant="outlined"
            value={teachers}
            onChange={(e) => setTeachers(e.target.value)}
          />
          <Tooltip
            arrow
            title="???????????????? ???? ??????????????: ???????????? ???????? ???? ?????????? ????????"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="lessonOneTime"
            label="?????? ?????????????? 1"
            variant="outlined"
            value={lessonOneTime}
            onChange={(e) => setLessonOneTime(e.target.value)}
          />
          <Tooltip
            arrow
            title="???????????????? ???? ??????????????: 09:00-10:00"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="lessonOneName"
            label="?????????? ?????????????? 1"
            variant="outlined"
            value={lessonOneName}
            onChange={(e) => setLessonOneName(e.target.value)}
          />
          <Tooltip arrow title="???????????????? ???? ??????????????: HTML" placement="right">
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="breakOneTime"
            label="?????? ?????????????? 1"
            variant="outlined"
            value={breakOneTime}
            onChange={(e) => setBreakOneTime(e.target.value)}
          />
          <Tooltip
            arrow
            title="???????????????? ???? ??????????????: 10:00-10:15"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="breakOneName"
            label="?????????? ?????????????? 1"
            variant="outlined"
            value={breakOneName}
            onChange={(e) => setBreakOneName(e.target.value)}
          />
          <Tooltip arrow title="???????????????? ???? ??????????????: ??????????????" placement="right">
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="lessonTwoTime"
            label="?????? ?????????????? 2"
            variant="outlined"
            value={lessonTwoTime}
            onChange={(e) => setLessonTwoTime(e.target.value)}
          />
          <Tooltip
            arrow
            title="???????????????? ???? ??????????????: 10:15-11:15"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="lessonTwoName"
            label="?????????? ?????????????? 2"
            variant="outlined"
            value={lessonTwoName}
            onChange={(e) => setLessonTwoName(e.target.value)}
          />
          <Tooltip arrow title="???????????????? ???? ??????????????: CSS" placement="right">
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="breakTwoTime"
            label="?????? ?????????????? 2"
            variant="outlined"
            value={breakTwoTime}
            onChange={(e) => setBreakTwoTime(e.target.value)}
          />
          <Tooltip
            arrow
            title="???????????????? ???? ??????????????: 11:15-11:30"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="breakTwoName"
            label="?????????? ?????????????? 2"
            variant="outlined"
            value={breakTwoName}
            onChange={(e) => setBreakTwoName(e.target.value)}
          />
          <Tooltip arrow title="???????????????? ???? ??????????????: ??????????????" placement="right">
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="lessonThreeTime"
            label="?????? ?????????????? 3"
            variant="outlined"
            value={lessonThreeTime}
            onChange={(e) => setLessonThreeTime(e.target.value)}
          />
          <Tooltip
            arrow
            title="???????????????? ???? ??????????????: 11:30-12:30"
            placement="right"
          >
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
        <div>
          <TextField
            size="small"
            id="lessonThreeName"
            label="?????????? ?????????????? 3"
            variant="outlined"
            value={lessonThreeName}
            onChange={(e) => setLessonThreeName(e.target.value)}
          />
          <Tooltip arrow title="???????????????? ???? ??????????????: JS" placement="right">
            <HelpIcon className={classes.helpIcon} />
          </Tooltip>
        </div>
      </form>
      <ButtonLoading
        title="???????????? ????????????????"
        loading={loading}
        handleButtonClick={addLessonHandler}
      />
    </>
  );
};

export default AddLesson;
