import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const ulStyle = {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
  };

  const linkStyle = {
    textDecoration: 'none',
    paddingLeft: '20px',
    fontSize: '14px',
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light p-4">
        <ul style={ulStyle}>
          <li style={{ fontSize: '24px' }}>Bookstore CMS</li>
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
