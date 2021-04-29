import React from 'react';
import Heading from '../Heading/Heading';
import Navbar from '../Navbar/Navbar';
import ShortBriefing from '../ShortBreef/ShortBriefing';
import Tesstimonial from '../Testimonial/Tesstimonial';

const Headers = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ShortBriefing></ShortBriefing>
            <Tesstimonial></Tesstimonial>
        </div>
    );
};

export default Headers;