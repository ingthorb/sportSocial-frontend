import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import Header from "../Navbar/Header";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import Footer from "../Footer/Footer";

const social = [
	{ name: "GitHub", icon: GitHubIcon, url: "https://github.com/ingthorb" },
	{
		name: "Facebook",
		icon: FacebookIcon,
		url: "https://www.facebook.com/Ingthorb/",
	},
];
// Have to create the min width for the application for when changing into mobile
export default class App extends Component {
	render() {
		return (
			<div className='grid-container'>
				<Router>
					<header className='header'>
						<Header title='Sport Social' />
					</header>
					<main className='main'>
						<Routes />
					</main>
					<Footer
						social={social}
						description='For more information contact ingthorb@gmail.com'
					/>
				</Router>
			</div>
		);
	}
}
