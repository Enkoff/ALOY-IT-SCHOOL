import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { Typography, TextField, makeStyles } from "@material-ui/core";
import * as adminActions from "../../redux/adminActions";
import ButtonLoading from "../../components/ButtonLoading";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: "20ch",
    },
    input: {
      display: "none",
    },
  },
}));

const AddTeacher = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [teacherName, setTeacherName] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({});

  const snackBars = useCallback(
    (title, variant) => {
      enqueueSnackbar(`${title}`, { variant });
    },
    [enqueueSnackbar]
  );

  useEffect(() => {
    if (!loading && alert.title !== undefined) {
      snackBars(alert.title, alert.variant);
    }
  }, [alert, snackBars, loading]);

  const addTeacherHandler = async () => {
    if (teacherName.length !== 0) {
      try {
        setLoading(true);
        dispatch(adminActions.addTeacher(teacherName));
        setAlert({
          variant: "success",
          title: `Викладач ${teacherName} успішно доданий!`,
        });
        setTeacherName("");
      } catch (error) {
        setAlert({
          variant: "error",
          title: `Викладач ${teacherName} не доданий через помилку сервера!`,
        });
      }
    } else {
      setAlert({
        variant: "worning",
        title: "Поле викладач не може бути порожнім!",
      });
    }
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <Typography align="center">Додати викладача</Typography>
      <div className={classes.container}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            size="small"
            id="teacherName"
            label="ФІО викладача*"
            variant="outlined"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
          />
        </form>
        <ButtonLoading
          title="Додати викладача"
          loading={loading}
          handleButtonClick={addTeacherHandler}
        />
      </div>
    </div>
  );
};

export default AddTeacher;
