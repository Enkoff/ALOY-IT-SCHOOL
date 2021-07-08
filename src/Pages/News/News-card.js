import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: '100%',
    borderRadius: "20px",
  },
  mediaContainer: {
    overflow: "hidden",
  },
  media: {
    transition: "1s",
    height: 320,
    "&:hover": {
      transform: "scale(1.1)",
      transition: "1s",
    },
  },
  mediaTitle: {
    position: "absolute",
    color: "white",
    bottom: theme.spacing(4),
    left: theme.spacing(2),
    backgroundColor: "#0cbc87",
    backdropFilter: "blur(3px)",
    borderRadius: "10px",
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    fontFamily: 'BlinkMacSystemFont'
  },
  mediaDate: {
    position: "absolute",
    color: 'white',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    textAlign: 'right',
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    bottom: theme.spacing(0),
    right: theme.spacing(0),
    width:'100%',
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.5)",
  },
}));

const CardItem = ({ title, img, date }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.mediaContainer}>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <Typography className={classes.mediaTitle} variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.mediaDate}>
           {date}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default CardItem;
