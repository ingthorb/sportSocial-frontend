import React from "react";
import HomePage from "../components/HomePage/HomePage";
import NotFound from "../components/NotFound/NotFound";
import Sports from "../components/Sports/Sports";
import Events from "../components/Events/Events";
import Groups from "../components/Groups/Groups";
import SportDetail from "../components/SportDetails/SportDetails"
import GroupDetail from "../components/GroupDetail/GroupDetail"
import { Route, Switch } from "react-router-dom";

export const Routes = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/sports' component={Sports} />
				<Route exact path='/sports/:id' component={SportDetail} />
				<Route exact path='/events' component={Events} />
				<Route exact path='/groups' component={Groups} />
				<Route exact path='/groups/:id' component={GroupDetail} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
};
