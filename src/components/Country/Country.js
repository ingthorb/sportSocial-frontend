import React, { Component } from "react";
import "./Country.css";
import axiosConfig from "../../utils/Axios/axiosConfig";
import SimpleList from "../SimpleList/SimpleList";
import LocationCityIcon from "@material-ui/icons/LocationCity";

export default class Country extends Component {
	constructor(props) {
		super(props);
		this.state = { group: {} };
	}

	componentDidMount() {
		console.log(this.props.match.params.id);
		axiosConfig
			.get(`/events/${this.props.match.params.id}`)
			.then((res) => {
				console.log(res);
				const group = res.data;
				console.log(group);
				this.setState({ group });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		return (
			<div className='Groups'>
				<header className='Groups-header'>
					<h1>{this.state.group.name}</h1>
				</header>
				<div>
					<h4>
						<LocationCityIcon />
						Country: {this.state.group.country_name}
					</h4>

					<div>
						<p>{this.state.group.description}</p>
						<h5>Users:</h5>
						{this.state.group.users && (
							<SimpleList users={this.state.group.users}></SimpleList>
						)}
					</div>
				</div>
			</div>
		);
	}
}
