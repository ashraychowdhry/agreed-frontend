import React, { useContext } from 'react';
import AppContext from "./AppContext"
import './styles.css';

export default function Form1() {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;
    
    async function GetGroupData() {
        const currentGroup = localStorage.getItem("currentGroup")

		const response = await fetch('http://localhost:3001/api/getgroupdata', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				currentGroup,
			}),
		})

		const data = await response.json()
        // console.log(data)

		if (data) {
            updateContext.setEarliestDate(data.group[0].earliestDate)
            console.log(data.group[0].earliestDate)
            updateContext.setLatestDate(data.group[0].latestDate)
		} else {
			alert("Error, something went wrong")
		}
	}

    const next = () => {
        if (updateContext.airline === '') {
            console.log('Please enter your flight preference')
        } else if (updateContext.maxPrice === '') {
            console.log('Please enter your budget')
        } else {
            GetGroupData();
            console.log(updateContext.earliest)
            updateContext.setStep(updateContext.currentPage + 1)
        }
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
