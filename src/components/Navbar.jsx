import React from 'react';
import { Link, NavLink } from "react-router-dom";
import '../scss/Navbar.scss';



const Navbar = () => {

    

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="logo-wrapper">
                    <Link to="/">
                        <i className="fas fa-film"></i>
                        <a className="navbar-brand" href="true">The Movies App</a>
                    </Link> 
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <i className="fas fa-bars"></i>
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/"  >
                                <a className="nav-link" href="true">Home</a>                                
                            </NavLink>                            
                        </li>                        
                        <li className="nav-item">
                            <NavLink to="/add-movie"  >
                                <a className="nav-link" href="true">Add Movie</a>                                 
                            </NavLink>                            
                        </li>
                        <li className="nav-item">
                            <NavLink to="/top-five"  >
                                <a className="nav-link" href="true">Top Five</a>                                 
                            </NavLink>                            
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;