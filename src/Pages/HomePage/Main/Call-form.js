import React from "react";
import { Typography, Container, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PhoneSharpIcon from "@material-ui/icons/PhoneSharp";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    color: theme.palette.common.white,
    backgroundImage: `url(https://istefan.ro/img/hero/web-developer-newsletter-coder-stefan-iordache.jpg)`,
    backgroundRepeat: "no-repet",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down(600)]: {
      flexDirection: "column",
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
  },
  typography: {
    backdropFilter: "blur(30px)",
    borderRadius: "10px",
    display: 'flex',
    justifyContent: 'center',
    fontSize: "4rem",
    backgroundColor: "rgba(0,0,30,0.5)",
    marginBottom: theme.spacing(15),
    [theme.breakpoints.down(600)]: {
      fontSize: "2.3rem",
      marginBottom: theme.spacing(10),
    },
  },
  callContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  callIconContainer: {
    padding: "7%",
    backgroundColor: "#00e676",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "#f50057",
    },
  },
  callIcon: {
    width: 50,
    height: 50,
    color: "white",
  },

}));

const CallForm = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainContent}>
        <Container maxWidth="sm">
          <Typography className={classes.typography}>
            Звязатись з нами
          </Typography>
        </Container>
        <Container maxWidth="sm" className={classes.callContainer}>
          <IconButton className={classes.callIconContainer}>
            <PhoneSharpIcon className={classes.callIcon} />
          </IconButton>
        </Container>
      </div>
    </>
  );
};
export default CallForm;
