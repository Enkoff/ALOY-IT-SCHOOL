import React from "react";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  makeStyles,
  Typography
} from "@material-ui/core/";
import { useSelector } from "react-redux";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PaymentIcon from "@material-ui/icons/Payment";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import { Link } from "react-router-dom";

import avatarBackground from "../../../image/user/avatar-background.jpeg";

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundImage: `url(${avatarBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    WebkitBackgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginBottom: theme.spacing(1),
  },
  userName: {
    marginBottom: theme.spacing(1),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    borderRadius: theme.spacing(2),
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.5)",
    color: "white",
  },
  rangContainer: {
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.5)",
    marginBottom: theme.spacing(1),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    borderRadius: theme.spacing(1),
  },
  rangValue: {
    marginLeft: theme.spacing(1),
    color: "yellow",
  },
  rangIcon: {
    color: "yellow",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

const UserDrawer = ({ logOut, closeDrawer }) => {
  const classes = useStyles();
  const { name, avatar } = useSelector((store) => store.userReducer);

  return (
    <>
      <ListItem className={classes.avatarContainer}>
        <Avatar className={classes.avatar} src={avatar} />
        <Typography className={classes.userName}>
          {name}
        </Typography>
        <ListItemIcon className={classes.rangContainer}>
          <LocalActivityIcon className={classes.rangIcon} />
          <Typography className={classes.rangValue}>4.5/5</Typography>
        </ListItemIcon>
      </ListItem>
      <Divider />
      <Link onClick={closeDrawer} to="/news" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={"Новини"} />
        </ListItem>
      </Link>
      <Link onClick={closeDrawer} to="/profile" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary={"Профіль"} />
        </ListItem>
      </Link>
      <Link onClick={closeDrawer} to="/rang" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary={"Рейтинг"} />
        </ListItem>
      </Link>
      <Link onClick={closeDrawer} to="/time-table" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
          <ListItemText primary={"Розклад занять"} />
        </ListItem>
      </Link>
      <Link onClick={closeDrawer} to="/education-material" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary={"Учбові матеріали"} />
        </ListItem>
      </Link>
      <Link onClick={closeDrawer} to="/home-work" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <HomeWorkIcon />
          </ListItemIcon>
          <ListItemText primary={"Домашні завдання"} />
        </ListItem>
      </Link>
      <Link onClick={closeDrawer} to="/pay" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary={"Оплата онлайн"} />
        </ListItem>
      </Link>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <Button onClick={logOut} color="primary" variant="contained">
          Вийти
        </Button>
      </div>
    </>
  );
};

export default UserDrawer;
