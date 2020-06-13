import React from 'react';
import { Link } from "react-router-dom";
import image from '../img/avengers.jpg';
import '../scss/MovieDetail.scss';

const MovieDetail = () => {
    return (
        <div className="container-fluid movieDetail-container">
            <div className="button-wrapper">
                <Link to="/add-movie">
                    <button type="button" className="btn btn-primary"><span><i className="fas fa-plus"></i></span>Add New Movie</button>
                </Link>
            </div>

            <div className="movieDetail__card">
                
                <div className="movieDetail__card-wrapper-photo">
                    <div className="movieDetail__card-img">
                        <img src={image} className="movieDetail__card-photo" alt="..." />
                    </div>
                </div>
                <div className="movieDetail__card-header">
                    <h2>Avengers End Game</h2>
                    <div className="card-header-date">
                        <p>19/05/2019</p>
                    </div>
                </div>
                <div className="movieDetail__card-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare est ultricies, pretium justo eu, malesuada quam. In ornare libero et nulla vestibulum maximus.</p>
                </div>
            </div>
        </div>
    )
};

export default MovieDetail;