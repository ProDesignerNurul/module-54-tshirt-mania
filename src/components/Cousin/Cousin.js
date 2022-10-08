import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Cousin = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h2>Cousin</h2>
            <p>Ring : {house}</p>
            <button onClick={() => setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default Cousin;