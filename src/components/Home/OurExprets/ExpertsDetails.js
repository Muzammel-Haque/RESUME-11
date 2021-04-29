import React from 'react';

const ExpertsDetails = ({experts}) => {
    return (
        <div className="col-md-4">
            <div>
                <img style={{width:'300px', borderRadius:'10px 50px'}} src={experts.img} alt=""/>
                <h4>{experts.name}</h4>
                <p className="text-secondary">{experts.description}</p>
            </div>
        </div>
    );
};

export default ExpertsDetails;