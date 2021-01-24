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
		console.log(day);
		console.log('This is the day');
		this.setState({ day });
		// Update with redux
	}

	render() {
		return (
			<div className='Navbar'>
				<input placeholder='Search'></input>
				<p>{this.state.day}</p>
			</div>
		);
	}
}
