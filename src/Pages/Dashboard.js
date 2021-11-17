
import React from 'react'
import Button from '@material-ui/core/Button';


// import jwt from 'jsonwebtoken'
// import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
	return (
		<div style={{padding: '40px'}}>
			<h1>Dashboard</h1>
			<Button variant="contained" color="secondary" href='/creategroupform'>Create a Group</Button>
		</div>
		
	)
	
}

export default Dashboard