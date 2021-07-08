import React, { useEffect } from "react";
import News from './Pages/News/News-page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { auth } from "./redux/userActions";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import StartScreen from "./Pages/StartScreen";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  },[dispatch])


  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={StartScreen}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/profile' component={StartScreen}/>
        <Route exact path='/rang' component={StartScreen}/>
        <Route exact path='/time-table' component={StartScreen}/>
        <Route exact path='/education-material' component={StartScreen}/>
        <Route exact path='/home-work' component={StartScreen}/>
        <Route exact path='/pay' component={StartScreen}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
