import React from 'react';
import photo from '../images/photo-grid.png';

export default function Body() {
    return(
        <main className='Main-text'>
            <img src={photo} className="photo-grid" alt='grid'/>
            <h1 className="text">Online Experiences</h1>
            <p className="subtext">Join unique interactive activities led by one-of a kind hosts-all without leaving home.</p>
        </main>
    )
}