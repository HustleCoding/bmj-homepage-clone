import React from "react";
import Header from "./components/Header/Header";
import GlobalStyles from "./components/Global/Global";
import NavBar from "./components/Nav-Bar/Nav-Bar";
import { BigContainer } from "./components/BigContainer/BigContainer";

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Header />
    <NavBar
      btnOne="Research"
      btnTwo="Education"
      btnThree="News & Views"
      btnFour="Campaigns"
      btnFive="Jobs"
    />
    <BigContainer />
  </>
);

export default App;
