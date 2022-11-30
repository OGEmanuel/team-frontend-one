import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { FaSearch } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className={click ? 'nav-menu active' : 'nav-menu'}>
            <div className="search">
              <input
                type="text"
                className="search-box"
                placeholder="search product"
              />
              <button className="search-btn">
                <FaSearch />
              </button>
            </div>
            <div className="nav-item">
              <NavLink to="" className="nav-links">
                <BsCart3 size="20px" />
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="" className="nav-links">
                <FaUserAlt size="20px" />
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="" className="nav-links">
                Contact Us
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="" className="nav-links">
                FAQ
              </NavLink>
            </div>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
