import React, { Component } from "react";
import "./Events.css";
import axios from "axios";

export default class Events extends Component {
	constructor(props) {
		super(props);
		this.state = { events: [] };
	}

	componentDidMount() {
		// Set the defaults for the axios requests
		axios.defaults.xsrfCookieName = "csrftoken";
		axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
		axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

		// Figure out axios default header config file settings
		axios
			.get(`http://127.0.0.1:8000/events`)
			.then(res => {
				console.log(res);
				const events = res.data;
				this.setState({ events });
			})
			.catch(error => {
				console.log(error);
			});

		// Create a modal for creating a new event
	}

	render() {
		return (
			<div className='Events'>
				<header className='Events-header'>
					<h1>Events</h1>
				</header>
				<div>
					<ul>
						<li> Football in Bern</li>
						<li> Volleyball in Bern</li>
					</ul>
				</div>
			</div>
		);
	}
}
