import React from "react";
import "./index.scss";
import Layout from "components/layout/layout";
import MainComponent from "components/main/main";
import AboutComponent from "components/about/about";
import SkillsComponent from "components/skills/skills";
import PortfolioComponent from "components/portfolio/portfolio";
import ContactComponent from "components/contact/contact";

import { useStore } from "store";
import { Views } from "enums";

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
