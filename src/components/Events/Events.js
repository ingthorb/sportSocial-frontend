import React, { Component } from "react";
import "./Events.css";
import axiosConfig from "../../utils/Axios/axiosConfig";
import { format } from "date-fns";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Events extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			events: [],
			loading: false 
		};
	}

	componentDidMount() {
		this.setState({loading:true})
		axiosConfig
			.get(`/events/`)
			.then(res => {
				const events = res.data.results;
				this.setState({loading:false});
				this.setState({ events });
			})
			.catch(error => {
				console.log(error);
			});
		// Create a modal for creating a new event
		this.formatDateTime = this.formatDateTime.bind(this);

	}

	formatDateTime = (date) => {
		return format(date, "MMMM do, yyyy H:mma");
	}

	render() {
 
		return (
			<div className='Events'>
				<header className='Events-header'>
					<h1>Events</h1>
				</header>
				<div>

				<Card className="event-card-header">
					<Card.Body>
					<Card.Text>
						Here are all events that are happening around you in the next few days. When creating a Event you can make it private so it's an invite only.
					</Card.Text>
					</Card.Body>
				</Card>

				{this.state.loading &&( 
					<CircularProgress className="spinner" /> 
				)}
				<CardDeck>
						{this.state.events.map(function(event, idx){
							if(event.private){
								return (
										<Card key={idx} border="secondary" style={{ width: '18rem' }} onClick={() => this.formatDateTime(event.datetime)}>
											<Card.Body>
												<Card.Title>{event.name}</Card.Title>
												<Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
												<Card.Subtitle className="mb-2 text-muted">{event.country_name}</Card.Subtitle>
												<Card.Subtitle className="mb-2 text-muted">Users: {event.number_of_users}</Card.Subtitle>
												<Card.Text>
													{event.description}
												</Card.Text>
												
												<Button variant="primary" href={ '/events/' + event.id }>View Event Details</Button>
											</Card.Body>
										</Card>
									)
							}
							})}
					</CardDeck>
				</div>
			</div>
		);
	}
}
