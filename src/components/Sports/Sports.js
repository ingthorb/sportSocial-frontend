import React, { Component } from "react";
import "./Sports.css";
import axios from "axios";

export default class Sports extends Component {
	constructor(props) {
		super(props);
		this.state = { sports: [] };
	}

	componentDidMount() {
		axios.get(`https://sport-social.herokuapp.com/sports`).then(res => {
			const sports = res.data;
			this.setState({ sports });
		});
	}
	render() {
		return (
			<div className='Sports'>
				<header className='Sports-header'>
					<h1>Sports</h1>
					<ul>
						{this.state.sports.map(sports => (
							<li>{sports}</li>
						))}
					</ul>
				</header>
			</div>
		);
	}
}
