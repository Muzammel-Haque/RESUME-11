import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import home from '../../../Icons/home.png'
import note from '../../../Icons/note.png'
import review from '../../../Icons/review.png'
import order from '../../../Icons/add-package.png'
// import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
            <li>
                    <Link style={{ textDecoration:'none'}} to="/home" className="text-white">
                        <img style={{width:'15px', textDecoration:'none'}} src={home} alt=""/> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link style={{ textDecoration:'none'}} to="/order/:id" className="text-white">
                    <img style={{width:'15px', textDecoration:'none'}} src={order} alt=""/>  <span>Add Order</span> 
                    </Link>
                </li>
                <li>
                    <Link style={{ textDecoration:'none'}} to="/orderList" className="text-white">
                    <img style={{width:'15px', textDecoration:'none'}} src={note} alt=""/>  <span>Order List</span> 
                    </Link>
                </li>
                <li>
                    <Link style={{ textDecoration:'none'}} to="/addReview" className="text-white">
                    <img style={{width:'15px', textDecoration:'none'}} src={review} alt=""/>  <span>Add Review</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;