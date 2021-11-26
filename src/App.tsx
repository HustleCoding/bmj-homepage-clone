import React from "react";
import Header from "./components/Header/Header";
import GlobalStyles from "./components/Global/Global";
import NavBar from "./components/Nav-Bar/Nav-Bar";
import { BigContainer } from "./components/BigContainer/BigContainer";
import { LatestArticles } from "./components/LatestArticles/LatestArticles";
import { Podcast } from "./components/PodcastContainer/Podcast";
import { Pressures } from "./components/PressuresContainer/Pressures";
import { CurrentIssue } from "./components/CurrentIssueContainer/CurrentIssue";

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
    <LatestArticles />
    <Podcast />
    <Pressures />
    <CurrentIssue />
  </>
);

export default App;
