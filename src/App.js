import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register' 
import Dashboard from './components/Dashboard'

const App = () => {
	return (
		<div>
			<BrowserRouter>
                <Routes> 
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                     <Route path="/dashboard" element={<Dashboard/>} />
                </Routes>
			</BrowserRouter>
		</div>
	)
}

export default App