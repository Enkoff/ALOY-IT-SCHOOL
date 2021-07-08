import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List } from "@material-ui/core/";
import { useSelector } from "react-redux";

import StartDrawer from "./StartDrawer";
import UserDrawer from "./UserDrawer";

const useStyles = makeStyles({
  list: {
    width: 250,
    padding: 0,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer({ open, logOut, closeDrawer }) {
  const classes = useStyles();
  const isAuth = useSelector((store) => store.userReducer.isAuth);

  const list = () => {
    return (
      <List className={classes.list}>
        {!isAuth && <StartDrawer closeDrawer={closeDrawer} />}
        {isAuth && <UserDrawer closeDrawer={closeDrawer} logOut={logOut} />}
      </List>
    );
  };

  return (
      <Drawer anchor="left" open={open} onClose={closeDrawer}>
        {list()}
      </Drawer>
  );
}
