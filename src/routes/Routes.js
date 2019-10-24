import React from "react";
import HomePage from "../components/HomePage/HomePage";
import NotFound from "../components/NotFound/NotFound";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
	return (
		<div>
			<Switch>
				<Route exact path='' component={HomePage} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
};
