import React from 'react';
import {Jumbotron} from 'react-bootstrap';

function Header() {
  return(
    <React.Fragment>
      <Jumbotron>
        <h1> Welcome to Jeff's Profile Page</h1>
        <p>This is a test jumbotron message</p> 
      </Jumbotron>
    </React.Fragment>
  );
}

export default Header;