import React from 'react';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import '../scss/Home.scss'


const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row row-home">
                <div class="col-3 sidebar">
                    <MovieList />
                </div>
                <div class="col-8 details">
                   <MovieDetail />
                </div>
            </div>
        </div>
        
    );
};

export default Home;