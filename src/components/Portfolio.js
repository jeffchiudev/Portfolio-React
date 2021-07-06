import React from 'react';
import PortfolioItem from './PortfolioItem';

const testPortfolioItems = [
  {
    name: "Bartender's Guide To The Galaxy",
    link: "https://github.com/jeffchiudev/bartenders-guide-to-the-galaxy"
  },
  {
    name: "S.N.I.F.F: All's Fur in Love & War",
    link: "https://github.com/jeffchiudev/PuppyLove.Solution"
  },
  {
    name: "Oubliette's & Dragonnes",
    link: "https://github.com/jeffchiudev/capstone-project"
  },

]

function Portfolio() {
  return ( 
    <React.Fragment>
      <h1>Portfolio section</h1>
      {testPortfolioItems.map((item, index) => 
        <PortfolioItem
          name={item.name}
          link={item.link}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default Portfolio;