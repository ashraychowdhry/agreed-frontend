import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Popup from './Popup';
import './landing.css'
import '../styles.css'
import TextField from '@mui/material/TextField';
import { borders } from '@mui/system';
import Button from '@material-ui/core/Button';

function Login() {
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

		const response = await fetch('http://localhost:3001/api/register', {
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

		const response = await fetch('http://localhost:3001/api/login', {
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
								onClick={togglePopup}
							/>
							{isOpen && <Popup
								content={<>
									<div className='registerPopup'>
									    <h1 className='title'>Register to get started</h1>
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
												<Button variant="contained" color="secondary" type="submit" style={{ margin: '20px', minWidth: '225px', minHeight: '40px', borderRadius: '15px' }}>Register</Button>
											</form>
									</div>
								</>}
								handleClose={togglePopup}
							/>}
						</h4>
					</div>
			</form>
		</div>
	</div>
  );
}

export default Login;
