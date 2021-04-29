import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../ShortBreef/ShortBriefing.css'

const TestimonialInfo = ({data}) => {
    return (
        <div  className="col-md-4">
            <div style={{textAlign:'center', width:'300px'}}>
                <FontAwesomeIcon className="icon" style={{fontSize:'3em'}} icon={data.icon} />
                <h4>{data.title}</h4>
                <p style={{textAlign:'justify'}} className="text-secondary">{data.description}</p>
            </div>
        </div>
    );
};

export default TestimonialInfo;