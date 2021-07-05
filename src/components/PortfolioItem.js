import React from 'react';

function PortfolioItem(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
    </React.Fragment>
  );
}

export default PortfolioItem;