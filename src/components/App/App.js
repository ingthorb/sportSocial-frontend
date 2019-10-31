import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function App() {
	return (
		<div className='grid-container'>
			<Router>
				<header className='header'>
					<Navbar />
				</header>
				<aside className='sidenav'>
					<Sidebar />
				</aside>
				<main className='main'>
					<Routes />
				</main>
			</Router>
		</div>
	);
}

export default App;
