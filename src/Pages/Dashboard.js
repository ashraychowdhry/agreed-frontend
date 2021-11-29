import React from 'react';
import { Link } from 'react-router-dom';
import {  useState } from "react";
import Button from '@material-ui/core/Button';
import NavBar from '../Components/NavBar.js';
import './dashboard.css';

const Dashboard = () => {
	const [securedPin, setsecuredPin] = useState('')

	async function joinGroup(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3001/api/dashboard', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				securedPin,
			}),
		})

		const data = await response.json()

		if(data.status === 'ok') {
			alert('Successfully Joined Group')
			window.location.href = "/individualform"
		} else {
			alert('Please enter the right pin')
		}
	}

	return (

		<div>
			<NavBar/>

			<div className='group'>
				<h2 className='header'>Trip Dashboard</h2>
				<div className='pin'>
					<h3 className='header-pin'>Group Pin</h3>
					<form onSubmit={joinGroup}>
						<input
							value={securedPin}
							onChange={(e) => setsecuredPin(e.target.value)}
							type= "text"
							placeholder="Enter A Pin To Join One"
						/>
						<br />
						<input type="submit" value="JOIN A GROUP" />
					</form>
				</div>
				<h4 className='creategroup-prompt'>Need to plan a new trip? <a href='/creategroupform'>Create a group</a></h4>
			</div>
			
			//<Button variant="contained" color="secondary" href='/individualform'>Individual Form</Button>
			//<Button variant="contained" color="secondary" href='/creditcard'>Credit Card Payment</Button>

		</div>

	);
}

export default Dashboard;
