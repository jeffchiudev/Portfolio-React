import React from 'react';
import PropTypes from 'prop-types';

function PortfolioItem(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <a href={props.link}>Link to GitHub Page</a>
    </React.Fragment>
  );
}

PortfolioItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};

export default PortfolioItem;