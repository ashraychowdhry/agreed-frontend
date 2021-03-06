import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar() {
    async function logout(event) {
		localStorage.removeItem("token");
	}

  function renderLogout() {
    if (localStorage.getItem("token") !== null) {
      return (
          <li><a href="/login" onClick={logout}>Log out</a></li>
      )
    }
  }

    return (
		<div className='navbar'>
            <div className='nav-left'>
                <a href="/">ABEONA</a>
            </div>
            <div className='nav-right'>
    			<ul>
    				<li><a href="/dashboard">Dashboard</a></li>
    				<li><a href="/aboutus">About Us</a></li>
            {renderLogout()}
    			</ul>
            </div>
		</div>
    )
}

export default NavBar;
