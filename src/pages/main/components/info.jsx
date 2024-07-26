import React from "react";
import styled from "styled-components";
import { Element as ScrollElement } from "react-scroll";
import { useSpring, animated } from "@react-spring/web";

const IntroductionSection = () => {
  const props = useSpring({
    from: { opacity: 0, transform: "translate3d(-50px, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: { duration: 500 },
  });

  return (
    <ScrollElement name="introduce">
      <Section>
        <SectionTitle>소개</SectionTitle>
        <AnimatedSection style={props}>
          <ProfilePhoto src="/asset/profile.jpeg" alt="Profile Photo" />
          <Content>
            <SectionContent>
              <InfoList>
                <InfoItem>
                  <InfoLabel>Email:</InfoLabel>
                  <InfoValue>
                    <Link href="mailto:jonghwasung@gmail.com">
                      jonghwasung@gmail.com
                    </Link>
                  </InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>전화번호:</InfoLabel>
                  <InfoValue>
                    <Link href="tel:010-2408-0329">010-2408-0329</Link>
                  </InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>학력사항:</InfoLabel>
                  <InfoValue>
                    <ul>
                      <li>계명대학교 컴퓨터공학과</li>
                      <li>16.03 ~ 22.08</li>
                    </ul>
                  </InfoValue>
                </InfoItem>
              </InfoList>
            </SectionContent>
          </Content>
        </AnimatedSection>
      </Section>
    </ScrollElement>
  );
};

export default IntroductionSection;

const Section = styled.div`
  padding: 20px 0;
  background: linear-gradient(135deg, #1e1e1e, #2e2e2e),
    url("/asset/background.png");
  background-size: cover;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

const AnimatedSection = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const ProfilePhoto = styled.img`
  width: 200px;
  height: auto;
  border-radius: 5px;
  margin-right: 40px;

  @media (max-width: 768px) {
    width: 150px;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #00adee;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionContent = styled.div`
  font-size: 1.2rem;
  color: #d4d4d4;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const InfoLabel = styled.span`
  font-weight: bold;
  color: #00adee;
  display: block;
  margin-bottom: 5px;
`;

const InfoValue = styled.span`
  color: #d4d4d4;
  display: block;
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Link = styled.a`
  color: #00adee;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
