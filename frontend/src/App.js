import React from "react";
import TopBar from "./components/topBar";
import EmptyBar from "./components/emptybar";
import NavBar from "./components/navbar";
import MobNavBar from "./components/mobnavbar";
import Home from "./pages/home";
import Advices from "./pages/advices/AdvicesContainer";
import Questions from "./pages/questions/container";
import Footer from "./components/footer";
import Notfound from "./pages/notfound";
import Map from "./pages/map";
import Sources from "./pages/sources";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <TopBar />
        <EmptyBar />
        <NavBar />
        <MobNavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/protection">
            <Advices />
          </Route>
          <Route exact path="/questions">
            <Questions />
          </Route>
          <Route exact path="/sources">
            <Sources />
          </Route>
          <Route exact path="/map">
            <Map />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
