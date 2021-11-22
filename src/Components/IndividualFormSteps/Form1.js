import React, { useContext } from 'react';
import AppContext from "./AppContext"
import './styles.css';

export default function Form1() {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {
        if (updateContext.airline === '') {
            console.log('Please enter your flight preference')
        } else if (updateContext.maxPrice === '') {
            console.log('Please enter your budget')
        } else (updateContext.setStep(updateContext.currentPage + 1))
    };

    return (
        <div className="contain">
            <p>Enter Your Details</p>
            <form className="form">
                <input className="formInput" type="text" placeholder="Airline Preference" onChange={e => updateContext.setFlightPreference(e.target.value)} required/>
                <input className="formInput" type="text" placeholder="Budget for Flight" onChange={e => updateContext.setBudget(e.target.value)} required/>
                <button type="button" className="formSubmit" onClick={next} >Next</button>
            </form>
        </div>
    );
};
