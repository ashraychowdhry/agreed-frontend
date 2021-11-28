import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faBars } from '@fortawesome/free-solid-svg-icons'
//import { Link } from 'react-router-dom'



function HeaderBar() {
    return (
        <div className='container' style={{padding: '20px'}}>
            

            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            .<div className="container">


            <a className="navbar-brand" href="/">ABEONA</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to='/' className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/aboutus' className="nav-link" >About the Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' className="nav-link" >Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/register' className="nav-link" >Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-link" >Log out</Link>
                    </li>
                </ul>
                
            </div>

            </div>

            </nav>


        </div>
    )
}

export default HeaderBar
