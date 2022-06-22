import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/AMS.jpeg'

function NavBar() {

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <Link className="navbar-brand" to="#"><img src={img1} style={{width:"65px",height:"35px"}}></img></Link>
            <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
                    <Link className="nav-link" to="/asset/add">Add Asset</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">AboutUs</Link>
                </li>
                
            </ul>
        </nav>
    )
}

export default NavBar;