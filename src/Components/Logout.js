import { useNavigate } from 'react-router-dom'

function Logout() {
	const navigate = useNavigate();

  async function LogoutUser(event) {
		event.preventDefault()

		alert("Logout successful")
		localStorage.clear()
		navigate('/', {replace: true})
	}

  return (
    <div>
			<h1>Logout</h1>
			<button onSubmit={LogoutUser}>Logout</button>
		</div>
  );
}

export default Logout;
