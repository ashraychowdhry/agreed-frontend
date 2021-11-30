import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './landing.css'
import '../styles.css'

function Login() {
	let navigate = useNavigate();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		if (localStorage.getItem("token")) {
		  navigate("/dashboard");
		}
	}, [navigate]);

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


  return (
    <div className='landing'>
		<div className='logo'>
			<a href='/'>ABEONA</a>
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
				<input type="submit" value="Login" />
			</form>
		</div>
	</div>
  );
}

export default Login;
