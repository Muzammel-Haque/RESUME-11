import React from 'react';

const ReviewDetails = ({data}) => {
    console.log('daaata', data)
    return (
            <div className="col-md-4">
                <div style={{border:'1px solid gray', margin:'5px', padding:'40px', width:'300px' , height:'250px', textAlign:'center'}}>
                    <img style={{height:"100px"}} src={data.img} alt=""/>
                    <h6>{data.review}</h6>
                    <h5>{data.email}</h5>
                </div>
            </div>
    );
};

export default ReviewDetails;