import React from 'react';
import { BsFacebook, BsLinkedin, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import './header.css';

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        {/* <BsSearch className='icon' /> */}
        <h1>Karachi Relief Trust</h1>
      </div>
      <div className='header-center'>

      <BsSearch className='icon' />

        {/* <h1>Karachi Relief Trust</h1> */}
      </div>
      <div className='header-right'>
        <BsFacebook className='icon spaced-icon' />
        <BsLinkedin className='icon spaced-icon' />
        <BsPersonCircle className='icon spaced-icon' />
      </div>
    </header>
  );
}

export default Header;
