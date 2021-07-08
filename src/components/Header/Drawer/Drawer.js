import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List } from "@material-ui/core/";
import { useSelector } from "react-redux";

import StartDrawer from "./StartDrawer";
import UserDrawer from "./UserDrawer";

const useStyles = makeStyles({
  list: {
    width: 250,
    padding: 0
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer({ isBurgerClick, logOut }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const isAuth = useSelector((store) => store.userReducer.isAuth);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    toggleDrawer();
  }, [isBurgerClick]);

  const list = () => {
    return (
      <List className={classes.list}>
        {!isAuth && <StartDrawer />}
        {isAuth && <UserDrawer logOut={logOut}/>}
      </List>
    );
  };
  return (
    <div>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </div>
  );
}
