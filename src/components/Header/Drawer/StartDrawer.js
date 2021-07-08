import React from "react";
import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core/";
import AssignmentIcon from "@material-ui/icons/Assignment";
import InfoIcon from '@material-ui/icons/Info';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LayersIcon from '@material-ui/icons/Layers';

const StartDrawer = (props) => {
  return (
    <>
      <ListItem alignItems="center">
        <ListItemText secondary={"ТУТ БУДЕ ЛОГОТИП"} />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={"Новини"} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary={"Курси"} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <EmojiPeopleIcon />
        </ListItemIcon>
        <ListItemText primary={"Контакти"} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary={"Про нас"} />
      </ListItem>
    </>
  );
};

export default StartDrawer;
