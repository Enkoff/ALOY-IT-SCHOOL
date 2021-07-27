import React, { useEffect } from "react";
import {
  Paper,
  Grid,
  makeStyles
} from "@material-ui/core";
import AddStudent from "./AddStudent";
import AddLesson from "./AddLesson";
import AddTeacher from "./AddTeacher";
import AddDiscipline from './AddDiscipline';
import AdminList from "./AdminList";
import { useDispatch, useSelector } from "react-redux";
import { setTeachersAndDiscipline } from "../../redux/adminActions";

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
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {teachers, discipline} = useSelector(state => state.admin)

  useEffect(() => {
    dispatch(setTeachersAndDiscipline());
  },[dispatch])

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
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <AddTeacher />
          <AdminList listData={teachers} title='Пошук викладача' listName='teachers' />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <AddDiscipline />
          <AdminList listData={discipline} title='Пошук передмета' listName='discipline' />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
