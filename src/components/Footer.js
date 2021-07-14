import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundImage:
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDPgxAfT8c3b8JKjue4Fp3pOfIAW-qUpeg24zw0X3xJNxr7t14mJzRhbp371KyQsfv0G0&usqp=CAU)",
    backgroundPosition: "center",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  wrapper: {
    display: "flex",
    [theme.breakpoints.down(600)]: {
      flexDirection: "column",
    },
  },
  footerText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    marginBottom: "10px",
  },
  icon: {
    marginRight: "15px",
  },
  footerTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.3rem",
    color: "white",
    marginBottom: theme.spacing(1),
  },
  addressText: {
    color: "white",
    fontSize: "1rem",
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.wrapper}>
        <Container className={classes.contactsContainer}>
          <Typography className={classes.footerTitle}>Наші Контакти</Typography>
          <Typography className={classes.footerText}>
            <PhoneIcon className={classes.icon} />
            Єнько Олег +38(063)-981-8413
          </Typography>
          <Typography className={classes.footerText}>
            <PhoneIcon className={classes.icon} /> Лось Андрій
            +38(093)-674-73-76
          </Typography>
        </Container>
        <Container className={classes.contactsContainer}>
          <Typography className={classes.footerTitle}>Наша адресса</Typography>
          <Typography className={classes.footerText}>
            <MailOutlineIcon className={classes.icon} />
            aloyitschool@gmail.com
          </Typography>
          <Typography className={classes.footerText}>
            <HomeIcon className={classes.icon} />
            Житомирська обл. м. Малин
          </Typography>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
