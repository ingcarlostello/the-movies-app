import React from 'react';
import '../scss/MovieItem.scss'

const MovieItem = () => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                    <a href="true" className="card-link">Card link</a>
                    <a href="tru" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    );
};

export default MovieItem;