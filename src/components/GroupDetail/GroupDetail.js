import React, { Component } from "react";
import "./GroupDetail.css";
import axiosConfig from "../../utils/Axios/axiosConfig";
import Card from 'react-bootstrap/Card';
import SimpleList from "../SimpleList/SimpleList";


export default class GroupDetail extends Component {
	constructor(props) {
		super(props);
		this.state = { group: {} };
	}

	componentDidMount() {
		console.log(this.props.match.params.id);
		axiosConfig
			.get(`/groups/${this.props.match.params.id}`)
			.then(res => {
				console.log(res);
				const group = res.data;
				console.log(group);
				this.setState({ group });
			})
			.catch(error => {
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
					<h4 className="header-groups">
						Detail of the group
					</h4>
					<div>
					<p>{this.state.group.description}</p>
					<h5>Users:</h5>
					<SimpleList></SimpleList>
				</div>
				</div>
			</div>
		);
	}
}
