import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminSidebar from '../../Shared/adminSidebar/AdminSidebar';

const AddAdmin = () => {
    const [info, setInfo] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const eventData = {
            email: info.email,
        };
        const url = `http://localhost:5000/addAdmin`
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
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-10">
            {isAdmin && <form style={{width:'500px', border:'1px solid gray',margin:'20px', padding:'40px', borderRadius:'10px'}} onSubmit={handleSubmit}>
               <div class="form-group">
                    <label for="exampleInputPassword1">New Admin Name</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name="admin" placeholder="Name" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Email" />
                </div><br/>
                
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>}
                </div>
        </div>
    );
};

export default AddAdmin;