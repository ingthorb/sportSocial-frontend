import React, { Component } from "react";
import "./Sports.css";
import axiosConfig from "../../utils/Axios/axiosConfig";

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
	render() {
		return (
			<div className='Sports'>
				<header className='Sports-header'>
					<h1>Sports</h1>
					<ul>
						{this.state.sports.map(sports => (
							<li key={sports.name}>{sports.name}</li>
						))}
					</ul>
					<h3>Find all the events for these sports in these cities</h3>
					<h6> Have a card for each sport</h6>
				</header>
			</div>
		);
	}
}
