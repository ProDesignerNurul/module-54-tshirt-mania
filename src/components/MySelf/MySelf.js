import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const MySelf = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h2>MySelf</h2>
            <p>Gift : {house}</p>
            <button onClick={() => setHouse(house - 1)}>Decrease</button>
        </div>
    );
};

export default MySelf;