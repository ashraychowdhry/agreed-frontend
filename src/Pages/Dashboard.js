import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import NavBar from '../Components/NavBar'
import './dashboard.css';


const Dashboard = () => {
	return (
		<div>
			<NavBar/>
			<div className='group'>
				<h2>Trip Dashboard</h2>
				<h3>Group Pin</h3>
				
			</div>

			<Button variant="contained" color="secondary" href='/creategroupform'>Create a Group</Button>
			<Button variant="contained" color="secondary" href='/individualform'>Individual Form</Button>
		</div>

	);
}

export default Dashboard;
