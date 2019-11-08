import React, { Component } from "react";
import "./Events.css";
import axiosConfig from "../../utils/Axios/axiosConfig";

export default class Events extends Component {
	constructor(props) {
		super(props);
		this.state = { events: [] };
	}

	componentDidMount() {
		axiosConfig
			.get(`/events/`)
			.then(res => {
				const events = res.data.results;
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
