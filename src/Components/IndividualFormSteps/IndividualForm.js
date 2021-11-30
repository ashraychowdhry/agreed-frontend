import React, {useState} from 'react';
import './styles.css'
import AppContext from "./AppContext"
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import SubmitForm from './SubmitForm'
import Progress from './Progress'
import NavBar from '../NavBar.js';

export default function IndividualForm() {
    const [step, setStep] = useState(0);
    const [budget, setBudget] = useState('')
    const [arrivalTime, setArrivalTime] = useState('')
    const [departureTime, setDepartureTime] = useState('')
    const [flightPreference, setFlightPreference] = useState('')
    const [arriveOn, setArrivalDate] = useState('')
    const [departOn, setDepartureDate] = useState('')

    const userDetails = {
        currentPage: step,
        maxPrice: budget,
        airline: flightPreference,
        arrival: arrivalTime,
        departure: departureTime,
        arrivalDate: arriveOn,
        departureDate: departOn,
        setBudget,
        setFlightPreference,
        setArrivalTime,
        setDepartureTime,
        setStep,
        setArrivalDate,
        setDepartureDate,
    };
    
    return (
        <AppContext.Provider value={{userDetails}}>
            <div class ="blueBG">      
            <NavBar/>
            <br/>
            <div class="menuCard"> 
            <div className="body">
                 <h3 class="redText" >Multi Step Individual Form</h3>
                 <div className="wrapper">
                 <Progress />
                 {step === 0 && <Form1 /> }
                 {step === 1 && <Form2 /> }
                 {step === 2 && <Form3 /> }
                 {step === 3 && <SubmitForm /> }
                 </div>
            </div>
             </div>
            </div>
            
        </AppContext.Provider>
    );
};