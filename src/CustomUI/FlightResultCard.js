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
                   <h4>{props.departs}</h4>
                   <h4>to</h4>
                   <h4>{props.arrives}</h4>
                   
                   <h4>{props.startAirport} - {props.endAirport}</h4>
                   
                   ${props.flightPrice}
                </div>
            </div>
        </div>
        
    )
}

                      
                      