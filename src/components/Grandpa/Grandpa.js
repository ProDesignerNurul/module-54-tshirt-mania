import React, { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('Ring')

const Grandpa = () => {
    return (
        <RingContext.Provider value='This Is Ring Value'>
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