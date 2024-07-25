import React from "react";
import styled from "styled-components";
import { Element as ScrollElement } from "react-scroll";

const IntroductionSection = () => {
  return (
    <ScrollElement name="introduce">
      <Section>
        <SectionTitle>소개</SectionTitle>
        <SectionContent>안녕하세요, 저는 성종화입니다.</SectionContent>
      </Section>
    </ScrollElement>
  );
};

export default IntroductionSection;

const Section = styled.div`
  padding: 20px 20px;
  text-align: center;
  background: linear-gradient(135deg, #1e1e1e, #2e2e2e);
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #00adee;
`;

const SectionContent = styled.div`
  font-size: 1.2rem;
  color: #d4d4d4;
`;

const ProfilePhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;
