import React from "react";
import styled from "styled-components";
import { Element as ScrollElement } from "react-scroll";
import { useSpring, animated } from "@react-spring/web";

const career = [
  {
    company: "매크로그래프",
    position: "Frontend Developer",
    period: "2024.02 ~ ",
    details: "신규 서비스 개발 및 유지보수",
  },
  {
    company: "심플랫폼",
    position: "Frontend Developer",
    period: "2022.12 ~ 2024.01",
    details: "각종 프로젝트 수행, 서비스 개발 및 유지보수",
  },
];

const CareerSection = () => {
  return (
    <ScrollElement name="career">
      <Section>
        <SectionTitle>경력사항</SectionTitle>
        <SectionContent>
          {career.map((job, index) => (
            <AnimatedCareerItem key={index}>
              <CareerItem>
                <DetailItem>회사: {job.company}</DetailItem>
                <DetailItem>직위: {job.position}</DetailItem>
                <DetailItem>기간: {job.period}</DetailItem>
                <DetailItem>{job.details}</DetailItem>
              </CareerItem>
            </AnimatedCareerItem>
          ))}
        </SectionContent>
      </Section>
    </ScrollElement>
  );
};

const AnimatedCareerItem = ({ children }) => {
  const props = useSpring({
    from: { opacity: 0, transform: "translate3d(-50px, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: { duration: 500 },
  });

  return <animated.div style={props}>{children}</animated.div>;
};

export default CareerSection;

const Section = styled.div`
  padding: 5px 20px;
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;

  &:before {
    content: url("/asset/timeline-icon.png");
    position: absolute;
    left: -40px;
    top: -10px;
  }
`;
const SectionContent = styled.div`
  font-size: 1.2rem;
  color: #d4d4d4;
`;

const CareerItem = styled.div`
  margin-bottom: 20px;
  background: #2e2e2e;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    background: #383838;
  }
`;

const DetailItem = styled.p`
  margin: 5px 0;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #00adee;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
