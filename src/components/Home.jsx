import React, { useContext } from 'react';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import { Link } from "react-router-dom";
import { MovieContext } from '../context/MovieContext';
import { v4 as uuidv4 } from 'uuid';
import '../scss/Home.scss';


const Home = () => {
    
    let {arrayMovies} = useContext(MovieContext);
    const informativeTitle = arrayMovies.length === 0 ? "There is no Movies yet"  : null

    return (
        <div className="container-fluid">
            <div className="row row-home">
                <div className="col-sm col-md-12 col-lg-4 order-12 order-lg-1 sidebar">
                    <MovieList
                        key={uuidv4()}
                    />
                </div>
                <div className="col-sm col-md-12 col-lg-8 order-1 order-lg-2 details">
                    <div className="button-wrapper">
                        <Link to="/add-movie">
                            <button type="button" className="btn btn-primary"><span><i className="fas fa-plus"></i></span>Add New Movie</button>
                        </Link>
                    </div>                   
                    <h1 className="text-light text-center mt-5 informative-title">{informativeTitle}</h1>
                    {arrayMovies.map((cv, i) => (
                        <MovieDetail
                            key={uuidv4()}
                            id={cv.id}
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