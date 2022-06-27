import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/AMS.jpeg';

function NavBar2() {

    const navigate = useNavigate();

    const doLogout = () => {
        const myUser = localStorage.getItem("myUser"); 
        if(myUser !== null) {
            localStorage.removeItem("myUser");
            alert("You have logged out successfully");
            navigate("/");
        }
    }

    return (
        <Navbar className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">

            <Link className="navbar-brand" to="/manager/dashboard"><img src={logo} alt="logo" width="60px" height="40px" /></Link>

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="">About us</Nav.Link>
                    <NavDropdown title="Assets" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/asset1/all">View Assets</NavDropdown.Item>
                        <NavDropdown.Item href="/asset1/all">Edit Assets</NavDropdown.Item>


                    </NavDropdown>
                    <NavDropdown title="Shipments" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/shipment2/all">View Shipments</NavDropdown.Item>
                        <NavDropdown.Item href="/shipment2/all">Edit Shipment</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Warehouses" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="warehouse/all">View Warehouses</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Orders" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/order/all">View Orders</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#"></Nav.Link>
                    <form class="form-inline" action="/action_page.php">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button class="btn btn-light" type="submit">Search</button>
                    </form>
                    <Nav.Link href=""><button className='btn btn-dark' onClick={doLogout}>Logout</button></Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>

    )
}

export default NavBar2;