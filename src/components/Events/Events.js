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
				console.log(events);
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
					{this.state.events.map(function(event, idx){
						return (
						<li key={idx}>
							{event.name}
							<ul>{event.description}</ul>
						</li>)
					})}
				</div>
			</div>
		);
	}
}
