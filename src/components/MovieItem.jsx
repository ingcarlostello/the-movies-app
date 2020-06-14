import React from 'react';
import '../scss/MovieItem.scss';

const MovieItem = ({movieName, releaseDate}) => {    
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{movieName}</h5>
                    <p className="card-text">Release Date: {releaseDate}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieItem;