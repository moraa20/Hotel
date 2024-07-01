import React from 'react';
import '../Styles/Menu.css';

// Import images
import spaghetti from '../assets/Images/foodone.jpg';
import caesar from '../assets/Images/foodtwo.jpg';
import salmon from '../assets/Images/drinkthree.jpg';
import water from '../assets/Images/foodfour.jpg';
import rice from '../assets/Images/foodfive.jpg';
import chipo from '../assets/Images/drinkone.jpg';
import chapati from '../assets/Images/drinktwo.jpg';
import pilau from '../assets/Images/drinkthree.jpg';
import nyamachoma from '../assets/Images/foodthree.jpg';


function Menu() {
    const menuItems = [
        { name: 'Spaghetti Bolognese', description: 'Classic Italian pasta dish', price: '$12', imageUrl: spaghetti },
        { name: 'Caesar Salad', description: 'Crispy romaine lettuce with Caesar dressing', price: '$8', imageUrl: caesar },
        { name: 'Grilled Salmon', description: 'Fresh salmon grilled to perfection', price: '$15', imageUrl: salmon },
        { name: 'Water', description: 'Classic Italian water dish', price: '$12', imageUrl: water },
        { name: 'Rice', description: 'Crispy rice lettuce with beef stew', price: '$8', imageUrl: rice },
        { name: 'Chipo', description: 'Fresh chipo fried to perfection', price: '$15', imageUrl: chipo },
        { name: 'Chapati', description: 'Classic Italian chapo dish', price: '$12', imageUrl: chapati },
        { name: 'Pilau', description: 'Crispy romaine lettuce with Caesar dressing', price: '$8', imageUrl: pilau },
       /* { name: 'Nyama Choma', description: 'Fresh salmon grilled to perfection', price: '$15', imageUrl: nyamachoma },*/
    ];

    return (
        <div className="menu-container">
            <div className="menu">
                <h2>Seasonal Menus</h2>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="food-images">
                {menuItems.map((item, index) => (
                    <div key={index} className="food-image">
                        <img src={item.imageUrl} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
