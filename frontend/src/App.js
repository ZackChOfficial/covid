import React from "react";
import TopBar from "./components/topBar";
import EmptyBar from "./components/emptybar";
import NavBar from "./components/navbar";
import MobNavBar from "./components/mobnavbar";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <TopBar />
      <EmptyBar />
      <NavBar />
      <MobNavBar />
      <Home />
    </div>
  );
}

export default App;
