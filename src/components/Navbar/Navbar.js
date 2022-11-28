import React from 'react';
import './Navbar.module.css';
import Logo from '../../assests/logo.png';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="Logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-items">
          <div className="search">
            <input
              type="text"
              className="search-box"
              placeholder="search product"
            />
            <button className="search-btn">search</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
