import React, { Component } from "react";
import "./Sports.css";
import axiosConfig from "../../utils/Axios/axiosConfig";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

export default class Sports extends Component {
	constructor(props) {
		super(props);
		this.state = { sports: [] };
	}

	componentDidMount() {
		axiosConfig
			.get(`/sports/`)
			.then(res => {
				const sports = res.data.results;
				this.setState({ sports });
			})
			.catch(error => {
				console.log(error);
			});
		// Create a modal for creating a new sport
	}
	// Find a way to limit the Carddeck to maximum size of something and mininum widht of 18rem
	render() {
		return (
			<div className='Sports'>
				<header className='Sports-header'>
					<h1>Sports</h1>
					<h4>Here are all sports thate are available to find events. Click on the sport you want to attend to a event and look at all the events close to you.</h4>
					<CardDeck>
						{this.state.sports.map(function(sport, idx){
							return (
									<Card key={idx} border="secondary" style={{ 'min-width': '18rem', 'marginBottom': '10px'}}>
										<Card.Body>
											<Card.Title>{sport.name}</Card.Title>
											<Card.Text>
												{sport.description}
											</Card.Text>
										</Card.Body>
									</Card>
								)
							})}
					</CardDeck>
				</header>
			</div>
		);
	}
}
