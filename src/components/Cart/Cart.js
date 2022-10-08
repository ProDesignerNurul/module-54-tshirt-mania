import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveItem}) => {



    let massage;
    if(cart.length === 0){
        massage = <p> Please Buy Minimum One Item !!! </p>
    }
    else if(cart.length === 1){
        massage = <p> You Are A Very Good Boy !!! </p>
    }
    else{
        massage = <p> Thanks For Buying !!! </p>
    }


    return (
        <div>
            <h2 className={cart.length === 2 ? `orange` : ``}>Order Summery {cart.length}</h2>
            <h3 className={cart.length === 1 ? `font-size` : ``}>Products </h3>
            <h2 className={`blue ${cart.length === 2 ? 'green' : 'orange'}`}>Items Add Koro</h2>
            {
                cart.map(tshirt => 
                <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                massage
            }
            {cart.length === 2 ? <p> 2 Items Added </p> : <p> Please Added Minimum 2 Items </p>}

            {cart.length === 3 && <h3> 3 Items Added </h3>}
            {cart.length === 4 || <h2> 4 Items Added Nai </h2>}
        </div>
    );
};

export default Cart;