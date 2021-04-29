import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Shared/Sidebar/Sidebar';


const Review = () => {
    const [info, setInfo] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser.photoURL)

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const eventData = {
            review: info.review,
            img:loggedInUser.photoURL,
            email: loggedInUser.email,
            date: new Date()
        };
        const url = `http://localhost:5000/review`
        console.log('price', eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)

        })
        .then(res => console.log('server site response'))
    };

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
            <form style={{width:'500px', border:'1px solid gray',margin:'20px', padding:'40px', borderRadius:'10px'}} onSubmit={handleSubmit}>
               <div class="form-group">
                    <label for="exampleInputPassword1">Add Your Review</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name="review" placeholder="Review" />
                </div> <br/>
                
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Review;