import React from "react";
import HomePage from "./Pages/HomePage/Home-page";
import News from './Pages/News/News';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector(store => store.userReducer.isAuth)
  return (
    <Router>
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
    </Router>
  );
}

export default App;
