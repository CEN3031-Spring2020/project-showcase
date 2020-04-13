import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className = "header">
            {/* Logo */}
            <Link className = "nav-link" to="/">
                CEN 3031
            </Link>

            {/* Page Links */}
            <div className = "nav-items">
                <Link className = "nav-link" to='/Home'>Home</Link>

                <a className = "nav-link" target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/docs/">Node Docs</a>
            </div>

        </div>
    )
};

export default NavBar;