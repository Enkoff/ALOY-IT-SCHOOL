import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, TextField, makeStyles } from "@material-ui/core";
import * as adminActions from "../../redux/adminActions";
import ButtonLoading from "../../components/ButtonLoading";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
}));

const AddDiscipline = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [discipline, setDiscipline] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({});

  const snackBars = useCallback(
    (title, variant) => {
      enqueueSnackbar(`${title}`, { variant });
    },
    [enqueueSnackbar]
  );

  useEffect(() => {
    if (!loading && alert.title !== undefined) {
      snackBars(alert.title, alert.variant);
    }
  }, [alert, snackBars, loading]);

  const addDisciplineHandler = async () => {
    if (discipline.length !== 0) {
      try {
        setLoading(true);
        dispatch(adminActions.addDiscipline(discipline));
        setAlert({
          variant: "success",
          title: `Предмет ${discipline} успішно доданий!`,
        });
        setDiscipline('');
      } catch (error) {
        setAlert({
          variant: "error",
          title: `Предмет ${discipline} не доданий через помилку сервера!`,
        });
      }
    } else {
      setAlert({
        variant: "worning",
        title: "Поле предмет не може бути порожнім!",
      });
    }
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <Typography align="center">Додати предмет</Typography>
      <div className={classes.container}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            size="small"
            id="discipline"
            label="Назва предмета*"
            variant="outlined"
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
          />
        </form>
        <ButtonLoading
          title="Додати предмет"
          loading={loading}
          handleButtonClick={addDisciplineHandler}
        />
      </div>
    </div>
  );
};

export default AddDiscipline;
