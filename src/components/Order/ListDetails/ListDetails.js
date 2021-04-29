import React from 'react';

const ListDetails = ({orderList}) => {
    return (
        <div className="col-md-6">
            <div style={{border:'1px solid gray', width:'400px', padding:'40px', borderRadius:'4PX'}}>
                <h3>{orderList.name}</h3>
                <h6>Price: ${orderList.price}</h6>
                <p className="text-secondary">{orderList.email}</p>
                <small>Transaction Id: {orderList.idToken}</small>
            </div>
        </div>
    );
};

export default ListDetails;