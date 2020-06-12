import React from 'react';
import image from '../img/JLA.jpg';
import '../scss/CardTopFive.scss'

const CardTopFive = () => {
    return (
        <div className="container-fluid conn-top-five">
            <div className="card card-top-five w-50">
                <div className="row no-gutters">
                    <div className="col-md-4 column-top-five">
                        <img src={image} className="card-img img-top-five" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">08/10/2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTopFive;