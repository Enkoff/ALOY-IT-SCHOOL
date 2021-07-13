import React from "react";
import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core/";
import AssignmentIcon from "@material-ui/icons/Assignment";
import InfoIcon from "@material-ui/icons/Info";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import LayersIcon from "@material-ui/icons/Layers";
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

const StartDrawer = ({closeDrawer}) => {
  const classes = useStyles();

  return (
    <>
      <ListItem alignItems="center">
        <ListItemText secondary={"ТУТ БУДЕ ЛОГОТИП"} />
      </ListItem>
      <Divider />
      <Link onClick={closeDrawer} to="/" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Головна"} />
        </ListItem>
      </Link>
      <Link onClick={closeDrawer} to="/news" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={"Новини"} />
        </ListItem>
      </Link>
      <Link onClick={closeDrawer} to="/" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary={"Курси"} />
        </ListItem>
      </Link>
      <Link onClick={closeDrawer} to="/" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <EmojiPeopleIcon />
          </ListItemIcon>
          <ListItemText primary={"Контакти"} />
        </ListItem>
      </Link>
      <Link onClick={closeDrawer} to="/" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary={"Про нас"} />
        </ListItem>
      </Link>
    </>
  );
};

export default StartDrawer;
