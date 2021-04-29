import React from 'react';
import image1 from '../../../images/3945070.jpg'
import './ShortBriefing.css'

const ShortBriefing = () => {
    return (
        <div style={{marginTop:'100px'}}>
            <div className="row">
                <div className="col-md-4 offset-md-1 d-flex align-items-center">
                <div>
                    <h1 style={{fontSize:'60px'}}>Solving Service</h1><br/>
                    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo excepturi sit a accusantium nobis repudiandae pariatur optio reiciendis atque voluptate.</p><br/>
                    <button style={{backgroundColor:'#14D1CB', border:'none', padding:'10px', borderRadius:'3px'}}>Learn More</button>

                </div>
                </div>
                <div className="col-md-5 title-img">
                    <img style={{width:'600px'}} src={image1} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ShortBriefing;