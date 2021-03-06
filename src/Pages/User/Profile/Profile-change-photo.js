import React, { useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Avatar,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import SaveIcon from "@material-ui/icons/Save";
import { changeAvatar } from "../../../redux/userActions";
import AcceptIcon from "../../../components/AcceptCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "14rem",
  },
  avatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    border: "2px solid white",
    marginBottom: theme.spacing(1),
  },
  input: {
    display: "none",
  },
  btn: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  btnExit: {
    color: "red",
    width: theme.spacing(8),
    height: theme.spacing(8)
  },
  disable: {
    pointerEvents: 'none',
  }
}));

export default function ResponsiveDialog({ open, closePopup }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [newAvatar, setNewAvatar] = useState(null);
  const { avatar, id } = useSelector((store) => store.userReducer);
  let imgRef = useRef(null);

  const clousePopupAndClearImg = () => {
    closePopup();
    setTimeout(() => {
      imgRef = null;
      setNewAvatar(null);
    }, 1000);
  };

  const changeFile = (e) => {
    const output = URL.createObjectURL(e.target.files[0]);
    setNewAvatar(output);
  };

  const changeUserAvatar = async () => {
    if (imgRef !== null) {
      await dispatch(changeAvatar(id, avatar, imgRef));
    }
  };
  return (
    <div>
      <Dialog
        className={classes.root}
        open={open}
        onClose={clousePopupAndClearImg}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            className={classes.avatar}
            src={newAvatar === null ? avatar : newAvatar}
          />
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
            ref={imgRef}
            onChange={changeFile}
          />
          <label htmlFor="icon-button-file">
            <Button
              aria-label="upload picture"
              component="span"
              variant="contained"
              color="primary"
            >
              ?????????????? ???????? ????????
            </Button>
          </label>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
          <IconButton onClick={clousePopupAndClearImg}>
            <HighlightOffIcon className={`${classes.btnExit} ${classes.btn}`} />
          </IconButton>
          <div className={imgRef.current === null ? classes.disable : ''} >
            <AcceptIcon
              Icon={SaveIcon}
              closePopup={clousePopupAndClearImg}
              changeUserAvatar={changeUserAvatar}
            />
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
