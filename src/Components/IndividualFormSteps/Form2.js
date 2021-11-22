import React, {useContext} from 'react';
import AppContext from "./AppContext"
import './styles.css';

export default function Form2() {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {
        if (updateContext.arrivalDate == null) {
            console.log('Please enter your arrival date')
        } else if (updateContext.departureDate == null) {
            console.log('Plese enter your departure date')
        } else (updateContext.setStep(updateContext.currentPage + 1))
    };

    return (
        <div className="container">
            <p>Enter your details</p>
            <div className="formContain">
                <form className="form">
                    <input className="formInput" type="date" placeholder="Arrival Date" onChange={e => updateContext.setArrivalDate(e.target.value)} required/>
                    <input className="formInput" type="date" placeholder="Departure Date" onChange={e => updateContext.setDepartureDate(e.target.value)} required/>
                    <div className="multipleButtons">
                    <button className="multipleButton" value="Previous" type="button" onClick={() => updateContext.setStep(updateContext.currentPage - 1)}>Previous </button>
                    <button className="multipleButton" value="Next" type="button" onClick={next}>Next </button>
                    </div>
                </form>
            </div>
        </div>
    );
};