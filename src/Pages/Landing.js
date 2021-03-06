import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Popup from './Popup';
import './landing.css';
import '../styles.css';
// import FlightQueryCaller from './FlightQueryCaller';

function Login() {
	const navigate = useNavigate();
  	const [firstName, setFirstName] = useState('')
  	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
	   event.preventDefault()

	   var fetchString = ''
	   if (localStorage.getItem('isLive') !== 'true') {
        fetchString = 'http://localhost:3001/register'
      } else {
        fetchString = ' https://cors-everywhere.herokuapp.com/http://ec2-35-171-158-190.compute-1.amazonaws.com:3001/register'
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
			console.log(data)
		   
	   }
	   else {
		console.log(data)
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
				<a href="/">ABEONA</a>
			</div>
			<div className='loginForm'>
				<h1 className='title'>Welcome Back!</h1>
				<form onSubmit={LoginUser}>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="Email"
					/>
					<br />
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="Password"
					/>
					<br />
					<input type="submit" value="Sign in" />
					<div className='registerPrompt'>
						<h4>New to Abeona?
							<input
								type="button"
								value="Register"
								href="/register"
							/>
							{/*isOpen && <Popup
								content={<>
									<div className='registerPopup'>
									    <h1>Register</h1>
											<form onSubmit={registerUser}>
												<input
													value={firstName}
													onChange={(e) => setFirstName(e.target.value)}
													type="text"
													placeholder="First Name"
												/>
												<br />
								        	    <input
													value={lastName}
													onChange={(e) => setLastName(e.target.value)}
													type="text"
													placeholder="Last Name"
												/>
												<br />
												<input
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													type="email"
													placeholder="Email"
												/>
												<br />
												<input
													value={password}
													onChange={(e) => setPassword(e.target.value)}
													type="password"
													placeholder="Password"
												/>
												<br />
												<input type="submit" vae="Register" />
											</form>
									</div>
								</>*
								handleClose={togglePopup}
								/>*/}
						</h4>
					</div>
				</form>
			</div>
		</div>
    );
}

export default Login;
