import React, { Component } from "react";
import "./HomePage.css";
import Button from 'react-bootstrap/Button';
import axiosConfig from "../../utils/Axios/axiosConfig";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = { users: 0,
						countries: [] };
	}
	componentDidMount() {
		// let users = this.users;
		const users = 0;
		this.setState({ users });
		this.listOfCountries();
		this.listOfUsers();
		// Update with redux
	}

	listOfCountries() {
		axiosConfig
			.get(`/countries/`)
			.then(res => {
				const countries = res.data.results;
				this.setState({ countries });
				console.log(countries);
			})
			.catch(error => {
				console.log(error);
			});
	}

	listOfUsers() {
		axiosConfig
			.get(`/users/`)
			.then(res => {
				const usersList = res.data.results;
				let users = usersList.length;
				this.setState({ users })
			})
			.catch(error => {
				console.log(error);
			});
	}

	// TODO: Add query params to the Events so it's searching for only the sport
	render() {
		return (
			<div className='HomePage'>
				<div className='HomePage-header'>
					<h2>Number of users: {this.state.users}</h2>
					<p>Homepage for people that want to meet and play some sports.</p>

					<div>
						<p>
							Let's say you are in a new town for a week and don't want to pay
							for a gym entry. Here you can find a list of sporting events that
							you can take part of in each city.
						</p>

						<p>Coming soon:</p>
						<ul>
							<li>Sign Up / Sign In via social media or email</li>
							<li>Filter events based on country when clicking on the country</li>
							<li>Be able to filter out events based on sports and time</li>
							<li>Filter Groups based on country</li>
							<li>Add sports, events and groups</li>
							<li>Will be location based</li>
						</ul>
					</div>

					<div>
						<h3> Countries where you can find events</h3>
						<div>
						<CardDeck>
						
						{this.state.countries.map(function(country, idx){
							return (
									<Card key={idx} border="secondary" style={{ 'minWidth': '18rem', 'marginBottom': '10px'}}>
										<Card.Body>
											<Card.Title>{country.name}</Card.Title>
											<Button variant="primary" href="/events/">Find Events</Button>
										</Card.Body>
									</Card>
								)
							})}
					</CardDeck>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
