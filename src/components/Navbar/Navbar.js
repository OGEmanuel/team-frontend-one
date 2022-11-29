import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import Logo from '../../assests/logo.png';
import { FaSearch } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className={classes.navbar}>
          <div className={classes.Logo}>
            <img src={Logo} alt="logo" />
          </div>
          <div className={classes['search']}>
            <input
              type="text"
              className={classes['search-box']}
              placeholder="search product"
            />
            <button className={classes['search-btn']}>
              <FaSearch />
            </button>
          </div>
          <div className={classes['nav-items']}>
            <div className={classes['nav-icons']}>
              <NavLink to="" className={classes.contactUs}>
                Contact Us
              </NavLink>
              <NavLink to="" className={classes.faq}>
                FAQ
              </NavLink>

              <NavLink to="">
                <BsCart3 size="20px" />
              </NavLink>
              <NavLink to="">
                <FaUserAlt size="20px" />
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
