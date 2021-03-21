import React, { Component } from "react";
import axiosConfig from "../../utils/Axios/axiosConfig";

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
