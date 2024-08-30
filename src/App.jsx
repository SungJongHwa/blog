import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import "./style/common.css";

import { useSpring, animated } from "react-spring";

import ScrollTop from "./pages/component/ScrollTop";
import MainPage from "./pages/main/page";
import Date from "./pages/main/components/date";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/date" element={<Date />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>

      <ScrollTop />
    </React.Fragment>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  position: relative;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const AnimatedText = styled(animated.div)`
  color: #ffffff;
  font-size: 4rem;
  position: absolute;
`;

const FadeText = ({ children, delay = 0 }) => {
  const props = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: async (next) => {
      await next({ opacity: 1, transform: "scale(1.5)" });
      await next({ opacity: 0, transform: "scale(1.5)" });
    },
    config: { duration: 1000 },
    delay: delay,
    reset: true,
  });

  return <AnimatedText style={props}>{children}</AnimatedText>;
};
