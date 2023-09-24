import React from 'react'
import logo from '../utils/logo.jpeg'

const Header = () => {
  return (
    <div className="fullscreen"> 
    <div className="header">
            <img src={logo} alt="Company Logo" className="logo" />
            <div className="company-info">
                <h2>Company Name</h2>
                <p>Contact Information</p>
            </div>
    </div>
    </div>
  )
}

export default Header