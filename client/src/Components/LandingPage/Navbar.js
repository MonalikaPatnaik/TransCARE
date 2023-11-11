import { useState } from 'react'
import styles from './Navbar.module.css';
import logo from "../../images/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Dropdown from 'rsuite/Dropdown'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {


  // adding the states 
  const [isActive, setIsActive] = useState(false);
  const { loginWithRedirect, isAuthenticated,logout } = useAuth0();
  const dropdownTitleStyle = {
    color: '#fff',
    fontSize: '18px',
  };
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const Button = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  background: linear-gradient(114.9deg, rgb(14 16 39) 8.3%, rgb(16 122 175) 41.6%, rgb(4 70 102) 93.4%);
  color: #F5F0F0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: rgb(16 122 175);
  }
`;
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      removeActive();
    }
  };

  return (
    <div className="App">
      <header className="App-header">


        <nav className={`${styles.navbar}`}>


          {/* logo */}
          
          <a href='/' className={`${styles.logo}`}>
          <img className={styles.navimg} src={logo}></img>
            </a>


          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='/' className={`${styles.navLink}`}>Home</a>
            </li>
            <li onClick={() => scrollToSection('aboutSection')}>
              <a href='#' className={`${styles.navLink}`}>About</a>
            </li>
            <li onClick={() => scrollToSection('featureSection')}>
              <a href='#' className={`${styles.navLink}`}>Features</a>
            </li>
            <li onClick={removeActive}>
              <a href='/contact' className={`${styles.navLink}`}>Contact</a>
            </li>
            {isAuthenticated ? (
               <li>
   <Dropdown title="My Profile" icon={<FontAwesomeIcon icon={faUser} style={{ color: '#fff' }}  />} appearance="default" style={dropdownTitleStyle}>
    <Dropdown.Item onClick={removeActive}><a href='/profile'> User profile</a>
     
    </Dropdown.Item>
    <Dropdown.Item>
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
     Log Out
   </button>
    </Dropdown.Item>
   </Dropdown>
             </li>
              ):(
            <li>
              <Button onClick={() => loginWithRedirect()}>
              Register</Button>
            </li>
           
             
            )}
            <li id="language-menu" >
                <div className='language-setting'>
                    <div id="google_translate_element"></div>
        </div></li>
          </ul>


          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>


      </header>
    </div>
  );
}


export default Navbar;
