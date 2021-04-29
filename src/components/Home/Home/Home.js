import React from 'react';
import OurServices from '../OurServices/OurServices';
import Headers from '../Header/Headers';
import ProvidedService from '../ProvidedService/ProvidedService';
import Experts from '../OurExprets/Experts';
import AddReview from '../OurServices/addReview/AddReview';
import Footer from '../../Footer/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <OurServices></OurServices>
            <Experts></Experts>
            <ProvidedService></ProvidedService>
            <AddReview></AddReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;