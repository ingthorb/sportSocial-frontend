import React, { Component } from "react";
import "./HomePage.css";
import { makeStyles } from '@material-ui/core/styles';

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
