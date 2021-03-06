import React, {useState} from 'react'
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
import FlightQueryCaller from './Components/FlightQueryCaller'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import StripeContainer from './Components/payments/StripeContainer'
import Confirmation from './Pages/Confirmation'


const abeona = createMuiTheme({
	palette: {
		primary: {
			main:'#00254a'
		},
		secondary: {
			main:'#94031e'
		}

	}
})




const App = () => {

    localStorage.setItem('isLive', 'true');

	return (
		<div>


      <ThemeProvider theme={abeona}>
			<BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/aboutus" element={<AboutUs/>} />
                    <Route path="/stripe" element={<StripeContainer/>} />
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
                    <Route path="/searchresults/:slug" element={<FlightQueryCaller />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                    <Route path='*' element={<PageNotFoundPage />} />

                </Routes>
			</BrowserRouter>
      </ThemeProvider>


		</div>
	);
}





export default App
