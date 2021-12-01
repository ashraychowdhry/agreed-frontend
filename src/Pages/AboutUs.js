import React from 'react'
import './Global.css';
import Box from '@mui/material/Box';
import NavBar from '../Components/NavBar.js';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { faItalic } from '@fortawesome/free-solid-svg-icons';


export default function AboutUs() {
    async function getData() {
        const response = await fetch(' https://cors-everywhere.herokuapp.com/http://ec2-35-171-158-190.compute-1.amazonaws.com:3001/api/getusergroups', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: "dummyUserID",
            }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
            console.log(data.data)
            alert("Group creation successful")
            window.location.href ="/individualform"
        } else {
            console.log(data.status)
            alert("Please fix the errors before continuing")
        }
    }

    return (
        <div className='blueBG'>
            <NavBar/>
            <div className="aboutMenuCard">
                <h5 item style={{paddingTop: 20,
                                paddingLeft: 40,
                                paddingRight: 40}}>
                    Traveling with friends and family should be fun...
                </h5>
                <br></br>

                <h5 item style={{fontStyle: 'italic', paddingLeft: 40, paddingBottom: 20}}>
                    Just fun.
                </h5>

                <p item style={{paddingLeft: 40, paddingRight: 40}}>
                    We all want to share adventures with the people we love.
                    But the effort and stress of planning moments of connection
                    frequently makes this ideal difficult to achieve.
                    <br></br>
                    <br></br>
                    Abeona streamlines this process so that you
                    can spend more time making memories with the
                    people you care about.
                    <br></br>
                    <br></br>
                    Abeona is a startup venture created in Georgia Tech's CREATE-X program.
                </p>
            </div>
        </div>
    )
}
