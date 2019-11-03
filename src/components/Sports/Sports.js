import React, { Component } from "react";
import "./Sports.css";
import axios from "axios";

export default class Sports extends Component {
	constructor(props) {
		super(props);
		this.state = { sports: [] };
	}

	componentDidMount() {
		// Set the defaults for the axios requests
		axios.defaults.xsrfCookieName = "csrftoken";
		axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
		axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

		// Figure out axios default header config file settings
		axios
			.get(`http://127.0.0.1:8000/sports`)
			.then(res => {
				const sports = res.data;
				this.setState({ sports });
			})
			.catch(error => {
				console.log(error);
			});
		// Create a modal for creating a new sport
	}
	render() {
		return (
			<div className='Sports'>
				<header className='Sports-header'>
					<h1>Sports</h1>
					<ul>
						{this.state.sports.map(sports => (
							<li>{sports}</li>
						))}
					</ul>
					<h3>Find all the events for these sports in these cities</h3>
					<h6> Have a card for each sport</h6>
				</header>
			</div>
		);
	}
}
