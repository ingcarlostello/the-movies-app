import React from 'react';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import '../scss/Home.scss';

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row row-home">
                <div className="col-sm col-md-12 col-lg-4 order-12 order-lg-1 sidebar">
                    <MovieList />
                </div>
                
                <div className="col-sm col-md-12 col-lg-8 order-1 order-lg-2 details">
                   <MovieDetail />
                </div>
                
            </div>
        </div>        
    );
};

export default Home;