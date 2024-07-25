import React, { useState, useEffect } from "react";
import styled from "styled-components";

import IntroSection from "./components/intro-message";
import CanvasSection from "./components/canvas";

import SkillsSection from "./components/skills";
import CareerSection from "./components/career";
import ProjectSection from "./components/project";
import IntroductionSection from "./components/info";
import ScrollLinkContainer from "./components/menu";

const MainPage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowIntro(false), 3500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      {showIntro ? (
        <IntroSection />
      ) : (
        <>
          {!showMainContent ? (
            <CanvasSection setShowMainContent={setShowMainContent} />
          ) : (
            <MainContainer>
              <ScrollLinkContainer />

              <Sections>
                <IntroductionSection />
                <CareerSection />
                <SkillsSection />
                <ProjectSection />
              </Sections>
            </MainContainer>
          )}
        </>
      )}
    </>
  );
};

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  // background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: white;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  min-height: 100vh;
`;

const Sections = styled.div`
  width: 100%;
  transition: all 0.3s ease-in-out;
`;
