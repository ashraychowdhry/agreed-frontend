import React from 'react'

export default function FlightResultCard(props) {
    return (
        <div>
            <div className="card">
                <div>
                    {props.personName}
                </div>
                <div>
                   {props.flightResult}
                </div>
            </div>
        </div>
        
    )
}
