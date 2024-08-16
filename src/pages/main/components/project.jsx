import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Element as ScrollElement } from "react-scroll";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import dayjs from "dayjs";

const projects = [
  {
    title: "프로젝트 A",
    period: "2022.01 - 2022.06",
    description: "웹 애플리케이션 개발",
    skills: "React, TypeScript, Redux",
    contribution: "80%",
  },
  // 다른 프로젝트들...
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
        <AnniversarySection />
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

const AnniversarySection = () => {
  const [startDate, setStartDate] = useState("2022-04-19"); // 사귄 시작일
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const calculateAnniversaries = () => {
      const start = dayjs(startDate);
      const today = dayjs();
      const maxDays = 3000;
      const anniversaries = [];

      for (let i = 100; i <= maxDays; i += 100) {
        const anniversaryDate = start.add(i, "day");
        const isPast = anniversaryDate.isBefore(today);
        anniversaries.push({
          days: i,
          date: anniversaryDate.format("YYYY-MM-DD"),
          isPast: isPast,
        });
      }

      setHistory(anniversaries);
    };

    calculateAnniversaries();
  }, [startDate]);

  return (
    <AnniversaryContainer>
      <AnniversaryTitle>기념일 히스토리</AnniversaryTitle>
      <AnniversaryInputContainer>
        <label htmlFor="startDate">사귄 시작일: </label>
        <AnniversaryInput
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </AnniversaryInputContainer>
      <AnniversaryDetails>
        {history.map((anniversary, index) => (
          <AnniversaryCard key={index} isPast={anniversary.isPast}>
            <CardContent>
              <CardTitle>{anniversary.days}일</CardTitle>
              <CardDate>{anniversary.date}</CardDate>
            </CardContent>
          </AnniversaryCard>
        ))}
      </AnniversaryDetails>
    </AnniversaryContainer>
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
  color: ${(props) => (props.isPast ? "#d4d4d4" : "#00adee")};
`;

const AnniversaryContainer = styled.div`
  margin-top: 40px;
  padding: 20px;
  background: #2e2e2e;
  border-radius: 10px;
  color: #d4d4d4;
`;

const AnniversaryTitle = styled.h3`
  font-size: 2rem;
  color: #00adee;
  margin-bottom: 20px;
`;

const AnniversaryInputContainer = styled.div`
  margin-bottom: 20px;
`;

const AnniversaryInput = styled.input`
  padding: 5px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #00adee;
  background: #1e1e1e;
  color: #d4d4d4;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  &:focus {
    border-color: #00bfff;
    outline: none;
    box-shadow: 0 0 5px #00bfff;
  }

  &::placeholder {
    color: #888;
  }
`;

const AnniversaryDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const AnniversaryCard = styled.div`
  background: ${(props) => (props.isPast ? "#1e1e1e" : "#00adee")};
  color: ${(props) => (props.isPast ? "#d4d4d4" : "#ffffff")};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 200px;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CardDate = styled.p`
  font-size: 1.2rem;
  color: ${(props) => (props.isPast ? "#d4d4d4" : "#ffffff")};
`;
