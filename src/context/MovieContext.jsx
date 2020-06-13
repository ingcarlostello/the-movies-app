import React, { createContext, useState } from 'react';


//* 1) Context is created
export const MovieContext = createContext();

//* 2) Create the provider
const MovieProvider = (props) => {
    const [infoMovie, setInfoMovie] = useState({
        title: "avengers",
        release: "12/05/2019",
        description: "kskjjj ttjtkje aavdemtugjd babifk",
        image: "gg.jpg"
    });

    return (
        <MovieContext.Provider
            value={{
                infoMovie
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;



