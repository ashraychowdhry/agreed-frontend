import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Popup from './Popup';
import './landing.css'
import '../styles.css'
import TextField from '@mui/material/TextField';
import { borders } from '@mui/system';
import Button from '@material-ui/core/Button';

function Login() {
	function navigateRegister(event) {
		navigate("/register");
	}
	function navigateAboutUs(event) {
		navigate("/aboutus");
	}
	let navigate = useNavigate();
	const [firstName, setFirstName] = useState('')
  	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		if (localStorage.getItem("token")) {
		  navigate("/dashboard");
		}
	}, [navigate]);

	async function registerUser(event) {
		event.preventDefault()

		var fetchString = ''
		if (localStorage.getItem('isLive') !== 'true') {
        fetchString = 'http://localhost:3001/api/register'
      } else {
        fetchString = ' https://cors-everywhere.herokuapp.com/http://ec2-35-171-158-190.compute-1.amazonaws.com:3001/api/register'
      }
      const response = await fetch(fetchString, {
		//const response = await fetch(' https://cors-everywhere.herokuapp.com/http://ec2-35-171-158-190.compute-1.amazonaws.com:3001/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName,
				lastName,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			navigate('/login', {replace: true})
		}
	 }

  	async function LoginUser(event) {
		event.preventDefault()

		var fetchString = ''
		if (localStorage.getItem('isLive') !== 'true') {
        fetchString = 'http://localhost:3001/api/login'
      } else {
        fetchString = ' https://cors-everywhere.herokuapp.com/http://ec2-35-171-158-190.compute-1.amazonaws.com:3001/api/login'
      }
      const response = await fetch(fetchString, {
		//const response = await fetch(' https://cors-everywhere.herokuapp.com/http://ec2-35-171-158-190.compute-1.amazonaws.com:3001/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem("token", data.user)
			localStorage.setItem("username", data.userEmail)
			alert("Login successful")
			window.location.href = "/dashboard"
		} else {
			alert("Please check your username and password")
		}
	}

	const [isOpen, setIsOpen] = useState(false);
	const togglePopup = () => {
		setIsOpen(!isOpen);
	}


  return (
    <div className='landing'>
		<div className='logo'>
			<a href='/'>ABEONA</a>
		</div>
		<div className='loginForm'>
			<h1 className='title'>Welcome Back!</h1>
			<form onSubmit={LoginUser}>
				<TextField id="outlined-basic" label="Email" variant="outlined" style={{ minWidth: '225px', borderRadius: '50px' }}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<div className='spacer'>
				<TextField id="outlined-basic" label="Password" variant="outlined" style={{ minWidth: '225px', borderRadius: '50px' }}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				</div>
				<br />
				<Button variant="contained" color="secondary" type="submit" style={{ minWidth: '225px', minHeight: '40px', borderRadius: '15px' }}>Sign in</Button>
				<div className='registerPrompt'>
						<h4>New to Abeona?
							<input
								type="button"
								value="Register"
								onClick={navigateRegister}
								href="/register"
							/>
						</h4>
						<h4>Want to learn more?
							<input
								type="button"
								value="About Us"
								onClick={navigateAboutUs}
								href="/aboutus"
							/>
						</h4>
					</div>
			</form>
		</div>
	</div>
  );
}

export default Login;
