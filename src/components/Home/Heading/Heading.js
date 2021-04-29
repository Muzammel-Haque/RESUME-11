import React from 'react';
import logo1 from '../../../images/istockphoto-1169455737-612x612.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Heading = () => {
    return (
        <div className="bg-light" style={{height:'140px'}}>
            <div className="row">
                <div className="col-md-4">
                    
                    <div style={{ marginLeft:"70px"}}>
                        <img style={{width:'60px', marginLeft:'27px'}} src={logo1} alt=""/>
                        <h6>Solving Services</h6>
                    </div>
                    
                </div>
                <div className="col-md-8 d-flex justify-content-around">
                    <div className="row">
                    <div className="d-flex col-md-4 align-items-center">
                        <div style={{padding:'10px'}}>
                            <FontAwesomeIcon style={{fontSize:'50px', marginBottom:'5px'}} icon={faClock} />
                        </div>
                        <div style={{padding:'15px'}}>
                            <h6>Opening Hours</h6>
                            <p>Sat-Tue 9AM-7PM</p>
                        </div>
                    </div>
                    <div className="d-flex col-md-4 align-items-center">
                        <div style={{padding:'10px'}}>
                        <FontAwesomeIcon style={{fontSize:'50px'}} icon={faPhone} />
                        </div>
                        <div style={{padding:'15px'}}>
                            <h6>Contact Us</h6>
                            <p>0199999343</p>
                        </div>
                    </div>
                    <div className="d-flex col-md-4 align-items-center">
                        <Link to="/login"><button style={{backgroundColor:'#14D1CB', border:'none', padding:'10px', borderRadius:'3px'}}>Log in</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heading;