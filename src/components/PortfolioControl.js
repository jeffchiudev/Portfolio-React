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

  handleClick = () => {
    this.setState(prevState => ({
      visibleOnPage: !prevState.visibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.visibleOnPage) {
      currentlyVisibleState = <PortfolioItemDetails/>
      buttonText = "Return to Portfolio";
    } else {
      currentlyVisibleState = <Portfolio/>
      buttonText = "View portfolio item"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default PortfolioControl;