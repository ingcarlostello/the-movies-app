import React from 'react';
import '../scss/Navbar.scss';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="logo-wrapper">
                    <i className="fas fa-film"></i>
                    <a className="navbar-brand" href="true">The Movies App</a>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <i className="fas fa-bars"></i>
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="true">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="true">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;