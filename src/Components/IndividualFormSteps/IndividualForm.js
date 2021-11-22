import React, {useState} from 'react';
import './styles.css'
import AppContext from "./AppContext"
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import SubmitForm from './SubmitForm'
import Progress from './Progress'

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
            <br/>
            <br/>
            <div className="body">
                 <h3>Multi Step Form using ReactJS</h3>
                 <div className="wrapper">
                 <Progress />
                 {step === 0 && <Form1 /> }
                 {step === 1 && <Form2 /> }
                 {step === 2 && <Form3 /> }
                 {step === 3 && <SubmitForm /> }
                 </div>
             </div>
        </AppContext.Provider>
    );
};