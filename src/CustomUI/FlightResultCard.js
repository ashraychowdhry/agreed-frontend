import React from 'react'
import './FlightResultCard.css';


export default function FlightResultCard(props) {
    return (
        <div className='cardStyle'>
            <div className="card">
                <div>
                    <b>{props.personName}</b>
                </div>
                <div>
                   {props.flightResult}
                </div>
            </div>
        </div>
        
    )
}
