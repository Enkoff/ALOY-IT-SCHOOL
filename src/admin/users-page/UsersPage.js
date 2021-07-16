import React, { useEffect, useState } from "react";
import {
  Paper,
  Grid,
  Typography,
  makeStyles
} from "@material-ui/core";
import CustomizedSelects from "./SelectedGroupe";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft: theme.spacing(9),
      marginTop: theme.spacing(7),
      padding: `1rem 1rem`,
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
    },
  }));

const UsersPage = (props) => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Typography align="center">Список студентів</Typography>
            <div className={classes.goupContainer}>
              <Typography align="center">Виберіть групу студентів</Typography>
              <CustomizedSelects />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UsersPage;
