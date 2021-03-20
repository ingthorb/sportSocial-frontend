import React from "react";
import "./Sports.css";
import axiosConfig from "../../utils/Axios/axiosConfig";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: 500,
		height: 450,
	},
}));

type Props = {};

type State = {
	sports: [];
};

export default class Sport extends React.Component<Props, State> {
	// classes = useStyles();

	componentDidMount() {
		axiosConfig
			.get(`/sports/`)
			.then((res) => {
				const sports = res.data.results;
				this.setState({ sports });
				console.log(this.state.sports);
			})
			.catch((error) => {
				console.log(error);
			});
		// Create a modal for creating a new sport
	}
	// Find a way to limit the Carddeck to maximum size of something and mininum widht of 18rem
	render() {
		return (
			<div className='Sports'>
				<header className='Sports-header'>
					<h1>Sports</h1>
					<h4>
						Here are all sports thate are available to find events. Click on the
						sport you want to attend to a event and look at all the events close
						to you.
					</h4>
					{/* <GridList cellHeight={160} className={this.classes.gridList} cols={3}>
						{this.state.sports.map((sport) => (
							<GridListTile key={sport}>sport</GridListTile>
						))}
					</GridList> */}
				</header>
			</div>
		);
	}
}
