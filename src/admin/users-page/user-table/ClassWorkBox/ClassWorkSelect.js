import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Tooltip,
  FormControl,
  NativeSelect,
  Button,
  Checkbox,
  TextField,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { addRating, setTeachersAndDiscipline } from "../../../../redux/adminActions";
import { useSnackbar } from "notistack";
import { classWorkValidation } from "./classWorkValidation";

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
    fontSize: '.64rem'
  },
  btnAdd: {
    backgroundColor: "#2ECC40",
    color: "white",
    "&:hover": {
      backgroundColor: "#2ECC40",
    },
    fontSize: '.64rem'
  },
}));

export default function NativeSelects({ users: { id, reating, name } }) {
  const dateNow = moment().format().split("T")[0];
  const date = dateNow;
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const {teachers, discipline} = useSelector(state => state.admin);

  useEffect(() => {
    dispatch(setTeachersAndDiscipline());
  },[dispatch])

  const [classWorkDate, setClassWorkDate] = useState("");
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
    const validation = classWorkValidation(
      classWorkDate,
      subject,
      lesson,
      estimation,
      author,
      reating,
      isLesson
    );
    setAlert(validation);

    if (validation === true) {
      try {
        dispatch(
          addRating(
            id,
            classWorkDate,
            subject,
            lesson,
            estimation,
            author,
            isLesson
          )
        );
        if (estimation === "??????????????") {
          setAlert({
            variant: "info",
            title: `?????????????? ?????????????????????? ${name} ?????????????? ??????????????????!`,
          });
          return;
        }
        setAlert({
          variant: "success",
          title: `???????????? ?????????????????????? ${name} ???????????? ??????????????!`,
        });
      } catch (error) {
        console.log(error);
        if (estimation === "??????????????") {
          setAlert({
            variant: "error",
            title: `?????????????? ?????????????????????? ${name} ???? ?????????????????? ?????????? ?????????????? ??????????????!`,
          });
          return;
        }
        setAlert({
          variant: "error",
          title: `???????????? ???? ???????????? ?????????????????????? ${name} ?????????? ?????????????? ??????????????!`,
        });
      }
    }
  };

  const lessonHandler = () => {
    setIsLesson((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <Button
          size="small"
          className={classes.btnDateNow}
          variant="contained"
          onClick={() => setClassWorkDate(date)}
        >
          ??Date Now
        </Button>
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="standard-basic"
          label={`????????`}
          value={classWorkDate}
          onChange={(e) => setClassWorkDate(e.target.value)}
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
          <option value="">??????????????</option>
          {discipline !== undefined && discipline.map(el => <option key={el.id} value={`${el.name}`}>{el.name}</option>)}
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
          <option value="">????????</option>
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
          <option value={""}>????????????</option>
          <option value={"??????????????"}>??????????????</option>
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
          <option value="">????????????????</option>
          {teachers !== undefined && teachers.map(el => <option key={el.id} value={`${el.name}`}>{el.name}</option>)}
        </NativeSelect>
      </FormControl>
      <div style={{ position: "relative" }}>
        <Checkbox value={isLesson} onChange={lessonHandler} />
        <Tooltip arrow title="???????????????????? ?????? ???? ????????????????????" placement="right">
          <HelpIcon className={classes.helpIcon} />
        </Tooltip>
      </div>
      <FormControl className={classes.formControl}>
        <Button
          variant="contained"
          className={classes.btnAdd}
          onClick={addBtnHandler}
        >
          ???????????? ????????????
        </Button>
      </FormControl>
    </div>
  );
}
