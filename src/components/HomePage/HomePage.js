import React, { Component } from "react";
import "./HomePage.css";

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = { users: 0 };
	}
	componentDidMount() {
		// let users = this.users;
		const users = 0;
		this.setState({ users });
		// Update with redux
	}
	render() {
		return (
			<div className='HomePage'>
				<div className='HomePage-header'>
					<h1>Sport Social Check for font awesome</h1>
					<h4>Number of users: {this.state.users}</h4>
					<p>Homepage for people that want to meet and play some sports.</p>

					<div>
						<p>
							Let's say you are in a new town for a week and don't want to pay
							for a gym entry. Here you can find a list of sporting events that
							you can take part of in each city.
						</p>
					</div>

					<div>
						<h6> Countries where you can find events</h6>
					</div>
				</div>
			</div>
		);
	}
}
