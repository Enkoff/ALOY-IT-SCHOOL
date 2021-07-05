import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    marginTop: theme.spacing(0),
    backgroundColor: '#ecffff'
    // backgroundImage: 'url(https://d-line.biz/pictures/articles/articles_thumbnail_zz0HmWebi5.jpg)'
  },
}));

const MainContent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.mainContent}>
      <Container maxWidth="sm">
        <Typography variant='h6' align="center">
          Школа програмування ALOY - єдина, що має відгуки від роботодавців, які
          входять до списку найкращих компаній DOU.UA. А випускники курсів з
          інкубатором отримують гарантії працевлаштування впродовж 6 місяців
          після успішного закінчення навчання. Але зазвичай їх забирають до себе
          наші офіційні партнери ще до закінчення курсу.
        </Typography>
      </Container>
    </div>
  );
};

export default MainContent;
