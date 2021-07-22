import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, TextField, makeStyles } from "@material-ui/core";
import * as adminActions from "../../redux/adminActions";
import ButtonLoading from "../../components/ButtonLoading";
import { addStudentValidation } from "./studentValidation";
import { useSnackbar } from "notistack";

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

const AddStudent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({});

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setName("");
    setRole("");
  };

  const snackBars = useCallback((title, variant) => {
    enqueueSnackbar(`${title}`, { variant });
  },[enqueueSnackbar]);

  useEffect(() => {
    if (!loading && alert.title !== undefined) {
      snackBars(alert.title, alert.variant);
    }
  }, [alert, snackBars, loading]);

  const addUserHandler = async () => {
    setAlert(addStudentValidation(email, password, name, role));

    if (addStudentValidation(email, password, name, role) === true) {
      try {
        setLoading(true);
        await dispatch(adminActions.addUser(email, password, name, role));
        setLoading(false);
        setAlert({
          variant: "success",
          title: "Корістувач успішно зареєстрований!",
          isAlert: true,
        });
        clearInputs();
      } catch (error) {
        setLoading(false);
        console.log(error.code);
        if (String(error.code) === "auth/email-already-in-use") {
          setAlert({
            variant: "error",
            title: "Імейл вже зареєстрована!",
            isAlert: true,
          });
        }
      }
    }
  };

  return (
    <>
      <Typography align="center">Додати студент</Typography>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          size="small"
          id="email"
          label="Імейл*"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          size="small"
          id="password"
          label="Пароль*"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          size="small"
          id="name"
          label="Імя*"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          size="small"
          id="role"
          label="Група*"
          variant="outlined"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <TextField
          disabled
          size="small"
          id="pole 1"
          label="Додати фото"
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
      <ButtonLoading
        title="Додати студента"
        loading={loading}
        handleButtonClick={addUserHandler}
      />
    </>
  );
};

export default AddStudent;
