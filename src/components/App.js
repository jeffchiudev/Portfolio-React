import React from "react";
import Header from './Header';
import AboutMe from './AboutMe';
import PortfolioControl from './PortfolioControl';
import Contact from './Contact';
import Intro from './Intro';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Intro/>
      <AboutMe/>
      <PortfolioControl/>
      <Contact/>
    </React.Fragment>
  );
}

export default App;
