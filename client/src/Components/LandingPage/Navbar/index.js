import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the close icon as well
import {
  Nav,
  NavbarContainer,
  NavImg,
  NavMenu,
  Navitem,
  NavLinks,
  MobileIcon,
  NavLogo,
  SubLogo,
  Dropdown,
  Dropdowncontent,ButtonDropdown,
} from "./NavbarElements";
import { Link } from "react-router-dom";
// import Dropdown from 'rsuite/Dropdown'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../../images/logo.png";
import styled from "styled-components";

const Button = styled.button`
padding: 12px 24px;
font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 22px;
background: #FDA5A4;
color: #000;
border: none;
border-radius: 14px;
cursor: pointer;

&:hover {
  background: #2B394A;
  color:#fff;
  text-decoration:underline;
}
`;
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { loginWithRedirect, isAuthenticated,logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [scrollPosition, setScrollPosition] = useState(0);

  const dropdownTitleStyle = {
    color: '#fff',
    fontSize: '18px',
  };
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };


  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };
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
    <>
      <Nav
        style={{
          background: "#2B394A",
        }}
      >
        <NavbarContainer>
        {/* <NavImg>
      <Link to="/" onClick={handleLogoClick}>
        <img src={logo} height={56} alt="Logo" />
        <NavLogo>
          TransCARE
          <SubLogo>YOUR JOURNEY. OUR PRIORITY</SubLogo>
        </NavLogo>
      </Link>
    </NavImg> */}
    <NavImg>
              <img src={logo}
                alt="favicon"
                width="56"
                height="60"
              />
              <NavLogo to="/"  onClick={handleLogoClick}> TransCARE
              <SubLogo>Your Journey, Our Priority</SubLogo>
              </NavLogo>
              
            </NavImg>

          <MobileIcon onClick={toggle}>
            {isOpen ? <FaTimes /> : <FaBars />} {/* Close icon when open */}
          </MobileIcon>
          <NavMenu isOpen={isOpen}>
            <Navitem>
              <NavLinks to="/" onClick={handleLogoClick}>
                Home
              </NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks onClick={()=> scrollToSection('about')}>
               About
              </NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="/contact" onClick={handleLogoClick}>
               Contact
              </NavLinks>
            </Navitem>

            <Navitem className="custom">
              <NavLinks onClick={()=> scrollToSection('featureSection')}>
                Features
              </NavLinks>
            </Navitem>
            {isAuthenticated ? (
               <li>
   <Dropdown>
   <FontAwesomeIcon icon={faUser} style={{ color: '#fff' }}/>
    <ButtonDropdown onClick={toggleDropdown}>Account
    <FontAwesomeIcon icon={faCaretDown}  style={{ color: '#fff' }} />
    </ButtonDropdown>
    {isOpen && (
    <Dropdowncontent>
      <a href="/profile">User Profile</a>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}style={{
        fontSize:'16px', fontWeight: '600'
      }}>
     Log Out
   </button>
    </Dropdowncontent>
    )}
  </Dropdown>

             </li>
              ):(
            <li>
              <Button onClick={() => loginWithRedirect()}>
              Register</Button>
            </li>
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;