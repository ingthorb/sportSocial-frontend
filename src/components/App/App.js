import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function App() {
	return (
		<div class='grid-container'>
			<Router>
				<header class='header'>
					<Navbar />
				</header>
				<aside class='sidenav'>
					<Sidebar />
				</aside>
				<main class='main'>
					<Routes />
				</main>
			</Router>
		</div>
	);
}

export default App;
