import React from 'react';
import Navbar from '../Components/LandingPage/Navbar';
import AboutSection from '../Components/LandingPage/AboutUs/AboutUs.js';
import HeroSection from '../Components/LandingPage/HeroSection';
import ServicesSection from '../Components/LandingPage/ServicesSection';
import ContributorsSection from '../Components/LandingPage/ContributorsSection';
import Footer from '../Components/LandingPage/Footer';


const Home = () => {
  return (
    <>
        <Navbar/> 
        <HeroSection />
        <AboutSection/>
        <ServicesSection />
        <ContributorsSection />
        <Footer />
    </>
  )
}

export default Home;
