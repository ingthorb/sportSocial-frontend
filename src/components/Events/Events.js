import React, { Component } from "react";
import "./Events.css";
import axiosConfig from "../../utils/Axios/axiosConfig";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


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

				<Card className="event-card-header">
					<Card.Img variant="top" src="/images/events_image.jpg" />
					<Card.Body>
					<Card.Text>
						Here are all events that are happening around you in the next few days.
					</Card.Text>
					</Card.Body>
				</Card>


				<CardDeck>
						{this.state.events.map(function(event, idx){
							return (
									<Card key={idx} border="secondary" style={{ width: '18rem' }}>
										<Card.Body>
											<Card.Title>{event.name}</Card.Title>
											<Card.Subtitle className="mb-2 text-muted">{event.country_name}</Card.Subtitle>
											<Card.Subtitle className="mb-2 text-muted">Users: {event.users.length}</Card.Subtitle>
											<Card.Text>
												{event.description}
											</Card.Text>
										</Card.Body>
									</Card>
								)
							})}
					</CardDeck>
				</div>
			</div>
		);
	}
}
