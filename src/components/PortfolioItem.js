import React from 'react';
import PropTypes from 'prop-types';

function PortfolioItem(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
    </React.Fragment>
  );
}

PortfolioItem.propTypes = {
  name: PropTypes.string,
};

export default PortfolioItem;