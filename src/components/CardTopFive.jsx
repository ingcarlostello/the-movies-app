import React from 'react';
import '../scss/CardTopFive.scss';

const CardTopFive = ({movieImage, titleMovie, releaseMovie, descriptionMovie}) => {
    return (
        <div className="container-fluid conn-top-five" style={{ width: '540px' }}>
            <div className="card card-top-five">
                <div className="row no-gutters">
                    <div className="col-md-4 column-top-five">
                        <img src={movieImage} className="card-img img-top-five" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{titleMovie}</h5>
                            <p className="card-text">{releaseMovie}</p>
                            <p className="card-description">{descriptionMovie}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTopFive;