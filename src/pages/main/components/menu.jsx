import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const ScrollLinkContainer = () => {
  return (
    <Container>
      <StyledScrollLink to="introduce" smooth={true} duration={1000}>
        소개
      </StyledScrollLink>
      <StyledScrollLink to="career" smooth={true} duration={1000}>
        경력사항
      </StyledScrollLink>
      <StyledScrollLink to="skills" smooth={true} duration={1000}>
        스킬
      </StyledScrollLink>
      <StyledScrollLink to="project" smooth={true} duration={1000}>
        프로젝트
      </StyledScrollLink>
    </Container>
  );
};

export default ScrollLinkContainer;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: rgba(34, 34, 34, 0.8);
  padding: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(34, 34, 34, 1);
  }
`;

const StyledScrollLink = styled(ScrollLink)`
  color: #ffffff;
  font-size: 1.5rem; /* Increased font size */
  font-weight: 600; /* Bold text */
  text-transform: uppercase;
  letter-spacing: 3px; /* Increased letter spacing */
  transition: color 0.3s, transform 0.3s, text-shadow 0.3s; /* Added text-shadow transition */
  position: relative; /* For the underline effect */

  &:hover {
    color: #00adee;
    transform: scale(1.1);
    text-shadow: 0 0 10px rgba(0, 173, 238, 0.7); /* Added glow effect */
  }

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #00adee;
    transition: width 0.3s ease, background-color 0.3s ease;
  }

  &:hover:after {
    width: 100%;
    left: 0;
    background: #00adee;
  }
`;
