import React from 'react';
import PortfolioItem from './PortfolioItem';

const testPortfolioItems = [
  {
    name: "Bartender's Guide To The Galaxy"
  },
  {
    name: "S.N.I.F.F: All's Fur in Love & War"
  },
  {
    name: "Oubliette's & Dragonnes"
  },

]

function Portfolio() {
  return ( 
    <React.Fragment>
      <h1>Portfolio section</h1>
      {testPortfolioItems.map((item, index) => 
        <PortfolioItem
          name={item.name}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default Portfolio;