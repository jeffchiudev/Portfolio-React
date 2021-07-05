import React from "react";
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Intro from './Intro';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Intro/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
    </React.Fragment>
  );
}

export default App;
