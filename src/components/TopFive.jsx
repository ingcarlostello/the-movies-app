import React, { useContext } from 'react';
import CardTopFive from './CardTopFive'
import { MovieContext } from '../context/MovieContext';

import '../scss/TopFive.scss';

const TopFive = () => {

    const { topFiveMovie } = useContext(MovieContext);

    return (
        <div>
            <div className="container-fluid">
                {topFiveMovie.map((cv) => (
                    <CardTopFive
                        movieImage={cv.image}
                        titleMovie={cv.title}
                        releaseMovie={cv.release}
                        descriptionMovie={cv.description}
                    />
                 ))} 
            </div>
        </div>
    );
};

export default TopFive;