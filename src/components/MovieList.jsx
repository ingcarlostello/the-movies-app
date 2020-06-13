import React, {useContext} from 'react';
import MovieItem from './MovieItem';
import {MovieContext} from '../context/MovieContext';
import { v4 as uuidv4 } from 'uuid';
import '../scss/MovieList.scss';

const MovieList = () => {

     let {arrayMovies} = useContext(MovieContext)
     console.log(arrayMovies)

    return (
        <div className="list-movies">
            {arrayMovies.map(cv => (
                <MovieItem
                    key={uuidv4()}
                    movieName={cv.title}
                    releaseDate={cv.release}                            
                />
            ))}            
        </div>
    );
};

export default MovieList;