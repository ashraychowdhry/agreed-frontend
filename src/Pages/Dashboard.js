import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {  useState } from "react";
import Button from '@material-ui/core/Button';
import Login from './LandingLogin';
import NavBar from '../Components/NavBar.js';
import './dashboard.css';
import TextField from '@mui/material/TextField';
import { borders } from '@mui/system';
import StripeContainer from '../Components/payments/StripeContainer';


const Dashboard = () => {
	const [securedPin, setsecuredPin] = useState('')
	const [groups, setGroups] = useState([])
	const userID = localStorage.getItem('username')

	async function joinGroup(event) {
		event.preventDefault()

		const response = await fetch(' https://cors-everywhere.herokuapp.com/http://ec2-35-171-158-190.compute-1.amazonaws.com:3001/api/joingroup', {
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
		const response = await fetch(' https://cors-everywhere.herokuapp.com/http://ec2-35-171-158-190.compute-1.amazonaws.com:3001/api/getusergroups', {
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
		<div className='dash-background'>
			<NavBar/>
			<br />
			<br />
			<div className='group'>

				<h2 className='header'>Trip Dashboard</h2>

				<h3 className='header-user'> Hello, {localStorage.username}! Let's get travelling.</h3>
				<div className='pin'>

					<form onSubmit={joinGroup}>
						<TextField id="outlined-basic" label="Group Pin#" variant="outlined" style={{ minWidth: '225px', borderRadius: '50px' }}
							value={securedPin}
							onChange={(e) => setsecuredPin(e.target.value)}
							type= "text"
						/>
						<div className='spacer'>
							<Button variant="contained" color="secondary" type="submit" style={{ minWidth: '225px', minHeight: '40px', borderRadius: '15px' }}>Join</Button>
						</div>
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
								<div className='trip-button'><Button variant="text" onClick={localStorage.setItem("currentGroup", group.groupID)} color="primary" href={'/searchresults/'+group.groupID} style={{ color: '#00254a' }}>{group.groupName + " " + group.groupID}</Button></div>
								<div className='travel-pic'></div>
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
