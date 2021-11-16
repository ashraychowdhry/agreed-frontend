import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register' 
import Dashboard from './Pages/Dashboard'
import Landing from './Pages/Landing'
import HeaderBar from './Components/HeaderBar'

const App = () => {
	return (
		<div>
			<BrowserRouter>
                <HeaderBar />
                <Routes>
                    <Route path='/' element={<Landing />} /> 
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                     <Route path="/dashboard" element={<Dashboard/>} />
                </Routes>
			</BrowserRouter>
		</div>
	)
}

export default App