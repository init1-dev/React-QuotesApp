import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="container-fluid">

                <Link to="/" className="navbar-brand"> Multi-App </Link>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* <NavLink to="/" className={ ({isActive}) => `nav-link ${ (isActive) ? 'active' : '' }` }> Home </NavLink> */}
                        <NavLink to="/React-MultiApp/" className="nav-link"> Home </NavLink>
                        <NavLink to="/React-MultiApp/about" className="nav-link"> About </NavLink>
                        <NavLink to="/React-MultiApp/login" className="nav-link"> Login </NavLink>
                        <NavLink to="/React-MultiApp/quotes" className="nav-link"> Quotes </NavLink>
                        <NavLink to="/React-MultiApp/todo" className="nav-link"> ToDo </NavLink>
                    </div>
                </div>
                
            </div>
        </nav>
    )
};