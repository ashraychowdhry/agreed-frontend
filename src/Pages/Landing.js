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
			console.log(data)
		   
	   }
	   else {
		console.log(data)
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
								onClick={togglePopup}
							/>
							{isOpen && <Popup
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
												<input type="submit" value="Register" />
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
