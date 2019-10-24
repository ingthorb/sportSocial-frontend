import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
function Sidebar() {
	return (
		<div className='Sidebar'>
			<h1 class='sidenav__header'>
				<NavLink to={"/"}>Sport Social</NavLink>
			</h1>
			<ul class='sidenav__list'>
				<li class='sidenav__list-item'>
					Events <i class='fas fa-calendar-day'></i>
				</li>
				<li class='sidenav__list-item'>
					Sports <i class='fas fa-running'></i>
				</li>
				<li class='sidenav__list-item'>
					Users <i class='fas fa-users'></i>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
