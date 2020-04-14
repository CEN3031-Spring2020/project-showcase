import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className = "header">
            {/* Logo */}
            <Link className = "nav-link" to="/">
                CEN 3031
            </Link>

            {/* Page Links */}
            <div className = "nav-items">
                <Link className = "nav-link" to='/Home'>Home</Link>

                <Link className = "nav-link" to='/Projects'>Projects</Link>
            </div>
        </div>
    )
};

export default Navbar;