import React from "react";
import styled from "styled-components";
import { Element as ScrollElement } from "react-scroll";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "프로젝트 A",
    period: "2022.01 - 2022.06",
    description: "웹 애플리케이션 개발",
    skills: "React, TypeScript, Redux",
    contribution: "80%",
  },
  {
    title: "프로젝트 B",
    period: "2021.07 - 2021.12",
    description: "내부 관리 시스템 개발",
    skills: "Vue, Vuex, Vuetify",
    contribution: "60%",
  },
  {
    title: "프로젝트 C",
    period: "2021.01 - 2021.06",
    description: "모바일 앱 개발",
    skills: "Flutter, Dart",
    contribution: "70%",
  },
  {
    title: "프로젝트 D",
    period: "2020.07 - 2020.12",
    description: "데이터 분석 플랫폼 개발",
    skills: "Python, Pandas, Django",
    contribution: "90%",
  },
  {
    title: "프로젝트 E",
    period: "2020.01 - 2020.06",
    description: "e-커머스 사이트 개발",
    skills: "Magento, PHP, MySQL",
    contribution: "85%",
  },
];

const ProjectSection = () => {
  return (
    <ScrollElement name="project">
      <Section>
        <SectionTitle>프로젝트</SectionTitle>
        <SectionContent>
          {projects.map((project, index) => (
            <InViewProject key={index} project={project} />
          ))}
        </SectionContent>
      </Section>
    </ScrollElement>
  );
};

const InViewProject = ({ project }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    config: { duration: 500 },
  });

  return (
    <AnimatedProject ref={ref} style={props}>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDetails>
        <DetailItem>이름: {project.title}</DetailItem>
        <DetailItem>참여기간: {project.period}</DetailItem>
        <DetailItem>내용: {project.description}</DetailItem>
        <DetailItem>사용스킬: {project.skills}</DetailItem>
        <DetailItem>기여도: {project.contribution}</DetailItem>
      </ProjectDetails>
    </AnimatedProject>
  );
};

export default ProjectSection;

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

const Project = styled.div`
  margin-bottom: 40px;
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
  }

  &:hover::before {
    width: 300%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 300%;
    background: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.5s ease-in-out;
  }
`;

const AnimatedProject = styled(animated(Project))``;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  color: #00adee;
  margin-bottom: 10px;
`;

const ProjectDetails = styled.div`
  font-size: 1.2rem;
  color: #d4d4d4;
`;

const DetailItem = styled.p`
  margin: 5px 0;
`;
