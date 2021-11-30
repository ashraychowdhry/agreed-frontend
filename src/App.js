import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Landing';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import NavBar from './Components/NavBar';
import Landing from './Pages/Landing';
import AboutUs from './Pages/AboutUs';
import PageNotFoundPage from './Pages/PageNotFoundPage';
import CreateGroupForm from './Pages/CreateGroupForm';
import IndividualForm from './Components/IndividualFormSteps/IndividualForm';
import CreditCard from './Components/CreditCard'
import SearchResults from './Pages/SearchResults'
import FlightQueryCaller from './Components/FlightQueryCaller'

const App = () => {
	return (
		<div>
			<BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/aboutus" element={<AboutUs/>} />
                    <Route path="/creategroupform" element={<CreateGroupForm/>} />
                    <Route path="/individualform" element={<IndividualForm/>} />
                    <Route path="/creditcard" element={<CreditCard/>} />
                    <Route path="/searchresults" element={<SearchResults/>} />
                    <Route path='*' element={<PageNotFoundPage />} />
                </Routes>
			</BrowserRouter>
		</div>
	);
}

export default App
