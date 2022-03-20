import React from 'react';
import './Header.css'

const Header = ({image}) => {
  return (
    <header className='header'>
      <div className="header__contant _container">
        <img className='headerDiv div_1' src={image} alt="image1" />
        <div className='headerDiv div_2'></div>
        <div className='headerDiv div_3'></div>
      </div>
    </header>
  );
};

export default Header;