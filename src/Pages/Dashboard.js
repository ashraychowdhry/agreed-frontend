
import React from 'react'
import {  useState } from "react";
import Button from '@material-ui/core/Button';
import Login from './LandingLogin';

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

	async function logout(event) {
		localStorage.removeItem("token");
	}

	return (
		<div style={{padding: '40px'}}>
			<h1>Dashboard</h1>
			<h2> Hello, {localStorage.username} </h2>
			<Button variant="contained" color="secondary" href='/creategroupform'>Create a Group</Button>
			<Button variant="contained" color="secondary" href='/individualform'>Individual Form</Button>
			<Button variant="contained" color="secondary" href='/creditcard'>Credit Card Payment</Button>
			<Button variant="contained" onClick={logout} color="secondary" href='/login'>Logout</Button>
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
		
	)
	
}

export default Dashboard