import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import NavBar from '../Components/NavBar'


const Dashboard = () => {
	return (
		<div>
			<NavBar/>
			<Button variant="contained" color="secondary" href='/creategroupform'>Create a Group</Button>
			<Button variant="contained" color="secondary" href='/individualform'>Individual Form</Button>
		</div>

	);
}

export default Dashboard;
