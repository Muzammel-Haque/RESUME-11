import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const AddReview = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Testimonials</h1>
            <div style={{width:'80%', margin:'100px auto'}} className="row">
                {
                    review.map(data => <ReviewDetails data={data}></ReviewDetails>)
                }   
            </div>
        </div> 
    );
};

export default AddReview;