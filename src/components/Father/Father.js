import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';

const Father = () => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <MySelf></MySelf>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;