import React, { useContext } from 'react';
import MovieItem from './MovieItem';
import '../scss/MovieList.scss';
import { MovieContext } from '../context/MovieContext';

const MovieList = () => {

    //const { arrayMovies, cloneArrayMovies } = useContext(MovieContext);
    const { cloneArrayMovies } = useContext(MovieContext);
    
    return (
        <div className="list-movies">
            {cloneArrayMovies.map((cv, i) => (
                <MovieItem
                    key={i}
                    id={cv.id}
                    movieName={cv.title}
                    releaseDate={cv.release}
                />
            ))}
        </div>
    );
};

export default MovieList;