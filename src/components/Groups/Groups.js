import React, { Component } from "react";
import "./Groups.css";
import axiosConfig from "../../utils/Axios/axiosConfig";

export default class Groups extends Component {
	constructor(props) {
		super(props);
		this.state = { groups: [] };
	}

	componentDidMount() {
		axiosConfig
			.get(`/groups/`)
			.then(res => {
				const groups = res.data.results;
				this.setState({ groups });
			})
			.catch(error => {
				console.log(error);
			});
	}
	render() {
		return (
			<div className='Groups'>
				<header className='Groups-header'>
					<h1>Groups</h1>
				</header>
				<div>
					<h4>
						Have cards with Groups with the header is the: (City in Country)
					</h4>
					<div>
					{this.state.groups.map(function(group, idx){
						return (
						<div key={idx}>
						<h2>{group.country}</h2>
						<li>
							{group.name}
							<ul>{group.description}</ul>
						</li>
						</div>)
					})}
				</div>
				</div>
			</div>
		);
	}
}
