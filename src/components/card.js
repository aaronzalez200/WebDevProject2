import React from "react"
import card from '../images/katie-zaferes.png';
import star from '../images/star.png';
/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
    return (
        <info className='card-text'>
            <img src={card} className='card-here'/>
            <div className='rating'>
                <img src={star} className='star-here'/>
                <text className = 'card-rating'>5.0</text>
                <thin className = 'card-info'>  (6) • USA </thin>
                <p className='description'>
                    Life lessons with Katie Zaferes <b>From $136</b> / person
                </p>
            </div>
        </info>
    )
}