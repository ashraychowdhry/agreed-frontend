
import React from 'react'
import {  useState } from "react";
import Button from '@material-ui/core/Button';

const Dashboard = () => {
	const [securedPin, setsecuredPin] = useState('')
	const userID = '61a5ad7680c496f5b47ea88a'

	async function joinGroup(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3001/api/joingroup', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				securedPin,
				userID
			}),
		})

		const data = await response.json()

		if(data.status === 'ok') {
			alert('Successfully Joined Group' + data.id)
			window.location.href = "/individualform" 
		} else {
			console.log(data)
			alert('Please enter the right pin')
		}
	}	

	return (
		<div style={{padding: '40px'}}>
			<h1>Dashboard</h1>
			<Button variant="contained" color="secondary" href='/creategroupform'>Create a Group</Button>
			<Button variant="contained" color="secondary" href='/individualform'>Individual Form</Button>
			<Button variant="contained" color="secondary" href='/creditcard'>Credit Card Payment</Button>
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