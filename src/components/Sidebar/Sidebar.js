import React from "react";
import "./Sidebar.css";
import { withRouter } from "react-router";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
function Sidebar() {
	return (
		<div className='Sidebar'>
			<h1 className='sidenav__header'>
				<NavLink to={"/"}>Sport Social</NavLink>
			</h1>
			<ul className='sidenav__list'>
				<li className='sidenav__list-item'>
					<NavLink className='sidenav__link-item' to={"/events"}>
						Events
						<i className='fas fa-calendar-day'></i>
					</NavLink>
				</li>
				<li className='sidenav__list-item'>
					<NavLink className='sidenav__link-item' to={"/sports"}>
						Sports
						<i className='fas fa-running'></i>
					</NavLink>{" "}
				</li>
				<li className='sidenav__list-item'>
					<NavLink className='sidenav__link-item' to={"/groups"}>
						Groups
						<i className='fas fa-users'></i>
					</NavLink>{" "}
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
