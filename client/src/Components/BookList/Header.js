import React from 'react';
import Navbar from '../LandingPage/Navbar';
import SearchForm from './SearchForm';
import './BookList.css';

const Header = () => {
  return (
    <div className='holder'>
      <Navbar />
      <header className='header'>
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>Find Your Book Of Choice.</h2><br />
          <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
