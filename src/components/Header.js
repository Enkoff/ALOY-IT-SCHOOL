import React, { useState } from "react";
import {
  Container,
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import LogIn from "./LogIn";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down(600)]: {
      marginRight: theme.spacing(0),
    },
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down(600)]: {
      fontSize: 17,
    },
  },
}));

const Header = (props) => {
  const [isLoginClick, setIsLoginClick] = useState(false);

  const {isAuth, userId} = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsLoginClick(true);
    setTimeout(() => {
      setIsLoginClick(false);
    }, 1);
  };

  const handlerLogOut = () => {
    dispatch(logOut());
  };

  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ALOY School
          </Typography>
          {`USER ID: ${userId}`}
          {isAuth ? (
            <Button
              onClick={handlerLogOut}
              color="secondary"
              variant="contained"
            >
              Вийти
            </Button>
          ) : (
            <Button onClick={handleClick} color="secondary" variant="contained">
              Увійти
            </Button>
          )}
          <LogIn isLoginClick={isLoginClick} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
