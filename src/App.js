import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register' 
import Dashboard from './Pages/Dashboard'
import Landing from './Pages/Landing'
import HeaderBar from './Components/HeaderBar'
import AboutUs from './Pages/AboutUs'
import PageNotFoundPage from './Pages/PageNotFoundPage'
import CreateGroupForm from './Pages/CreateGroupForm'
import IndividualForm from './Components/IndividualFormSteps/IndividualForm'

const App = () => {
	return (
		<div className='navyBG'>
			<BrowserRouter>
                <HeaderBar />
                <Routes>
                    <Route path='/' element={<Landing />} /> 
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/aboutus" element={<AboutUs/>} />
                    <Route path="/creategroupform" element={<CreateGroupForm/>} />
                    <Route path="/individualform" element={<IndividualForm/>} />
                    <Route path='*' element={<PageNotFoundPage />} />
                </Routes>
			</BrowserRouter>
		</div>
	)
}

export default App