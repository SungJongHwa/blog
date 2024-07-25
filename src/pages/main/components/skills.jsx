import React from "react";
import styled from "styled-components";
import { Link as ScrollLink, Element as ScrollElement } from "react-scroll";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Git",
  "Github",
  "GitLab",
  "Jquery",
  "HTML",
  "CSS",
  "Webpack",
  "Babel",
  "Slack",
  "Jira",
  "Confluence",
  "Styled-components",
  "Discord",
];

const SkillsSection = () => {
  const half = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, half);
  const secondHalf = skills.slice(half);

  return (
    <ScrollElement name="skills">
      <SkillsContainer>
        <SectionTitle>스킬</SectionTitle>
        <SkillsWrapper>
          <SkillsSlider>
            <SkillRow>
              {firstHalf.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
              {firstHalf.map((skill, index) => (
                <SkillItem key={index + firstHalf.length}>{skill}</SkillItem>
              ))}
            </SkillRow>
            <SkillRow>
              {secondHalf.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
              {secondHalf.map((skill, index) => (
                <SkillItem key={index + secondHalf.length}>{skill}</SkillItem>
              ))}
            </SkillRow>
          </SkillsSlider>
        </SkillsWrapper>
      </SkillsContainer>
    </ScrollElement>
  );
};

export default SkillsSection;

const SkillsContainer = styled.div`
  padding: 20px 20px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #1e1e1e, #2e2e2e);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #00adee;
`;

const SkillsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  overflow: hidden;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const SkillsSlider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const SkillRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  animation: ${({ reverse }) => (reverse ? "scroll-reverse" : "scroll")} 10s
    linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes scroll-reverse {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const SkillItem = styled.div`
  display: inline-block;
  margin: 20px 60px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.1);
    color: #00adee;
  }
`;
