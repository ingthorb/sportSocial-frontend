import React, { Component } from "react";
import "./Groups.css";

export default class Groups extends Component {
	constructor(props) {
		super(props);
		this.state = { groups: [] };
	}

	render() {
		return (
			<div className='Groups'>
				<header className='Groups-header'>
					<h1>Groups</h1>
					<p>Temp for Groups</p>
				</header>
			</div>
		);
	}
}
