// src/pages/Home.js

import React from 'react';

import '../Styles/Home.css';

import Restaurant from './Restaurant';
import Offers from './Offers';
import About from './About';
import Contact from './Contact';
import Reviews from './Reviews'
import ImageSlider from '../components/ImageSlider'
import Menu from './Menu';

import AdminDashboard from '../pages/AdminDashboard';
import StarRating from '../components/StarRating';



function Home() {
    return (
        <div className="home">

            <AdminDashboard />
            <ImageSlider />
            <About />
            <Menu />
            <Restaurant />
            <Offers />
            <Reviews />
            <StarRating totalStars={5} />
            <Contact />
            

        </div>
    );
}

export default Home;
