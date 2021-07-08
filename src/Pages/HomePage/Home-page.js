import React, { useEffect } from "react";
import { Grid, Paper, Typography, Container, Button, makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";

import MainContent from "./Home-description";
import CallForm from "./Home-call";

const useStyles = makeStyles((theme) => ({
  main: {
    position: "relative",
    color: theme.palette.common.white,
    backgroundImage: `url(https://dsca.schoolspeak.com/Data/Communities/95610001/Postings/37_Academic/1/junior_high_3.jpg)`,
    backgroundRepeat: "no-repet",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  mainPosts: {
    position: "relative",
    padding: theme.spacing(3),
    marginTop: theme.spacing(30),
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.5)",
    borderRadius: "10px",
    marginBottom: theme.spacing(4),
  },
}));

const HomePage = (props) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <Paper className={classes.main}>
        <Container fixed>
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainPosts}>
                <Typography variant="h3" color="inherit" gutterBottom>
                  ALOY IT - SCHOOL
                </Typography>
                <Typography variant="h6" color="initial" paragraph>
                  З ALOY SCHOOL ти отримаєш високооплачувану роботу своєї мрії.
                  Ми готуємо висококласних ІТ-спеціалістів
                </Typography>
                <Button variant="contained" color="secondary">
                  Дізнатісь більше
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <MainContent />
      <CallForm />
    </main>
  );
};

export default HomePage;
