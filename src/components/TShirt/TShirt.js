import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt, handleAddToCart}) => {
    const {name, picture, price, gender} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>T-Shirt Name : {name}</h2>
            <p>Price ; {price}</p>
            <p>Gender : {gender}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default TShirt;