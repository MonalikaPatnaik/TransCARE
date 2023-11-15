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
} from "./NavbarElements";
import { Link } from "react-router-dom";
import Dropdown from 'rsuite/Dropdown'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../../images/logo.png";
import styled from "styled-components";

const Button = styled.button`
padding: 12px 24px;
font-size: 18px;
background: linear-gradient(114.9deg, rgb(14 16 39) 8.3%, rgb(16 122 175) 41.6%, rgb(4 70 102) 93.4%);
color: #F5F0F0;
border: none;
border-radius: 14px;
cursor: pointer;

&:hover {
  background: rgb(16 122 175);
}
`;
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { loginWithRedirect, isAuthenticated,logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
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
          backgroundColor: scrollPosition > 0 ? "#FAE4CD" : "#FAE4CD",
        }}
      >
        <NavbarContainer>
          <NavImg>
            <Link to="/" onClick={handleLogoClick}>
              <img src={logo} height={54} alt="Logo" />
            </Link>
            <NavLogo>
               TansCare
              <SubLogo>Care like Parent</SubLogo>
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
              <NavLinks to="#" onClick={handleLogoClick}>
               About
              </NavLinks>
            </Navitem>

            <Navitem className="custom">
              <NavLinks to="#" onClick={handleLogoClick}>
                Features
              </NavLinks>
            </Navitem>
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
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;