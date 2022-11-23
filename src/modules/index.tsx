import React from "react";
import "./index.scss";
import Layout from "../components/layout/layout";
import MainComponent from "./home/home";
import AboutComponent from "./about/about";
import SkillsComponent from "./skills/skills";
import PortfolioComponent from "./portfolio/portfolio";
import ContactComponent from "../components/contact/contact";

import { useStore } from "../store";
import { Views } from "../enums";

function Home(): JSX.Element {
  const [state] = useStore();
  const { layout } = state || {};

  const { Home, About, Skills, Portfolio, Contact } = Views;
  return (
    <Layout>
      <>
        {layout.activeView === Home && <MainComponent />}
        {layout.activeView === About && <AboutComponent />}
        {layout.activeView === Skills && <SkillsComponent />}
        {layout.activeView === Portfolio && <PortfolioComponent />}
        {layout.activeView === Contact && <ContactComponent />}
      </>
    </Layout>
  );
}

export default Home;
