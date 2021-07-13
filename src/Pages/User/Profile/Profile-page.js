import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Container,
  makeStyles,
  Avatar,
  IconButton,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import AvatarPopup from './Profile-change-photo';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    position: "relative",
  },
  profileHeader: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(10),
    color: theme.palette.common.white,
    backgroundImage: `url(https://mammothtech.io/wp-content/uploads/2018/02/header-bg.png)`,
    backgroundRepeat: "no-repet",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 0,
  },
  avatarContainer: {
    alignItems: "center",
    width: theme.spacing(22),
    height: theme.spacing(22),
    position: "absolute",
    left: "50%",
    top: "100%",
    transform: "translate(-50%, -50%)",
  },
  avatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    border: "2px solid white",
    position: "absolute",
    left: "50%",
    top: "100%",
    transform: "translate(-50%, -50%)",
  },
  chngePhoto: {
    position: "absolute",
    right: theme.spacing(1),
    bottom: theme.spacing(1),
  }
}));

const ProfilePage = (props) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const { name, avatar } = useSelector((store) => store.userReducer);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const openPopup = () => {
    setIsOpen(true);
  }

  const closePopup = () => {
    setIsOpen(false);
  }

  return (
    <>
      <div className={classes.headerContainer}>
        <Paper className={classes.profileHeader}></Paper>
        <Avatar className={classes.avatar} src={avatar}/>
        <Container className={classes.avatarContainer}>
          <IconButton className={classes.chngePhoto} onClick={openPopup}>
            <PhotoCameraIcon fontSize='large' color='secondary' />
          </IconButton>
        </Container>
      </div>
      <Typography align="center">{name}</Typography>
      <AvatarPopup open={isOpen} closePopup={closePopup}/>
    </>
  );
};

export default ProfilePage;
