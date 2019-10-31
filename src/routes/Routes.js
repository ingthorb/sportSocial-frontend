import React from "react";
import HomePage from "../components/HomePage/HomePage";
import NotFound from "../components/NotFound/NotFound";
import Users from "../components/Users/Users";
import Sports from "../components/Sports/Sports";
import Events from "../components/Events/Events";
import { withRouter } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/users' component={Users} />
				<Route exact path='/sports' component={Sports} />
				<Route exact path='/events' component={Events} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
};
