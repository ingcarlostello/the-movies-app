import React from 'react';
import MovieItem from './MovieItem';
import '../scss/MovieList.scss';

const MovieList = () => {
    return (
        <div className="list-movies">
            <MovieItem />
        </div>
    );
};

export default MovieList;