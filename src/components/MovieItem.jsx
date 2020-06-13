import React from 'react';
import '../scss/MovieItem.scss'

const MovieItem = () => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Avengers End Game</h5>                   
                    <p className="card-text">Release Date: 12/05/2019</p>
                    
                </div>
            </div>
        </div>
    );
};

export default MovieItem;