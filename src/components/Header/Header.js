import React from 'react';
import './Header.scss';

import { cart, avatar, siteLogo } from '../../assets';

const Header = ({ setOpen, reference, open, totalItems }) => {
  return (
    <header>
      <div>
        <img src={siteLogo} alt="site logo" />
      </div>
      <nav>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div>
        <div className="cart" onClick={() => setOpen(!open)} ref={reference}>
          <span>{totalItems ? totalItems : ''}</span>
          <img src={cart} alt="cart icon" />
        </div>
        <div className="avatar">
          <img src={avatar} alt="profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
