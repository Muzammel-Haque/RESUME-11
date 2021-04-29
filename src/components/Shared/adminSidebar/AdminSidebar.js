import React, { useContext, useEffect, useState } from 'react';
import '../Sidebar/Sidebar.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import home from '../../../Icons/home.png'
import note from '../../../Icons/note.png'
import management from '../../../Icons/management.png'
import order from '../../../Icons/add-package.png'
import service from '../../../Icons/service.png'

const AdminSidebar = () => {

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
    return (
        <div>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
             <ul className="list-unstyled">
                <li>
                    <Link style={{textDecoration:'none'}} to="/home" className="text-white">
                    <img style={{width:'15px', textDecoration:'none'}} src={home} alt=""/>  <span>Home</span>
                    </Link>
                </li>
                {isAdmin && <div>
                
                <li>
                    <Link style={{textDecoration:'none'}} to="addService" className="text-white">
                    <img style={{width:'15px', textDecoration:'none'}} src={order} alt=""/> <span>Add Service</span> 
                    </Link>
                </li>
                <li>
                    <Link style={{textDecoration:'none'}} to="/adminOrder" className="text-white">
                    <img style={{width:'15px', textDecoration:'none'}} src={note} alt=""/>  <span>Order List</span> 
                    </Link>
                </li>
                <li>
                    <Link style={{textDecoration:'none'}} to="/manageService" className="text-white">
                    <img style={{width:'15px', textDecoration:'none'}} src={service} alt=""/> <span>Manage Service</span>
                    </Link>
                </li>
                <li>
                    <Link style={{textDecoration:'none'}} to="/manageOrder" className="text-white">
                    <img style={{width:'15px', textDecoration:'none'}} src={management} alt=""/> <span>Manage Order</span>
                    </Link>
                </li>

                <li>
                    <Link style={{textDecoration:'none'}} to="/addAdmin" className="text-white">
                    <img style={{width:'15px', textDecoration:'none'}} src={management} alt=""/> <span>Add Admin</span>
                    </Link>
                </li>
                </div>}
            </ul>
        </div>
        </div>
    );
};

export default AdminSidebar;