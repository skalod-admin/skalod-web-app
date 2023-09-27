const classnames = require('classnames');
const throttle = require('lodash/throttle');
import { useEffect, useState } from 'react';
import logo from '../utils/logo.jpeg'

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  handleScroll = () => {
    if(window.scrollY > 0) {
      setIsActive(true);
    }else {
      setIsActive(false);
    }
  }
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  });

  return(
    <div className={classnames("header", {
      "active": isActive
    })}>
      <div className="logo-container">
        <img className="logo" src={logo} />
        <h1>SKALOD</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href='#aboutus' onClick={() => scrollToSection('aboutus')}>About Us</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#trainings'>Trainings</a></li>
          <li><a href='#contactus'>Contact Us</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;