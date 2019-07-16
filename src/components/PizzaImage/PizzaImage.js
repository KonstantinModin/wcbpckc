import React from 'react';
import './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const PizzaImage = (props) => {
    return (
        <div className="PizzaImage">
            <img src={PizzaImage} alt="Pizza"/>
        </div>
    )
};

export default PizzaImage;
