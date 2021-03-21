import React, { Component } from "react";
import axiosConfig from "../../utils/Axios/axiosConfig";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

export default class SportDetails extends Component {
	constructor(props) {
		super(props);
		this.state = { sport: {} };
	}

	componentDidMount() {
		axiosConfig
			.get(`/sports/${this.props.match.params.id}`)
			.then(res => {
				const sport = res.data.results;
				this.setState({ sport });
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
					<h1>{this.state.sport.name}</h1>
					<h4>Detailed information about the sport</h4>
				</header>
			</div>
		);
	}
}
