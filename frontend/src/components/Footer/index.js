import React from 'react';
import './Footer.css';

const Footer = () => {
  const links = {
    linkedIn: 'https://www.linkedin.com/in/barrymattern/',
    angelList: 'https://angel.co/u/barry-mattern',
    gitHub: 'https://github.com/barrymattern',
    email: 'mailto:bdmattern@gmail.com',
  };

  return (
    <div className='footer__container'>
      <ul className='social__links'>
        <li
          className='link'
          onClick={() => window.open(links.linkedIn, '_blank')}  
        >LinkedIn</li>
        <li className='separator'>|</li>
        <li
          className='link'
          onClick={() => window.open(links.angelList, '_blank')}  
        >AngelList</li>
        <li className='separator'>|</li>
        <li
          className='link'
          onClick={() => window.open(links.gitHub, '_blank')}  
        >Github</li>
        <li className='separator'>|</li>
        <li
          className='link'
          onClick={() => window.open(links.email, '_blank')}  
        >Email</li>
      </ul>
    </div>
  );
};

export default Footer;
