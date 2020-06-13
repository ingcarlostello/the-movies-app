import React, { useContext } from 'react';
import MovieList from './MovieList';
import { MovieContext } from '../context/MovieContext';
import MovieDetail from './MovieDetail';
import { v4 as uuidv4 } from 'uuid';
import '../scss/Home.scss';

const Home = () => {

    let {arrayMovies} = useContext(MovieContext)
    

    return (
        <div className="container-fluid">
            <div className="row row-home">
                <div className="col-sm col-md-12 col-lg-4 order-12 order-lg-1 sidebar">
                    <MovieList  
                        key={uuidv4()}
                    />
                </div>                
                <div className="col-sm col-md-12 col-lg-8 order-1 order-lg-2 details">
                    {arrayMovies.map(cv => (
                        <MovieDetail 
                            key={uuidv4()}
                            titleMovie={cv.title}
                            photoMovie={cv.image}
                            releaseMovie={cv.release}
                            descriptionMovie={cv.description}
                        />
                    ))}                  
                </div>
                
            </div>
        </div>        
    );
};

export default Home;