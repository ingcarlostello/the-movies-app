import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';
import '../scss/MovieItem.scss'

const MovieItem = ({movieName, releaseDate}) => {

    const { arrayMovies } = useContext(MovieContext);
    const [detailsMovie, setDetailsMovie] = useState(arrayMovies)

    const showMovieDetail = () => {
        console.log(detailsMovie)
    }

    return (
        <div>
            <div className="card" onClick={showMovieDetail}>
                <div className="card-body">                   
                    <h5 className="card-title">{movieName}</h5>                   
                    <p className="card-text">Release Date: {releaseDate}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieItem;