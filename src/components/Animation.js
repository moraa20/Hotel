/*
import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../Styles/Animation.css';

const AnimatedText = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animate only once when it comes into view
        threshold: 0.1, // Trigger when 10% of the element is in view
    });

    return (
        <div ref={ref} className={`fade-in ${inView ? 'visible' : ''}`}>
            {children}
        </div>
    );
};

export default AnimatedText; */
