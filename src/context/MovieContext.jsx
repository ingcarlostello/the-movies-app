import React, { createContext, useState, useEffect } from 'react';
import Dexie from 'dexie';


//* 1) Context is created
export const MovieContext = createContext();

//* 2) Create the provider
const MovieProvider = (props) => {

    let [topFiveMovie, setTopFiveMovie] = useState([]); 

    useEffect(() => {
       let getTopFiveMovies = async () =>{
           let url = 'http://www.mocky.io/v2/5dc3c053300000540034757b';
           let res = await fetch(url);
           // eslint-disable-next-line react-hooks/exhaustive-deps
           topFiveMovie = await res.json();
           setTopFiveMovie(topFiveMovie.movies);      
       }
       getTopFiveMovies()
    }, [])
    
    //* 1) set Database called "MovieDataBase"
    const db = new Dexie("MovieDataBase");
    //* 2) Create the darabase store
    db.version(1).stores({
        movies: "id, title, release, description, image"
    })
    db.open().catch((err) => {
        console.log(err.stack || err);
    })

    const [arrayMovies, setArrayMovies] = useState([]);
    const [cloneArrayMovies, setCloneArrayMovies] = useState([])

    const listedMovies = (movie) => {
        setArrayMovies([
            ...arrayMovies,
            movie
        ]);
    };   

    let filterCards = (id) => {

        if (arrayMovies.length === 0 || arrayMovies.length === 1) {
          
            let arrayFill = cloneArrayMovies.map(cv => {
                return cv
            })
            setArrayMovies(arrayFill);
        } else {
            let filterArray = arrayMovies.filter(cv => {
                return cv.id === id
            })
            setArrayMovies(filterArray);
        }






        // console.log(arrayMovies.length)
        // if (arrayMovies.length === 0 || arrayMovies.length === 1 ) {        
        //     console.log("es igual a 0 o 1")
        //     setArrayMovies(cloneArrayMovies)

        // }else if(arrayMovies.length > 1){
        //     let value = arrayMovies.filter((cv, i) => {
        //         return cv.id === id
        //     })
        //     setArrayMovies(value)
        // }
        // let value = arrayMovies.filter((cv) => {
        //     return cv.id === id
        // })
        // setArrayMovies(value)


        // else {
        //     console.log("no es = 1")
        //     let value3 = arrayMovies.filter((cv, i) => {
        //         return cv.id === id
        //     })
        //     setArrayMovies(value3)
        // }
    }

    useEffect(() => {
        const getMovies = async () => {
            let allMovies = await db.movies.toArray();
            setArrayMovies(allMovies);
            setCloneArrayMovies(allMovies);
        }
        getMovies();
    }, []);

    //* this function delete a movie from the BD
    const deleteMovie = async (id) => {
        console.log(id);
        db.movies.delete(id);
        let allMovies = await db.movies.toArray();
        setArrayMovies(allMovies);
    }

    //console.log(arrayMovies);
    //console.log(cloneArrayMovies)

    return (
        <MovieContext.Provider
            value={{
                db,
                listedMovies,
                arrayMovies,
                filterCards,
                cloneArrayMovies,
                deleteMovie,
                topFiveMovie
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;



