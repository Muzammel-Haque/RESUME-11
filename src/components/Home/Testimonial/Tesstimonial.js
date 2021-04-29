import React from 'react';
import { faTruck, faTools, faCogs } from '@fortawesome/free-solid-svg-icons'
import TestimonialInfo from '../TestomonialInfo/TestimonialInfo';

const Tesstimonial = () => {
    const data =[
        {
            icon:faTruck,
            title: 'FAST DELIVERY',
            description:'There is  consec tetur adipi scing elit, sed othr  hiusmod tempor incididunt ut labore et dol eiusmod tempor incididunt ipsum dolor'
        },
        {
            icon:faCogs,
            title: 'LIFETIME WARRANTY',
            description:'There is  consec tetur adipi scing elit, sed othr  hiusmod tempor incididunt ut labore et dol eiusmod tempor incididunt ipsum dolor'
        },
        {
            icon:faTools,
            title: 'CERTIFIED EXPERTS',
            description:'There is  consec tetur adipi scing elit, sed othr  hiusmod tempor incididunt ut labore et dol eiusmod tempor incididunt ipsum dolor'
        }
    ]
    return (
        <div>
            <div style={{width:'80%', margin: "100px auto"}}>
                <div className="row">
                    {
                    data.map(data => <TestimonialInfo data={data}></TestimonialInfo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tesstimonial;