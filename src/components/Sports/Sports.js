import React, { Component } from "react";
import "./Sports.css";
import axiosConfig from "../../utils/Axios/axiosConfig";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "react-bootstrap/Button";

export default class Sports extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sports: [],
			loading: false,
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		axiosConfig
			.get(`/sports/`)
			.then((res) => {
				const sports = res.data.results;
				this.setState({ loading: false });
				this.setState({ sports });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className='Sports'>
				<header className='Sports-header'>
					<h1>Sports</h1>
				</header>
				<div>
					<h4 className='header-groups'>
						Here are all sports thate are available to find events. Click on the
						sport you want to attend to a event and look at all the events close
						to you.
					</h4>
				</div>
				{this.state.loading && <CircularProgress className='spinner' />}
				<CardDeck>
					{this.state.sports.map(function (sport, idx) {
						return (
							<Card
								key={idx}
								border='secondary'
								style={{ minWidth: "18rem", marginBottom: "10px" }}
							>
								<Card.Body>
									<Card.Title>{sport.name}</Card.Title>
									<Card.Text>{sport.description}</Card.Text>
									<Button
										variant='primary'
										href={"/events?sports=" + sport.name}
									>
										See Events
									</Button>
								</Card.Body>
							</Card>
						);
					})}
				</CardDeck>{" "}
			</div>
		);
	}
}
