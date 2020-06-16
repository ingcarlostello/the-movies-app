import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { v4 as uuidv4 } from 'uuid';
import CardTopFive from './CardTopFive';
import '../scss/TopFive.scss';

const TopFive = () => {

    const { topFiveMovie } = useContext(MovieContext);

    return (
        <div>
            <div className="container-fluid">
                {topFiveMovie.map((cv) => (
                    <CardTopFive
                        key={uuidv4()}
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