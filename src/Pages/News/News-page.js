import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./News-card";

const useStyles = makeStyles((theme) => ({
  newsHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
    backgroundImage: `url(https://www.employmenthelp.org/wp-content/uploads/Workshops-Header-Background.png)`,
    backgroundRepeat: "no-repet",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginTop: theme.spacing(8),
    padding: theme.spacing(10),
  },
  headerTitle: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    padding: theme.spacing(5),
    textAlign: "center",
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.5)",
    borderRadius: "10px",
    color: "white",
  },
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundImage: `url(https://images.unsplash.com/photo-1588773846628-13fce0a32105?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmV3c3BhcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)`,
  },
}));
// НОВОСТІ СТАТІЧЕСКІЕ
const cards = [
  {
    title: "Старт набору",
    date: "2021/07/08",
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/election-2020-latest-news-zoom-background-design-template-18ab573cee866d5c53783a7a323591e0_screen.jpg?ts=1603211821",
  },
  {
    title: "Зміна занять",
    date: "2021/07/07",
    img: "https://lh3.googleusercontent.com/proxy/JrIr92atTgWJJgqaK4Wsgbtbec9GMHJrd47nfz5CohSFacW4ZjqmKhiApvOu-j3oa5ldR06jj_GnZQW4TLgqvTqSqvVBslAVUwFt5FCqoAg4ZfPeBG5gQAOFg5rAAA",
  },
  {
    title: "Наші студенти",
    date: "2021/07/6",
    img: "https://img.freepik.com/free-vector/group-of-people-illustration-set_52683-33806.jpg?size=626&ext=jpg",
  },
  {
    title: "Старт набору",
    date: "2021/07/08",
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/election-2020-latest-news-zoom-background-design-template-18ab573cee866d5c53783a7a323591e0_screen.jpg?ts=1603211821",
  },
  {
    title: "Зміна занять",
    date: "2021/07/07",
    img: "https://lh3.googleusercontent.com/proxy/JrIr92atTgWJJgqaK4Wsgbtbec9GMHJrd47nfz5CohSFacW4ZjqmKhiApvOu-j3oa5ldR06jj_GnZQW4TLgqvTqSqvVBslAVUwFt5FCqoAg4ZfPeBG5gQAOFg5rAAA",
  },
  {
    title: "Наші студенти",
    date: "2021/07/6",
    img: "https://img.freepik.com/free-vector/group-of-people-illustration-set_52683-33806.jpg?size=626&ext=jpg",
  },
];
//

const NewsMain = (props) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className={classes.cardGrid}>
        <Container maxWidth="md">
          <Typography
            className={classes.headerTitle}
            variant="h6"
            color="inherit"
          >
            НОВИНИ
          </Typography>
          <Grid container spacing={4}>
            {cards.map((card, i) => (
              <Grid item key={i} xs={12} sm={6} md={6}>
                <Card title={card.title} img={card.img} date={card.date} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default NewsMain;
