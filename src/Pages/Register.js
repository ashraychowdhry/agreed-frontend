// THIS FILE IS UNUSED //
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './landing.css'
import '../styles.css'
import './register.css'
import TextField from '@mui/material/TextField';
import { borders } from '@mui/system';
import Button from '@material-ui/core/Button';

function Register() {
	const navigate = useNavigate();
  	const [firstName, setFirstName] = useState('')
  	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [birthday, setBirthday] = useState('')
	const [gender, setGender] = useState('')
	const [age, setAge] = useState('')

  async function registerUser(event) {
		event.preventDefault()

		const response = await fetch(' https://cors-everywhere.herokuapp.com/http://ec2-35-171-158-190.compute-1.amazonaws.com:3001/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName,
        		lastName,
				email,
				password,
				birthday,
				gender,
				age
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			console.log(data.data)
			navigate('/login', {replace: true})
		}
	}


  return (
    <div className='registerPage'>
		<div className='navbar'>
			<div className='nav-left'>
				<a href="/">ABEONA</a>
			</div>
			<div className='nav-right'>
				<ul>
					<li><a href="/dashboard">Dashboard</a></li>
					<li><a href="/aboutus">About Us</a></li>

				</ul>
			</div>
		</div>
		<div className='registerPopup'>
	    	<h1 className='title'>Register to get started.</h1>
			<form onSubmit={registerUser}>
				<TextField id="outlined-basic" label="First Name" variant="outlined" style={{ minWidth: '225px', borderRadius: '50px' }}
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					type="text"
					placeholder="First Name"
				/>
				<br />
        	    <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{ margin: '10px auto', minWidth: '225px', borderRadius: '50px' }}
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					type="text"
					placeholder="Last Name"
				/>
				<br />
				<TextField id="outlined-basic" label="Email" variant="outlined" style={{ minWidth: '225px', borderRadius: '50px' }}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<TextField id="outlined-basic" label="Password" variant="outlined" style={{ margin: '10px auto', minWidth: '225px', borderRadius: '50px' }}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<TextField id="outlined-basic" label="Birthday" variant="outlined" style={{ minWidth: '225px', borderRadius: '50px' }}
					value={birthday}
					onChange={(e) => setBirthday(e.target.value)}
					type="text"
					placeholder="DOB MM/DD/YYYY"
				/>
				<br />
				<TextField id="outlined-basic" label="Age" variant="outlined" style={{ margin: '10px auto', minWidth: '225px', borderRadius: '50px' }}
					value={age}
					onChange={(e) => setAge(e.target.value)}
					type="text"
					placeholder="Age"
				/>
				<br />
				<TextField id="outlined-basic" label="Gender" variant="outlined" style={{ minWidth: '225px', borderRadius: '50px' }}
					value={gender}
					onChange={(e) => setGender(e.target.value)}
					type="text"
					placeholder="Gender"
				/>
				<br />
				<Button variant="contained" color="secondary" type="submit" style={{ margin: '20px', minWidth: '225px', minHeight: '40px', borderRadius: '15px' }}>Register</Button>

			</form>
		</div>
	</div>
  );
}

export default Register;
