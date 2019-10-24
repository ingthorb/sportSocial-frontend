import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function App() {
	return (
		<div class='grid-container'>
			<header class='header'>
				<Navbar />
			</header>
			<aside class='sidenav'>
				<Router>
					<Sidebar />
				</Router>
			</aside>
			<main class='main'>
				<Router>
					<Routes />
				</Router>
			</main>
		</div>
	);
}

export default App;
