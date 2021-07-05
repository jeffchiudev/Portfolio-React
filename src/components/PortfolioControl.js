import React from 'react';
import PortfolioItemDetails from './PortfolioItemDetails';
import Portfolio from './Portfolio';

class PortfolioControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleOnPage: false
    };
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.visibleOnPage) {
      currentlyVisibleState = <PortfolioItemDetails/>
    } else {
      currentlyVisibleState = <Portfolio/>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default PortfolioControl;