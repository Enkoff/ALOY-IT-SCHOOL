import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  IconButton,
  Avatar,
  ListItemAvatar,
  ListItemText,
  ListItem,
  List,
  ListItemSecondaryAction,
} from "@material-ui/core";
import Search from "./Search";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useDispatch } from "react-redux";
import { deleteDiscipline, deleteTeacher } from "../../redux/adminActions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  avatar: {
    marginLeft: theme.spacing(1),
  },
}));

// ДОДАТИ ВАЛІДАЦІЮ

export default function AdminList({ listData, title, listName }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setData(listData);
  }, [listData]);

  const deleteBtnHandler = (id) => {
    if (listName === "teachers") {
      try {
        dispatch(deleteTeacher(id));
      } catch (error) {
        console.log(error);
      }
    } else if (listName === "discipline") {
      try {
        dispatch(deleteDiscipline(id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  let filteredListData;

  if (data !== undefined && data !== null) {
    filteredListData = data.filter((item) => {
      return item.name.toLowerCase().includes(inputValue.toLowerCase());
    });
  }

  return (
    <>
      <Search
        title={title}
        inputValue={inputValue}
        changeInputValue={(value) => setInputValue(value)}
      />
      <List dense className={classes.root}>
        {filteredListData !== undefined && filteredListData.map((el, index) => {
          return (
            <>
              <ListItem key={el.id}>
                {`${index + 1}. `}
                {el.avatar !== undefined && (
                  <ListItemAvatar>
                    <Avatar
                      alt={`${el.name}`}
                      className={classes.avatar}
                      src={`/static/images/avatar/${el.name}.jpg`}
                    />
                  </ListItemAvatar>
                )}
                <ListItemText primary={`${el.name}`} />
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() => deleteBtnHandler(el.id)}
                    color="secondary"
                    aria-label="delete"
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </>
  );
}
