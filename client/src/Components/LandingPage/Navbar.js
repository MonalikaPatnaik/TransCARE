import { useState } from 'react'
import styles from './Navbar.module.css';
import logo from "../../images/logo.png";

function Navbar() {


  // adding the states 
  const [isActive, setIsActive] = useState(false);


  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };


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
            <li onClick={removeActive}>
              <a href='/signin' className={`${styles.navLink}`}>Register</a>
            </li>
            <li id="language-menu" >
                <div class='language-setting'>
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
