import React, { useEffect } from "react";
import HomePage from "./Pages/HomePage/Home-page";
import News from './Pages/News/News-page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./redux/userActions";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(store => store.userReducer.isAuth);

  useEffect(() => {
    dispatch(auth());
  },[dispatch])


  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/profile' component={HomePage}/>
        <Route exact path='/rang' component={HomePage}/>
        <Route exact path='/time-table' component={HomePage}/>
        <Route exact path='/education-material' component={HomePage}/>
        <Route exact path='/home-work' component={HomePage}/>
        <Route exact path='/pay' component={HomePage}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
