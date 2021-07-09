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
import { logOut } from "../../redux/authActions";
import TemporaryDrawer from "./Drawer/Drawer";
import { Link } from "react-router-dom";

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
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  }
}));

const Header = (props) => {
  const [isLoginClick, setIsLoginClick] = useState(false);
  const [open, setOpen] = useState(false);
  const isAuth = useSelector((store) => store.auth.isAuth);
  const dispatch = useDispatch();

  const closeDrawer = () => {
    setOpen(false);
  };

  const openDrawer = () => {
    setOpen(true);
  };

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
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ALOY School
          </Typography>
          {isAuth ? (
            <Link to="/ALOY-IT-SCHOOL" className={classes.link}>
              <Button
                onClick={handlerLogOut}
                color="secondary"
                variant="contained"
              >
                Вийти
              </Button>
            </Link>
          ) : (
            <Button onClick={handleClick} color="secondary" variant="contained">
              Увійти
            </Button>
          )}
          <LogIn isLoginClick={isLoginClick} />
        </Toolbar>
      </Container>
      <TemporaryDrawer open={open} logOut={handlerLogOut} closeDrawer={closeDrawer} />
    </AppBar>
  );
};

export default Header;
