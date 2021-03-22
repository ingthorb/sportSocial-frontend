import React, { Component } from "react";
import "./EventDetail.css";
import axiosConfig from "../../utils/Axios/axiosConfig";
import moment from 'moment';
import SimpleList from "../SimpleList/SimpleList";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import SportsIcon from '@material-ui/icons/Sports';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default class EventDetail extends Component {
	constructor(props) {
		super(props);
		this.state = { event: {} };
	}

	componentDidMount() {

		axiosConfig
			.get(`/events/${this.props.match.params.id}`)
			.then(res => {
				const event = res.data;
				console.log(event);
				event.datetime = moment.utc(event.datetime).format('HH:mm DD.MM.YYYY ')
				this.setState({ event });
			})
			.catch(error => {
				console.log(error);
			});
	}
	render() {
		return (
			<div className='Events'>
				<header className='Events-header'>
					<h1>{this.state.event.name}</h1>
					<h3><AccessTimeIcon/> {this.state.event.datetime}</h3>
				</header>
				<div>
					<h4><LocationCityIcon/>City: {this.state.event.city_name}</h4>
					<h4><DirectionsRunIcon/>Difficulty: {this.state.event.difficulty}</h4>
					<h4><SportsIcon/>Sport: {this.state.event.sports_name}</h4>
					<h4><LocationOnIcon/>Location: {this.state.event.lat} + {this.state.event.long}</h4>
					
					
					<div>
					<p>{this.state.event.description}</p>
					<h5>Users:</h5>
					{this.state.event.users &&(
						<SimpleList users={this.state.event.users}></SimpleList>
					)}
				</div>
				</div>
			</div>
		);
	}
}
