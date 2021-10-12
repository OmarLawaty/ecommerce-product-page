import React, { useEffect, useState } from 'react';

import './Header.scss';
import { cart, avatar, siteLogo } from '../../assets';
import { noSlider } from '../../utils/helpers';

const Header = ({ setOpen, reference, open, totalItems }) => {
  const [navToggeled, setNavToggeled] = useState(false);

  useEffect(() => {
    noSlider(navToggeled);
  }, [navToggeled]);

  const invertNav = () => setNavToggeled(!navToggeled);

  return (
    <header className={navToggeled ? 'opened' : ''}>
      <div className="dimmer" onClick={() => invertNav()}></div>

      <div className="left-side">
        <div className="humburger" onClick={() => invertNav()}>
          <hr />
          <hr />
          <hr />
        </div>

        <div className="logo">
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
      </div>

      <div className="right-side">
        <div className="cart" onClick={() => setOpen(!open)} ref={reference}>
          <span>{totalItems ? totalItems : ''}</span>

          <img src={cart} alt="cart icon" className={open ? 'opened' : ''} />
        </div>

        <div className="avatar">
          <img src={avatar} alt="profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
