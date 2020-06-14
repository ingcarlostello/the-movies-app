import React, { createContext, useState, useEffect } from 'react';
import Dexie from 'dexie';


//* 1) Context is created
export const MovieContext = createContext();

//* 2) Create the provider
const MovieProvider = (props) => {

    //* 1) set Database called "MovieDataBase"
    const db = new Dexie("MovieDataBase");
    //* 2) Create the darabase store
    db.version(1).stores({
        movies: "title, release, description, image"
    })
    db.open().catch((err) => {
        console.log(err.stack || err);
    })

    const [arrayMovies, setArrayMovies] = useState([]);
    const listedMovies = (movie) => {
        setArrayMovies([
            ...arrayMovies,
            movie
        ]);
    };

    useEffect(() => {
        const getMovies = async () => {
            let allMovies = await db.movies.toArray();
            setArrayMovies(allMovies);
        }
        getMovies();
    }, []);

    return (
        <MovieContext.Provider
            value={{
                db,
                listedMovies,
                arrayMovies
                // infoMovieDb
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;



