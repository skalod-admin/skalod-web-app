import React from 'react'
import coverImage from '../utils/cover.jpeg';
import Header from './Header';
const Body = () => {
  return (
    <div className="fullscreen"> 
        <img src={coverImage} alt="Background Image" />
        <div className="overlay"> 
            <h1>We are Revamping!</h1>
        </div>
    </div>
  )
}


export default Body;