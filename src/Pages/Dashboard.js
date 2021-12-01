import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {  useState } from "react";
import Button from '@material-ui/core/Button';
import Login from './LandingLogin';
import NavBar from '../Components/NavBar.js';
import './dashboard.css';

const Dashboard = () => {
	const [securedPin, setsecuredPin] = useState('')
	const [groups, setGroups] = useState([])
	const userID = localStorage.getItem('username')

	async function joinGroup(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3001/api/joingroup', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				securedPin,
				userID,
			}),
		})

		const data = await response.json()

		if(data.status === 'ok') {
			console.log(data)
			localStorage.setItem("currentGroup", data.id)
			alert('Successfully Joined Group ' + data.id)
			window.location.href = "/individualform"
		} else {
			console.log(data)
			alert('Please enter the right pin')
		}
	}

	async function populateDashboard() {
		//localStorage.setItem("currentGroup", "")
		const response = await fetch('http://localhost:3001/api/getusergroups', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',

			},
			body: JSON.stringify({
				userID: userID,
			}),
		})

		const data = await response.json()

		if(data.status === 'ok') {
			console.log(data.groups)
			return data.groups
		} else {
			console.log(data)
			alert('Error getting groups')
		}
	}

	useEffect(() => {
		populateDashboard().then((g) => {setGroups(g)})
	}, [])

	return (
		<div>
			<NavBar/>
			<div className='group'>
				<h2 className='header'>Trip Dashboard</h2>
				<h2 className='header-user'> Hello, {localStorage.username} </h2>
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

			<div className='trip-cards'>
				<div className='row'>
					{groups.map((group, i) => {
						return (
							<div className='column'>

								<div className='card' key={i}>
									<Button variant="contained" onClick={localStorage.setItem("currentGroup", group.groupID)} color="primary" href={'/searchresults/'+group.groupID}>{group.groupName + " " + group.groupID}</Button>
								</div>
							</div>
						)
					})}
				</div>
			</div>
				
			</div>

	);
}

export default Dashboard;
