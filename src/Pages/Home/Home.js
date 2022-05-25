import React from 'react';
import Commitment from '../Commitment';
import OurCapabilities from '../OurCapabilities';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <OurCapabilities></OurCapabilities>
            <Commitment></Commitment>
            <Footer></Footer>
        </div>
    );
};

export default Home;