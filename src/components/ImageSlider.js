import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/ImageSlider.css';

function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
    };

    const images = [
        `${process.env.PUBLIC_URL}/image/one.jpg`,
        /*`${process.env.PUBLIC_URL}/image/two.jpg`,
        `${process.env.PUBLIC_URL}/image/three.jpg`,
        `${process.env.PUBLIC_URL}/image/four.jpg`,
        `${process.env.PUBLIC_URL}/image/five.jpg`,*/
    ];

    return (
        <div className='wrapper'>
            <section className='slide-container'>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="slide">
                            <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
                            <div className="text-overlay">
                                <div className="text-content">
                                    <h1 className="slide-title">Welcome to Sunset Serenity</h1>
                                    <p className="slide-description">Step into the serenity of Sunset Serenity, where luxury meets tranquility.</p>
                                    <p className="slide-description">Experience luxury and comfort.</p>
                                </div>
                                <a href="#about" className="explore">Explore More</a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    );
}

export default ImageSlider;
