import React from 'react';
import './Nav.css';
import logo from './ABEONA_LOGO.png';
import Button from '@mui/material/Button';


function Nav() {
    return (
        <div className="nav__header">
            <img className="nav__image"
                src={logo}
                alt=""
            />
            <div className="nav__button" >
                <Button variant="text" size="large">
                    Dashboard
                </Button>   

                <Button variant="text" size="large" >
                    Log Out
                </Button>   
            </div>
        </div>
    )
}

export default Nav