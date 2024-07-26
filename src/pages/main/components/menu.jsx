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
  width: 80%;
  border-radius: 5px;
  background: rgba(34, 34, 34, 0.85);
  padding: 15px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  transition: background 0.3s ease-in-out, padding 0.3s ease-in-out;

  &:hover {
    background: rgba(34, 34, 34, 0.95);
    padding: 20px 0;
  }

  @media (max-width: 768px) {
    padding: 10px 0;

    &:hover {
      padding: 15px 0;
    }
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 8px 0;

    &:hover {
      padding: 12px 0;
    }
  }
`;

const StyledScrollLink = styled(ScrollLink)`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease;
  position: relative;
  padding: 10px;
  text-decoration: none;

  &:hover {
    color: #00adee;
    transform: translateY(-3px);
    text-shadow: 0 4px 12px rgba(0, 173, 238, 0.6);
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

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px;
    letter-spacing: 1.5px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 6px;
    letter-spacing: 1px;
  }
`;
