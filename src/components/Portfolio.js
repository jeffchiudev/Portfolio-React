import React from 'react';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
  return ( 
    <React.Fragment>
      <h1>Portfolio section</h1>
      <PortfolioItem
        name="Test Portfolio Piece"/>
    </React.Fragment>
    
  );
}

export default Portfolio;