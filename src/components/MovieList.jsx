import React, { useContext } from 'react';
import MovieItem from './MovieItem';
import '../scss/MovieList.scss';
import { MovieContext } from '../context/MovieContext';

const MovieList = () => {

    const { arrayMovies } = useContext(MovieContext);
    
    return (
        <div className="list-movies">
            {arrayMovies.map((cv, i) => (
                <MovieItem
                    key={i}
                    movieName={cv.title}
                    releaseDate={cv.release}
                />
            ))}
        </div>
    );
};

export default MovieList;