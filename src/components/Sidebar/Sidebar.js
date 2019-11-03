import React, { Component } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
	render() {
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
}
