// Star.js
import React from 'react';

const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => {
    return (
        <span
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ cursor: 'pointer', color: filled ? '#ffd700' : '#d3d3d3' }}
        >
            ★
        </span>
    );
};

export default Star;
