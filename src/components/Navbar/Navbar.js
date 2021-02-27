import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { day: "" };
	}
	componentDidMount() {
		// let users = this.users;
		const date = new Date();
		var day = date.toLocaleString('en-GB',{month:'long', year:'numeric', day:'numeric'});
		this.setState({ day });
		// Update with redux
	}

	render() {
		return (
			<div className='Navbar'>
				<input placeholder='Search'></input>
				<h4 className="DateToday">{this.state.day}</h4>
			</div>
		);
	}
}
