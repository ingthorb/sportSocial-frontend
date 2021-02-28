import React, { Component } from "react";
import "./Groups.css";
import axiosConfig from "../../utils/Axios/axiosConfig";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


export default class Groups extends Component {
	constructor(props) {
		super(props);
		this.state = { groups: [] };
	}

	componentDidMount() {
		console.log(axiosConfig.baseURL);
		console.log('The env var');
		console.log(process.env.REACT_APP_BASEURL);
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
					<h4 className="header-groups">
						Here are all groups that are available, to view the group click on the card.
					</h4>
					<div>
					<CardDeck>
						{this.state.groups.map(function(group, idx){
							return (
									<Card key={idx} border="secondary" style={{ width: '18rem' }}>
										<Card.Body>
											<Card.Title>{group.name}</Card.Title>
											<Card.Subtitle className="mb-2 text-muted">{group.country_name}</Card.Subtitle>
											<Card.Subtitle className="mb-2 text-muted">Users: {group.users}</Card.Subtitle>
											<Card.Text>
												{group.description}
											</Card.Text>
										</Card.Body>
									</Card>
								)
							})}
					</CardDeck>
				</div>
				</div>
			</div>
		);
	}
}
