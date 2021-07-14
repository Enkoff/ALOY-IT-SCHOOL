import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "30%",
    left: "30%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function CircularIntegration({
  Icon,
  changeUserAvatar,
  closePopup,
}) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const handleButtonClick = async () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      await changeUserAvatar();
      setSuccess(true);
      setLoading(false);
      setTimeout(() => {
        closePopup();
      }, 700);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Fab
          aria-label="save"
          color="primary"
          className={buttonClassname}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <Icon />}
        </Fab>
        {loading && (
          <CircularProgress size={68} className={classes.fabProgress} />
        )}
      </div>
    </div>
  );
}
