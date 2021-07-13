import React, { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

import { useSelector } from "react-redux";

import FB from "../../../Fierbase/FB";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    border: "2px solid white",
    marginBottom: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));

export default function ResponsiveDialog({ open, closePopup }) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const avatar = useSelector((store) => store.userReducer.avatar);
  const newImg = useRef(null);

  const addImage = () => {
    if (newImg !== null) {
      const storageRef = FB.storage().ref();
      const imageRef = storageRef.child(`image/1.jpg`);
      imageRef
        .put(newImg.current.files[0])
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(storageRef);
      // setNewImg()
    }
  };

  const clousePopupAndClearImg = () => {
    closePopup();
    newImg = null;
  };

  return (
    <div>
      <Dialog
        className={classes.root}
        fullScreen={fullScreen}
        open={open}
        onClose={clousePopupAndClearImg}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"ВИ БАЖАЄТЕ ЗМІНТИ ФОТО?"}
        </DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar className={classes.avatar} src={avatar} />
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
            ref={newImg}
          />
          <label htmlFor="icon-button-file">
            <Button aria-label="upload picture" component="span" variant="contained" color="primary">
              Вибрати нове фото
            </Button>
          </label>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={clousePopupAndClearImg} color="primary">
            Відмінити
          </Button>
          <Button onClick={addImage} color="primary" autoFocus>
            Зберегти
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
