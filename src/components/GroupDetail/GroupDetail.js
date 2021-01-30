import React, { Component } from "react";
import "./GroupDetail.css";
import axiosConfig from "../../utils/Axios/axiosConfig";
import Card from 'react-bootstrap/Card';


export default class GroupDetail extends Component {
	constructor(props) {
		super(props);
		this.state = { group: {} };
	}

	componentDidMount() {
		axiosConfig
			.get(`/groups/${this.props.match.params.id}`)
			.then(res => {
				const group = res.data.results;
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
						<Card border="secondary" style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>{this.state.group.name}</Card.Title>
								<Card.Text>
									{this.state.group.description}
								</Card.Text>
							</Card.Body>
						</Card>
				</div>
				</div>
			</div>
		);
	}
}
