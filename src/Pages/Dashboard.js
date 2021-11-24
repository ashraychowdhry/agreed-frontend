
import React from 'react'
import {  useState } from "react";
import Button from '@material-ui/core/Button';

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
		<div style={{padding: '40px'}}>
			<h1>Dashboard</h1>
			<Button variant="contained" color="secondary" href='/creategroupform'>Create a Group</Button>
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