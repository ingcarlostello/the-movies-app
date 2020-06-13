import React, { createContext, useState } from 'react';


//* 1) Context is created
export const MovieContext = createContext();

//* 2) Create the provider
const MovieProvider = (props) => {
    

    const [arrayMovies, setArrayMovies] = useState([]);
    const listedMovies = (movie) =>{
        setArrayMovies([
        ...arrayMovies,
        movie
        ]);
    };

    

    return (
        <MovieContext.Provider
            value={{
                
                listedMovies,
                arrayMovies
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;



