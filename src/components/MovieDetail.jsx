import React from 'react';
import { Link } from "react-router-dom";
import '../scss/MovieDetail.scss';

const MovieDetail = ({titleMovie, photoMovie, releaseMovie, descriptionMovie}) => {
     

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
                        <img src={photoMovie} className="movieDetail__card-photo" alt="..." />
                    </div>
                </div>
                <div className="movieDetail__card-header">
                    <h2>{titleMovie}</h2>
                    <div className="card-header-date">
                        <p>{releaseMovie}</p>
                    </div>
                </div>
                <div className="movieDetail__card-text">
                    <p>{descriptionMovie}</p>
                </div>
            </div>
        </div>
    )
};

export default MovieDetail;