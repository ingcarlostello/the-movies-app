import React, { createContext, useState, useEffect } from 'react';
import Dexie from 'dexie';


//* 1) Context is created
export const MovieContext = createContext();

//* 2) Create the provider
const MovieProvider = (props) => {

    let [topFiveMovie, setTopFiveMovie] = useState([]);
    const [arrayMovies, setArrayMovies] = useState([]);
    const [cloneArrayMovies, setCloneArrayMovies] = useState([]);

    //! 1.1) set Database called "MovieDataBase"
    const db = new Dexie("MovieDataBase");
    //! 2.1) Create the darabase store
    db.version(1).stores({
        movies: "id, title, release, description, image"
    });
    db.open().catch((err) => {
        console.log(err.stack || err);
    });

    //! **********************this use effect get the movies from the API**********************
    useEffect(() => {
        let getTopFiveMovies = async () => {
            let url = 'http://www.mocky.io/v2/5dc3c053300000540034757b';
            let res = await fetch(url);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            topFiveMovie = await res.json();
            setTopFiveMovie(topFiveMovie.movies);
        }
        getTopFiveMovies();
    }, []);

    const listedMovies = (movie) => {
        setArrayMovies([
            ...arrayMovies,
            movie
        ]);
    };

    //! **********************This useEffect get all the movies from DB **********************
    useEffect(() => {
        const getMovies = async () => {
            let allMovies = await db.movies.toArray();
            setArrayMovies(allMovies);
            setCloneArrayMovies(allMovies);
        }
        getMovies();
    }, []);

    //! ********************** this function delete a movie from the BD**********************
    const deleteMovie = async (id) => {
        console.log(id);
        db.movies.delete(id);
        let allMovies = await db.movies.toArray();
        setArrayMovies(allMovies);
        setCloneArrayMovies(allMovies);
    }

    //! ********************** this function filter the cards at MovieDetail component**********************
    let filterCards = (id) => {
        if (arrayMovies.length > 1) {
            let filterArray = arrayMovies.filter(cv => {
                return cv.id === id;
            })
            setArrayMovies(filterArray);
        }
        else {
            let filterArray = cloneArrayMovies.filter(cv => {
                return cv.id === id;
            })
            setArrayMovies(filterArray);
        } 
    }

    return (
        <MovieContext.Provider
            value={{
                db,
                listedMovies,
                arrayMovies,
                filterCards,
                cloneArrayMovies,
                deleteMovie,
                topFiveMovie,
                setArrayMovies,
                setCloneArrayMovies
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;



