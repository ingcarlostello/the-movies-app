import React from 'react';
import CardTopFive from './CardTopFive'

import '../scss/TopFive.scss';

const TopFive = () => {
    return (
        <div>
            <div className="container-fluid">
                <h1>Top 5 Movies</h1>
                <CardTopFive />
                <CardTopFive />
                <CardTopFive />
                <CardTopFive />
                <CardTopFive />
            </div>            
        </div>

    );
};

export default TopFive;