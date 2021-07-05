import React, { useEffect, useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  IconButton,
  Dialog,
  Container,
  Typography,
  Box,
  Link,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

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
      position: 'absolute',
      right: '1px'  
  }
}));

export default function LogIn({ isLoginClick }) {
  const classes = useStyles();
  const [open, setIsOpen] = useState(false);

  const handleClickClouse = () => {
    setIsOpen(false);
  };

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
          <IconButton onClick={handleClickClouse} color='inherit'>
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
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="name"
              id="name"
              label="Імя користувача"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Запамятати мене"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Увійти
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Dialog>
  );
}
