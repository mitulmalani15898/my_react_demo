import React from 'react';
import { Link } from 'react-router-dom'; 
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Demo</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/landing">Landing</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;