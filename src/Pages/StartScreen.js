import React from "react";
import { useSelector } from "react-redux";

import HomePage from "./HomePage/Home-page";
import NewsPage from "./News/News-page";

const StartScreen = (props) => {
  const isAuth = useSelector((store) => store.userReducer.isAuth);
  return <>{isAuth ? <NewsPage /> : <HomePage />}</>;
};

export default StartScreen;
