import React from 'react';

const Error = ({message}) => {
    return (
        <div>
            <div className="alert alert-danger mt-5" role="alert">
                <strong>{message}</strong>
            </div>
        </div>
    );
};

export default Error;