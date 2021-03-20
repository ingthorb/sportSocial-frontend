import React, { Component } from "react";
import axiosConfig from "../../utils/Axios/axiosConfig";

type Props = {};

type State = {
	sport: {};
};
export default class SportDetails extends React.Component<Props, State> {
	componentDidMount() {
		axiosConfig
			.get(`/sports/1`)
			.then((res) => {
				const sport = res.data.results;
				this.setState({ sport });
			})
			.catch((error) => {
				console.log(error);
			});
		// Create a modal for creating a new sport
	}
	// Find a way to limit the Carddeck to maximum size of something and mininum widht of 18rem
	render() {
		return (
			<div className='Sports'>
				<header className='Sports-header'>
					<h1>{this.state.sport}</h1>
					<h4>Detailed information about the sport</h4>
				</header>
			</div>
		);
	}
}
