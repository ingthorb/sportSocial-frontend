import React, { Component } from "react";
import "./Groups.css";
import axiosConfig from "../../utils/Axios/axiosConfig";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from 'react-bootstrap/Button';


export default class Groups extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			groups: [],
			loading: false
		 };
	}

	componentDidMount() {
		this.setState({loading:true})
		axiosConfig
			.get(`/groups/`)
			.then(res => {
				const groups = res.data.results;
				this.setState({loading:false});
				this.setState({ groups });
			})
			.catch(error => {
				console.log(error);
			});
	}

	// Add filter criteria for countries
	
	render() {
		return (
			<div className='Groups'>
				<header className='Groups-header'>
					<h1>Groups</h1>
				</header>
				<div>
					<h4 className="header-groups">
						Here are all groups that are available, to view the group click on the card.When creating a Group you can make it private so it's an invite only.
					</h4>
				</div>
				{this.state.loading &&( 
					<CircularProgress className="spinner" /> 
				)}
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
										<Button variant="primary" href={ '/groups/' + group.id }>See Details</Button>
									</Card.Body>
								</Card>
							)
						})}
				</CardDeck>
			</div>
		);
	}
}
