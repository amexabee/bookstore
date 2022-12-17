import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const ulStyle = {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
  };

  const bookstoreStyle = {
    fontSize: '1.875rem',
    fontWeight: 700,
    color: '#0290ff',
  };

  const linkStyle = {
    textDecoration: 'none',
    paddingLeft: '50px',
    color: '#121212',
    opacity: 0.5,
    fontFamily: 'sans-serif',
    fontSize: '0.813rem',
    letterSpacing: '1.9px',
  };

  return (
    <>
      <nav className="navbar navbar-light border-bottom bg-white p-4">
        <ul style={ulStyle}>
          <li style={bookstoreStyle}>Bookstore CMS</li>
          <li>
            <Link style={linkStyle} to="/">
              BOOKS
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="catagories">
              CATAGORIES
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
