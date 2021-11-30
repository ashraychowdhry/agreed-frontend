import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Pages/LandingLogin'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Landing from './Pages/LandingLogin'
import NavBar from './Components/NavBar'
import AboutUs from './Pages/AboutUs'
import PageNotFoundPage from './Pages/PageNotFoundPage'
import CreateGroupForm from './Pages/CreateGroupForm'
import IndividualForm from './Components/IndividualFormSteps/IndividualForm'
import CreditCard from './Components/CreditCard'

const App = () => {
	return (
		<div>
			<BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/aboutus" element={<AboutUs/>} />
                    <Route path="/dashboard" element={
                        localStorage.getItem("token") ? (
                            <Dashboard/>
                        ) : (
                            <Login/>
                        )} 
                    />
                    <Route path="/creategroupform" element={
                        localStorage.getItem("token") ? (
                            <CreateGroupForm />
                        ) : (
                            <Login/>
                        )} 
                    />
                    <Route path="/individualform" element={
                        localStorage.getItem("token") ? (
                            <IndividualForm />
                        ) : (
                            <Login/>
                        )} 
                    />
                    <Route path="/creditcard" element={
                        localStorage.getItem("token") ? (
                            <CreditCard />
                        ) : (
                            <Login/>
                        )} 
                    />
                    <Route path='*' element={<PageNotFoundPage />} />
                </Routes>
			</BrowserRouter>


            
		</div>
	);
}





export default App
