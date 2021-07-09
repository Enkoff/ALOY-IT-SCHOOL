import React, { useEffect, useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Avatar,
  Button,
  TextField,
  IconButton,
  Dialog,
  Container,
  Typography,
  Box,
  Link,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { useDispatch, useSelector } from "react-redux";
import { clearErrorMessage } from "../../redux/userActions";
import { logIn } from "../../redux/authActions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"ALOY © "}
      <Link color="inherit" href="https://material-ui.com/">
        IT-SCHOOL
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
  },
  cancelContainer: {
    position: "absolute",
    right: "1px",
  },
}));

export default function LogIn({ isLoginClick }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorObj, setErrorObj] = useState({});

  const { errorData, isAuth } = useSelector((state) => state.auth);

  const handleClickClouse = () => {
    setErrorObj({
      isErrorEmail: false,
      isErrorPassword: false,
      isAnotheError: false,
      errorEmailMessage: "",
      errorPasswordMessage: "",
      anotherErrorMessage: "",
    });
    setIsOpen(false);
    setEmail("");
    setPassword("");
  };

  if (isAuth && open) {
    handleClickClouse();
  }

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      dispatch(logIn(email, password));
    } else {
      dispatch(logIn());
    }
  };

  useEffect(() => {
    setErrorObj({
      isErrorEmail: false,
      isErrorPassword: false,
      isAnotheError: false,
      errorEmailMessage: "",
      errorPasswordMessage: "",
      anotherErrorMessage: "",
    });

    if (errorData !== null) {
      if (errorData.field === "email") {
        setErrorObj((prev) => {
          return {
            ...prev,
            isErrorEmail: true,
            errorEmailMessage: errorData.message,
          };
        });
      } else if (errorData.field === "password") {
        setErrorObj((prev) => {
          return {
            ...prev,
            isErrorPassword: true,
            errorPasswordMessage: errorData.message,
          };
        });
      } else {
        setErrorObj((prev) => {
          return {
            ...prev,
            isAnotheError: true,
            anotherErrorMessage: errorData.message,
          };
        });
      }
    }
  }, [errorData]);

  useEffect(() => {
    if (isLoginClick) {
      setIsOpen(true);
    }
  }, [isLoginClick]);

  return (
    <Dialog open={open} onClose={handleClickClouse}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.cancelContainer}>
          <IconButton onClick={handleClickClouse} color="inherit">
            <CancelIcon />
          </IconButton>
        </div>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
             Вхід
          </Typography>
          <div className={classes.form}>
            <TextField
              error={errorObj.isErrorEmail}
              helperText={errorObj.errorEmailMessage}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              margin="normal"
              fullWidth
              type="email"
              id="email"
              label="Адреса електронної пошти"
              name="email"
              autoComplete="name"
              autoFocus
            />
            <TextField
              error={errorObj.isErrorPassword}
              helperText={errorObj.errorPasswordMessage}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleLogin}
            >
              Увійти
            </Button>
          </div>
          {errorObj.isAnotheError && <p style={{color: 'red'}}>{errorObj.anotherErrorMessage}</p>}
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Dialog>
  );
}
