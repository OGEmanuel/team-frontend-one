import React, { useState, useRef } from 'react';
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { FaSearch } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState([]);
  const inputRef = useRef();

  const onSubmit = e => {
    e.preventDefault();

    const value = inputRef.current.value;
    if (value === '') return;
  };

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className={click ? 'nav-menu active' : 'nav-menu'}>
            <form onSubmit={onSubmit}>
              <div className="search">
                <input
                  type="text"
                  className="search-box"
                  placeholder="search product"
                />
                <button className="search-btn" type="submit">
                  <FaSearch />
                </button>
              </div>
            </form>
            <div className="nav-item">
              <NavLink to="" className="nav-links">
                <BsCart3 size="20px" />
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="" className="nav-links">
                <Dropdown icon={<FaUserAlt />} className="dropStyle">
                  <Dropdown.Item className="dropItem">
                    <Link>Sign In</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropItem">
                    <Link>Login</Link>
                  </Dropdown.Item>
                </Dropdown>
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
