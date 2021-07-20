import React, { useEffect } from "react";
import News from "./Pages/News/News-page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SnackbarProvider } from 'notistack';


import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import StartScreen from "./Pages/StartScreen";
import ProfilePage from "./Pages/User/Profile/Profile-page";
import Dashboard from "./Pages/User/Dashboard/Dashboard";
import Schedule from "./Pages/User/Schedule/Schedule";
import { auth } from "./redux/authActions";
import AdminDrawer from "./admin/AdminDrawer";
import AddPage from "./admin/add-page/AddPage";
import UsersPage from "./admin/users-page/UsersPage";
import AdminStartPage from "./admin/AdminStartPage";

function App() {
  const dispatch = useDispatch();
  const role = useSelector((store) => store.userReducer.role);
  const isAuth = useSelector((store) => store.auth.isAuth);

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  if (role === "admin" && isAuth) {
    return (
      <SnackbarProvider maxSnack={3}>
        <Router>
          <AdminDrawer />
          <Switch>
            <Route exact path="/" component={AdminStartPage} />
            <Route exact path="/admin-add-page" component={AddPage} />
            <Route exact path="/admin-users-page" component={UsersPage} />
          </Switch>
        </Router>
      </SnackbarProvider>
    );
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route exact path="/news" component={News} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/rang" component={Dashboard} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/education-material" component={StartScreen} />
        <Route exact path="/home-work" component={StartScreen} />
        <Route exact path="/pay" component={StartScreen} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
