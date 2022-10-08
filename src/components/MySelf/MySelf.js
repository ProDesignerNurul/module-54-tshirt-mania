import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const MySelf = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h2>MySelf</h2>
            <p>Gift : {ring}</p>
        </div>
    );
};

export default MySelf;