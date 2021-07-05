import React, { useEffect } from "react";
import Header from "../../components/Header";
import Main from "./Main/Main-root";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import { auth } from "../../redux/userActions";

const HomePage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  },[dispatch])
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default HomePage;
