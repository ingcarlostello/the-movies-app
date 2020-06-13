import React from 'react';
import { Link } from "react-router-dom";
import image from '../img/avengers.jpg';
import '../scss/MovieDetail.scss';

const MovieDetail = () => {
    return (
        <div className="movieDetail-wrapper">

            <div className="button-wrapper">
                <Link to="/add-movie">
                    <button type="button" class="btn btn-primary"><span><i class="fas fa-plus"></i></span>Add New Movie</button>
                </Link>
            </div>

            <div class="row row-cols-1 row-cols-md-1 wrapper-card">
                <div class="col mb-4 movieDetail-col">
                    <div class="card movieDetail-card w-50">
                        <div class="card-header">
                            <h5>Avengers End Game</h5>
                            <div className="card-header-date">
                                <p>19/05/2019</p>
                            </div>
                        </div>
                        <img src={image} class="card-img-top" alt="..." />
                        <div class="card-body">                           
                            <p class="card-text"><strong>Movie Description:</strong> This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;