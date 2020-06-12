import React from 'react';
import '../scss/Home.scss'

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div class="col-3 sidebar">
                    col 4
                </div>
                <div class="col-8">
                   col 8
                </div>
                {/* <nav className="col-md-3 col-lg-2 d-md-block sidebar">
                </nav>           */}
            </div>
        </div>
        
    );
};

export default Home;