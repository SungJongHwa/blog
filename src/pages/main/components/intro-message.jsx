import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const IntroSection = () => {
  return (
    <IntroContainer>
      <FadeText>안녕하세요!</FadeText>
      <FadeText delay={2000}>성종화입니다.</FadeText>
    </IntroContainer>
  );
};

export default IntroSection;

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  position: relative;
`;

const AnimatedText = styled(animated.div)`
  color: #ffffff;
  font-size: 4rem;
  position: absolute;
  font-family: "Arial", sans-serif;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

const FadeText = ({ children, delay = 0 }) => {
  const props = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: async (next) => {
      await next({ opacity: 1, transform: "scale(1.5)" });
      await next({ opacity: 0, transform: "scale(1.5)" });
    },
    config: { duration: 1000 },
    delay,
    reset: true,
  });

  return <AnimatedText style={props}>{children}</AnimatedText>;
};
