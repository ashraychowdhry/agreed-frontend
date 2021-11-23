
import React from 'react'
import Button from '@material-ui/core/Button';

const Dashboard = () => {
	return (
		<div style={{padding: '40px'}}>
			<h1>Dashboard</h1>
			<Button variant="contained" color="secondary" href='/creategroupform'>Create a Group</Button>
			<Button variant="contained" color="secondary" href='/individualform'>Individual Form</Button>
			<Button variant="contained" color="secondary" href='/creditcard'>Credit Card Payment</Button>
		</div>
		
	)
	
}

export default Dashboard