import React, { useState, useEffect } from "react";
// import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useSelector } from "react-redux";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Avatar from "@material-ui/core/Avatar";
import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer({ isBurgerClick }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const { isAuth, userId } = useSelector((store) => store.userReducer);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    toggleDrawer();
  }, [isBurgerClick]);

  const list = () => {
    return (
      <List className={classes.list}>
        {isAuth && (
          <>
            <ListItem
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Avatar />
              {`UserID  ${userId}`}
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary={"Профіль"} />
            </ListItem>
          </>
        )}
        {!isAuth && (
          <>
            <ListItem alignItems="center">
              <ListItemText secondary={"ВИ НЕ ЗАРЕЄСТРОВАНИЙ КОРИСТУВАЧ"} />
            </ListItem>
            <Divider />
          </>
        )}

        <ListItem>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={"Новини"} />
        </ListItem>
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
