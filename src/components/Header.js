import React from "react";
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
  }
}));

const Header = (props) => {
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
          <Button color="secondary" variant="contained">
            Увійти
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
