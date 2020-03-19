import React from "react";
import TopBar from "./components/topBar";
import EmptyBar from "./components/emptybar";
import NavBar from "./components/navbar";
import MobNavBar from "./components/mobnavbar";
import Home from "./pages/home";
import Advices from "./pages/advices/AdvicesContainer";
import {
	BrowserRouter as Router,
	Switch,
	Route,
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
						<Home />
					</Route>
					<Route exact path="/advices">
						<Advices />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
