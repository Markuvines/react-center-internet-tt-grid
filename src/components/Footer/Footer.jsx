import React from 'react';
import './Footer.css'

const Footer = ({image}) => {
  return (
    <footer className='footer'>
      <div className='footer__contant _container'>
        <div className='footer__div10'></div>
        <div className='footer__div11'></div>
        <div className='footer__div12_13'>
          <div className='footer__div12'></div>
          <img className='footer__div13' src={image} alt="image13" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;