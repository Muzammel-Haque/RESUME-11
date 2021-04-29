import React from 'react';
import logo from '../../../Icons/pin.png'
import facebook from '../../../Icons/facebook.png'
import instagram from '../../../Icons/instagram.png'
import twitter from '../../../Icons/twitter.png'
import youtube from '../../../Icons/youtube.png'
import './Footer.css'

const Footer = () => {
    return (
        <div  style={{margin:'20px auto', textAlign:'center', backgroundColor:'#14D1CB', padding:'40px'}}>
           <div className="row">
                <div className="col-md-4">
                   <div className="box">
                   <h3>Our Services</h3>
                        <h4 style={{marginTop:'50px'}} className="text-secondary">Android Servicing</h4>
                        <h4 className="text-secondary">Iphone Servicing</h4>
                        <h4 className="text-secondary">Laptop Servicing</h4>
                        <h4 className="text-secondary">Desktop Servicing</h4>
                        <h4 className="text-secondary">Television Servicing</h4>
                   </div>
                </div>
                <div className="col-md-4 location">
                   <div className="box">
                   <h3>Our Servicing Center</h3>
                    <div style={{display:'flex',marginTop:'30px', marginLeft:'60px'}}>
                        <img src={logo} alt=""/>
                        <div>
                            <p>Dhaka Super Market </p>
                            <p className="text-secondary">Flor No: 2, Shop No: 44</p>
                        </div>
                    </div>
                    <div style={{display:'flex', marginLeft:'60px'}}>
                        <img src={logo} alt=""/>
                        <div>
                            <p>Shylet Super Market </p>
                            <p className="text-secondary">Flor No: 2, Shop No: 44</p>
                        </div>
                    </div>
                    <div style={{display:'flex', marginLeft:'60px'}}>
                        <img src={logo} alt=""/>
                            <div>
                                <p>Chittagong Super Market </p>
                                <p className="text-secondary">Flor No: 2, Shop No: 44</p>
                            </div>
                    </div>
                    <div style={{display:'flex', marginLeft:'60px'}}>
                        <img src={logo} alt=""/>
                            <div>
                                <p>Khula Super Market </p>
                                <p className="text-secondary">Flor No: 2, Shop No: 44</p>
                            </div>
                    </div>
                   </div>
                </div>
                <div className="col-md-4 connected">
                    <div className="box">
                    <h3>Stay Connected</h3>
                    <div style={{marginTop:'70px'}}>
                        <img src={facebook} alt=""/>
                        <img src={instagram} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={youtube} alt=""/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;