import React, { Component } from "react";
import "./Groups.css";
import axios from "axios";

export default class Groups extends Component {
	constructor(props) {
		super(props);
		this.state = { groups: [] };
	}

	componentDidMount() {
		// Set the defaults for the axios requests
		axios.defaults.xsrfCookieName = "csrftoken";
		axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
		axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

		// Figure out axios default header config file settings
		axios
			.get(`http://127.0.0.1:8000/groups`)
			.then(res => {
				console.log(res);
				const groups = res.data;
				this.setState({ groups });
			})
			.catch(error => {
				console.log(error);
			});

		// Create a modal for creating a new group
	}
	render() {
		return (
			<div className='Groups'>
				<header className='Groups-header'>
					<h1>Groups</h1>
					<p>Temp for Groups</p>
				</header>
				<div>
					<h4>
						Have cards with Groups with the header is the: (City in Country)
					</h4>
				</div>
			</div>
		);
	}
}
