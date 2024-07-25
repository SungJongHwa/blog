import React from "react";
import styled from "styled-components";
import { Element as ScrollElement } from "react-scroll";

const career = [
  {
    company: "매크로그래프",
    position: "Frontend Developer",
    period: "2024.02 ~ ",
    details:
      "Assisted in the development of web applications and provided support for existing systems.",
  },
  ,
  {
    company: "심플랫폼",
    position: "Frontend Developer",
    period: "2022.12 ~ 2024.01",
    details:
      "Developing and maintaining the user interface of web applications.",
  },
];

const CareerSection = () => {
  return (
    <ScrollElement name="career">
      <Section>
        <SectionTitle>경력사항</SectionTitle>
        <SectionContent>
          {career.map((job, index) => (
            <CareerItem key={index}>
              <DetailItem>회사: {job.company}</DetailItem>
              <DetailItem>직위: {job.position}</DetailItem>
              <DetailItem>기간: {job.period}</DetailItem>
              <DetailItem>내용: {job.details}</DetailItem>
            </CareerItem>
          ))}
        </SectionContent>
      </Section>
    </ScrollElement>
  );
};

export default CareerSection;

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

const CareerItem = styled.div`
  margin-bottom: 20px;
  background: #2e2e2e;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const DetailItem = styled.p`
  margin: 5px 0;
`;
