import React, { useEffect, useState } from "react";
import { makeStyles, Avatar, Typography, Slide, Zoom } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import FB from "../../../Fierbase/FB";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(12),
    margin: 0,
    height: "50vh",
    backgroundImage:
      "url(https://i.pinimg.com/originals/40/e1/1c/40e11ca3441e08e092ae5b778c2eda31.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    [theme.breakpoints.down(600)]: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  },
  userContainer: {
    position: "relative",
    flexDirection: "column",
    borderRadius: "50%",
    overflow: "hidden",
  },
  userAvatar: {
    border: "2px solid white",
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down(600)]: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  },
  avatarContainer: {
    position: "relative",
    marginBottom: theme.spacing(5),
    overflow: "hidden",
    borderRadius: "50%",
    border: "2px solid #20B2AA",
  },
  rang: {
    backgroundColor: "rgba(0, 0, 0, 0.5);",
    position: "absolute",
    bottom: theme.spacing(-0.3),
    color: "yellow",
    fontSize: theme.spacing(1.4),
    width: "100%",
    textAlign: "center",
  },
  userRang: {
    backgroundColor: "rgba(0, 0, 0, 0.5);",
    color: "yellow",
    width: "25%",
    fontSize: theme.spacing(3),
    [theme.breakpoints.down(600)]: {
      width: "60%",
    },
    borderRadius: "8px",
    textAlign: "center",
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const { name, avatar, reating, id } = useSelector(
    (store) => store.userReducer
  );

  useEffect(() => {
    const getUsers = async () => {
      const users = await FB.firestore().collection("users").get();
      let newUsersArray = [];
      users.forEach((u) => {
        newUsersArray.push(u.data());
      });
      newUsersArray.sort((a, b) => average(b.reating) - average(a.reating));
      setUsers(newUsersArray);
    };
    getUsers();
  }, []);

  const average = (nums) => {
    if (nums !== null) {
      return nums.reduce((a, b) => a + b) / nums.length;
    }
  };

  return (
    <div className={classes.root}>
      <Slide
        direction="down"
        timeout={{
          enter: 1500,
        }}
        in={true}
        mountOnEnter
        unmountOnExit
      >
        <div style={{ height: "25vh" }}>
          <Typography
            style={{ color: "yellow" }}
            variant="h5"
            align="center"
            className={classes.title}
          >
            Топ 5 студентів
          </Typography>
          <AvatarGroup spacing="small" max={6}>
            {users.length !== 0 &&
              users.map((el) => (
                <div key={el.id} className={classes.avatarContainer}>
                  <Avatar
                    className={classes.avatar}
                    alt={el.name}
                    src={el.avatar}
                  />
                  <Typography
                    className={classes.rang}
                    align="center"
                    variant="subtitle1"
                    color="primary"
                  >
                    &#10026;
                    {average(el.reating).toFixed(1)}
                  </Typography>
                </div>
              ))}
          </AvatarGroup>
        </div>
      </Slide>
      <Zoom
        direction="left"
        timeout={{
          enter: 1500,
        }}
        in={true}
        mountOnEnter
        unmountOnExit
      >
        <div
          style={{
            height: "30vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            style={{
              color: "white",
              borderRadius: "5px",
              backgroundColor: "rgba(0,0,0,0.7)",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
            }}
            align="center"
            variant="button"
            color="primary"
          >
            Вітаю ти знаходишсья на {users.findIndex((el) => el.id === id) + 1}{" "}
            місці
          </Typography>
          <div className={classes.userContainer}>
            <Avatar className={classes.userAvatar} alt={name} src={avatar} />
          </div>
        </div>
      </Zoom>
      <Slide
        direction="right"
        timeout={{
          enter: 1500,
        }}
        in={true}
        mountOnEnter
        unmountOnExit
      >
        <Typography
          className={classes.userRang}
          align="center"
          variant="subtitle1"
          color="primary"
        >
          Твій рейтинг &#10026;
          {average(reating).toFixed(1)}
          <Typography>
            кількість набраних балів
            {reating.reduce((a, b) => a + b)}
          </Typography>
        </Typography>
      </Slide>
    </div>
  );
};

export default Dashboard;