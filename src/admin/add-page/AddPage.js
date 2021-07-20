import React from "react";
import {
  Paper,
  Grid,
  makeStyles
} from "@material-ui/core";
import AddStudent from "./AddStudent";
import AddLesson from "./AddLesson";

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
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <AddStudent />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <AddLesson />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
