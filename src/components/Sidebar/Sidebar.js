import React from "react";
import "./Sidebar.css";
import { withRouter } from "react-router";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
function Sidebar() {
	return (
		<div className='Sidebar'>
			<h1 class='sidenav__header'>
				<NavLink to={"/"}>Sport Social</NavLink>
			</h1>
			<ul class='sidenav__list'>
				<li class='sidenav__list-item'>
					<NavLink class='sidenav__link-item' to={"/events"}>
						Events
						<i class='fas fa-calendar-day'></i>
					</NavLink>
				</li>
				<li class='sidenav__list-item'>
					<NavLink class='sidenav__link-item' to={"/sports"}>
						Sports
						<i class='fas fa-running'></i>
					</NavLink>{" "}
				</li>
				<li class='sidenav__list-item'>
					<NavLink class='sidenav__link-item' to={"/users"}>
						Users
						<i class='fas fa-users'></i>
					</NavLink>{" "}
				</li>
			</ul>
		</div>
	);
}

export default withRouter(Sidebar);
