import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import AdminSidebar from '../../Shared/adminSidebar/AdminSidebar';
import { UserContext } from '../../../App';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [imageUrl, setImageUrl] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

   
    console.log(imageUrl)
    const handleSubmit = () => {
        const eventData = {
            name: info.name,
            price: info.price,
            imageLink: imageUrl
        };
        const url = `http://localhost:5000/addService`
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
    const handleImage = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'cbaa18b1ca6bae3b0e00b20f36807031')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="row">
            <div className="col-md-2">
                <AdminSidebar></AdminSidebar>
            </div>
            {isAdmin && <div className="col-md-10">
                <div style={{width:'400px', border:'1px solid gray', padding:'40px', marginLeft:'50px', marginTop:'80px'}}>
                <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Enter Name"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Price</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name="price" placeholder="Price"/>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Price</label>
                    <input onChange={handleImage} type="file" class="form-control" name="file" placeholder="Picture"/>
                </div><br/>
                
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>}
        </div>
    );
};

export default AddService;