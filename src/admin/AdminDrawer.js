import React, { useState } from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/authActions";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import StorageIcon from "@material-ui/icons/Storage";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ChatIcon from "@material-ui/icons/Chat";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundImage:
      "url(https://bizcom.kz/wp-content/uploads/2014/12/Parallax-Background-Dark-081.jpg)",
    backgroundPosition: "top",
    backgroundSize: "cover",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundImage:
      "url(https://bizcom.kz/wp-content/uploads/2014/12/Parallax-Background-Dark-081.jpg)",
    backgroundPosition: "top",
    backgroundSize: "cover",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundImage:
      "url(https://bizcom.kz/wp-content/uploads/2014/12/Parallax-Background-Dark-081.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
    backgroundImage:
      "url(https://bizcom.kz/wp-content/uploads/2014/12/Parallax-Background-Dark-081.jpg)",
    backgroundPosition: "center",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
    color: 'white',
    marginRight: "1.2rem",
  },
  icon: {
    color: "white",
  },
  divider: {
    backgroundColor: "white",
  },
  drawerItem: {
    "&:hover": {
      backgroundColor: "grey",
    },
  },
  active: {
    backgroundColor: "grey",
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logOutHandler = () => {
    dispatch(logOut());
    handleDrawerClose();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <ArrowForwardIosIcon fontSize="small" className={classes.icon} />
          </IconButton>
          <Typography variant="h6" noWrap>
            АДМІНІСТРАТИВНА ПАНЕЛЬ
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon className={classes.icon} />
            ) : (
              <ChevronLeftIcon className={classes.icon} />
            )}
          </IconButton>
        </div>
        <Divider className={classes.divider} />
        <List>
          {[
            {
              to: "/admin-add-page",
              title: "Керувння данними",
              icon: StorageIcon,
            },
            {
              to: "/admin-users-page",
              title: "Студенти",
              icon: PeopleAltIcon,
            },
            {
              to: "/admin-message",
              title: "Повідомлення",
              icon: ChatIcon,
            },
            {
              to: "/admin-doc",
              title: "Документація",
              icon: InsertDriveFileIcon,
            },
          ].map((el) => {
            return (
              <Link
                key={el.title}
                onClick={handleDrawerClose}
                to={el.to}
                className={classes.link}
              >
                <ListItem button className={classes.drawerItem}>
                  <ListItemIcon>
                    <el.icon className={classes.icon} />
                  </ListItemIcon>
                  <ListItemText primary={el.title} />
                </ListItem>
              </Link>
            );
          })}
        </List>
        <Divider className={classes.divider} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Link to="/" className={classes.link}>
            <IconButton onClick={logOutHandler} className={classes.drawerItem}>
              <ExitToAppIcon className={classes.icon} />
            </IconButton>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
