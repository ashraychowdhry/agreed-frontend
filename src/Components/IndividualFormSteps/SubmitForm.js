import React, {useContext} from 'react';
import AppContext from "./AppContext"
import './styles.css';

export default function SubmitForm() {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const details = {
        maxPrice: updateContext.maxPrice, 
        flightPreference: updateContext.airline, 
        arrivalTime: updateContext.arrival, 
        departureTime: updateContext.departure, 
        arriveOn: updateContext.arrivalDate, 
        departOn: updateContext.departureDate, 
    }
    
    const maxPrice = updateContext.maxPrice
    const flightPreference = updateContext.airline
    const arrivalTime = updateContext.arrival
    const departureTime = updateContext.departure
    const arriveOn = updateContext.arrivalDate
    const departOn = updateContext.departureDate

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(details);
        const response = await fetch('http://localhost:3001/api/individualform', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
                maxPrice,
                flightPreference,
                arrivalTime,
                departureTime,
                arriveOn,
                departOn
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			alert("You have successfully submitted your form!")
			window.location.href = "/dashboard"
		} else {
            console.log(data.status)
			alert("Please fix the errors before continuing")
		}
    };

    return (
        <div className="container">
            <p>Please click Finish to submit your form!</p>
            {/* <img className="done" src="https://www.svgrepo.com/show/13650/success.svg" alt="successful" /> */}
            <button className="doneSubmit" onClick={handleSubmit}>Finish</button>
        </div>
    );
};

