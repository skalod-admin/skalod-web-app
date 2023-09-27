import logo from '../utils/logo.jpeg'

const Header = () => {

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return(
    <div className="header">
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