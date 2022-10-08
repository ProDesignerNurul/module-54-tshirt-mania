import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('Ring')

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h2>Grandpa</h2>
                <section className='flex'>
                    <Father></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;