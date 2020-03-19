import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState(null);
  const [date, setDate] = useState(null);
  let url = "http://localhost:3001/";
  useEffect(() => {
    fetch(url + "data")
      .then(res => res.json())
      .then(data => setData(data));
    fetch(url + "date")
      .then(res => res.json())
      .then(data => setDate(data));
  }, [url]);
  return (
    <div>
      <Router>
        <TopBar date={date} />
        <EmptyBar />
        <NavBar />
        <MobNavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Home data={data} />
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
