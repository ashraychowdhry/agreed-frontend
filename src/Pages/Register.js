// THIS FILE IS UNUSED // 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

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

		const response = await fetch('http://ec2-35-171-158-190.compute-1.amazonaws.com:3001/api/register', {
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
				<input
					value={birthday}
					onChange={(e) => setBirthday(e.target.value)}
					type="text"
					placeholder="DOB MM/DD/YYYY"
				/>
				<br />
				<input
					value={age}
					onChange={(e) => setAge(e.target.value)}
					type="text"
					placeholder="Age"
				/>
				<br />
				<input
					value={gender}
					onChange={(e) => setGender(e.target.value)}
					type="text"
					placeholder="Gender"
				/>
				<br />
				<input type="submit" value="Register" />
			</form>
	</div>
  );
}

export default Register;
