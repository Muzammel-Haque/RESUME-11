import React from 'react';
import ratulImg from '../../../images/ratul.jfif'
import sajibImg from '../../../images/sajib.jfif'
import rakibImg from '../../../images/rakib.jfif'
import ExpertsDetails from './ExpertsDetails';

const Experts = () => {
    const expertsData = [
        {
            name:'Sajib khan',
            img:sajibImg,
            description:'Word Class Hardware Engineer'
        },
        {
            name:'Ratul khan',
            img:ratulImg,
            description:'Word Class Software Engineer'
        },
        {
            name:'Rakib khan',
            img:rakibImg,
            description:'Word Class Hardware Engineer Specially for laptop'
        },
    ]
    return (
        <div>
            <h1 style={{textAlign:'center', marginTop:'70px'}}>Our Experts</h1>
            <div style={{width:'80%', margin:'60px auto'}} className="row">
                {
                    expertsData.map(experts => <ExpertsDetails experts={experts}></ExpertsDetails>)
                }
            </div>
        </div>
    );
};

export default Experts;