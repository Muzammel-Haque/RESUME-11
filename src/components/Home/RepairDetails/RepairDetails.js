import React from 'react';
import {
    Link
  } from "react-router-dom";

const RepairDetails = ({maker}) => {
    const id = maker._id
    return (
        <div className="col-md-4">
            <div style={{width:'400px', padding:'10px'}}>
                <img style={{width:'100%', height:'250px'}} src={maker.imageLink} alt=""/>
                <h6>{maker.name}</h6>
                <div className="d-flex justify-content-between">
                    <h4 className="text-secondary">${maker.price}</h4>
                    <Link  to={'/order/'+id}><button style={{backgroundColor:'#14D1CB', border:'none', padding:'10px', borderRadius:'3px'}}>Take This Service</button></Link>
                </div>

            </div>
        </div>
    );
};

export default RepairDetails;