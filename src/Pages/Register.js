// THIS FILE IS UNUSED // 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Register() {
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
			console.log(data.data)
			navigate('/login', {replace: true})
		}
	}


  return (
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
  );
}

export default Register;
