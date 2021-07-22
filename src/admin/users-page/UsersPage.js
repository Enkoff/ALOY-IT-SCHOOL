import React, { useEffect, useState } from "react";
import { Paper, Grid, Typography, makeStyles } from "@material-ui/core";
import CustomizedSelects from "./SelectedGroupe";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../redux/adminActions";
import UsersTable from "./user-table/UsersTable";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: theme.spacing(9),
    marginTop: theme.spacing(7),
    padding: `1.5rem 1.5rem`,
  },
  paper: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    height: "80vh",
    color: theme.palette.text.secondary,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: "20ch",
    },
  },
  goupContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  date: {
    color: "black",
    fontSize: "1rem",
    fontWeight: "bold",
  },
}));

const UsersPage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState("a1");
  const users = useSelector((state) => state.admin.users);
  const dateNow = moment().format().split("T")[0];

  useEffect(() => {
    dispatch(setUsers());
  }, [dispatch]);

  const groupNameHandler = (grName) => {
    setGroupName(grName);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Typography align="center">Список студентів</Typography>
            <div className={classes.goupContainer}>
              <Typography align="center">Виберіть групу студентів</Typography>
              <CustomizedSelects setGroupName={groupNameHandler} />
            </div>
            <Typography
              variant="overline"
              className={classes.date}
            >{`Дата: ${dateNow}`}</Typography>
            <UsersTable groupName={groupName} users={users} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UsersPage;
