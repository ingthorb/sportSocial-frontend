import React, { Component } from "react";
import "./GroupDetail.css";
import axiosConfig from "../../utils/Axios/axiosConfig";

type Props = {};

type State = {
	group: {};
};

export default class GroupDetail extends React.Component<Props, State> {
	componentDidMount() {
		axiosConfig
			.get(`/groups/1`)
			.then((res) => {
				const group = res.data.results;
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
					<h1>{this.state.group}</h1>
				</header>
				<div>
					<h4 className='header-groups'>Detail of the group</h4>
					<div>
						{/* <Card border="secondary" style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>{this.state.group.name}</Card.Title>
								<Card.Text>
									{this.state.group.description}
								</Card.Text>
							</Card.Body>
						</Card> */}
					</div>
				</div>
			</div>
		);
	}
}
