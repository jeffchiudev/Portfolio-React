import React from 'react';

function Header() {
  return(
    <React.Fragment>
      <nav  style={{paddingLeft: '100px'}} className="navbar navbar-expand-lg bg-secondary navbar-light custom-navbar">
        <h1 className="navbar-brand nav-title">Jeff's Place</h1>
        <ul className="navbar-nav">
          <li className="nav-item">
            <h3>Home</h3>
          </li>
          <li className="nav-item">
            <h3>Portfolio</h3>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Header;