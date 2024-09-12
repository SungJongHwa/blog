import React, { useState } from "react";
import styled from "styled-components";
import { Element as ScrollElement } from "react-scroll";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "ERP 프로그램 개발",
    content: "학부과정 프로젝트로 회사의 ERP 프로그램을 만드는 프로젝트",
    period: "2022.4 ~ 2022.06",
    description: `C# WPF을 이용하여 ERP 프로그램을 조별과제로 수행함\n시연 동영상 - https://www.youtube.com/watch?v=6XCTlB9zZMU`,
    skills: "C# WPF, Mysql",
  },
  {
    title: "클라이언트 인증키 목록",
    content:
      "내부 과제로 자체 플랫폼 인증키 목록 페이지 구현 서버에서 발급된 인증키 관리",
    period: "2022.12 ~ 2023.01",
    description:
      "Vue를 처음 사용하게 되어 신입사원 적응단계 과제로 단순 REST API 호출 및 반복문으로 카드에 데이터 바인딩",
    skills: "HTML, CSS, Jasvascript, Vue, Jquery",
    contribution: "100%",
  },
  {
    title: "대퇴의지 사용성 평가 시스템 구축",
    content:
      "실험자가 걷는동안 쌓인 데이터와 촬영한 영상이 있고 영상 재생 시 차트에서 데이터가 흘러가는 것 처럼 나오도록 구현",
    period: "2023.1 ~ 2023.04",
    description:
      "CanvasJs, AG-Grid 사용하여 선형 차트 구현\n실시간으로 차트를 업데이트를 하게되면서 이전의 불필요한 차트, 데이터가 쌓여 생긴 메모리누수 해결\n실험영상은 AWS S3 bucket에 저장\n카카오 API사용 지도 구현\n주요 기능에 대한 테스트 정의서 작성, 테스트 결과 분석 및 버그 수정\n",
    skills: "HTML, CSS, Jasvascript, Vue, Jquery",
    contribution: "100%",
  },
  {
    title: "심플랫폼 홈페이지 게시판",
    content: "심플랫폼 홈페이지 게시판을 구현(https://www.simplatform.com)",
    period: "2023.4 ~ 2023.05",
    description:
      "REST API를 사용하여 기본적인 게시글 등록,삭제,수정 구현\n검색, 페이지네이션, 파일 업로드 등 게시판에 필요한 기능들 추가 구현\n",
    skills: "HTML, CSS, Jasvascript, Vue, Jquery",
    contribution: "100%",
  },
  {
    title: "스마트 안전 건설",
    content:
      "SK에코플랜트의 건설 현장에서 날씨, 장비착용 여부, 도면등록, 실시간 CCTV 등을 이용하여 건설안전을 위한 프로젝트",
    period: "2023.7 ~ 2023.10",
    description:
      "주간 날씨, 장비착용 여부, 최근 7일간 근로자들의 웰니스 막대차트 등을 나타내는 대시보드 구현\n근로자들의 장비착용 여부를 특정권한(ex 팀장)을 가진 사람이 등록,수정,삭제하는 페이지 구현\n현장 위치별 도면(사진)을 등록하여 현장 정보 제공하는 페이지 구현\n차트를 사용하여 주간 데이터가 보이도록 구현\n",
    skills: "HTML, CSS, Jasvascript, Vue, Jquery",
    contribution: "40%",
  },

  {
    title: "AN R&D Tech Platform 고도화 S/W 개발",
    content: "CJ Feed&Care 공정의 데이터를 보여주는 프로젝트",
    period: "2023.10 ~ 2023.11",
    description:
      "CJ Feed&Care 여러 수정 및 추가 요구사항 반영\n곡물의 종류별, 날짜별 데이터가 보이도록 차트 구현\ni18n을 사용 영어, 베트남, 인도네시아 다국어 추가",
    skills: "HTML, CSS, Jasvascript, Vue, Jquery",
    contribution: "40%",
  },
  {
    title: "국가대표 AI 코칭 솔루션",
    content:
      "파리 올림픽 배드민턴 경기를 분석하여 영상, 데이터를 보여주는 프로젝트",
    period: "2023.11 ~ 2024.1",
    description:
      "기술 스택 검토 및 선정(React 도입)\n환경설정, 퍼블리싱 적용 등 프로젝트 생성부터 개발 초기세팅",
    skills: "HTML, CSS, Jasvascript, React, Next.js",
    contribution: "25%",
  },
  {
    title: "매크로그래프 홈페이지 개발 및 유지보수",
    content:
      "매크로 그래프 회사 홈페이지(http://www.macrograph.co.kr) 개발 및 유지보수",
    period: "2024.04 ~ 진행중",
    description: `홈페이지 운영 및 유지보수`,
    skills: "HTML, CSS, Jquery",
  },
  {
    title: "M2M 및 M2M Admin 개발 및 유지보수",
    content:
      "22년 9월 설립된 스타트업으로 GPU 기반 고성능 서버를 사용해 아티스트가 VFX, Postproduction를 원격으로 접속하여 사용할 수 있는 서비스 개발",
    period: "2024.02 ~ 진행중",
    description: `현재 회사 내 Front-end 1인(본인), Back-end 1인 개발중\nM2M 사용자 페이지 개발(https://m2m.grida.dev)\nM2M Admin 페이지(관리자 페이지) 개발\nMac Tunnelblick으로 Open VPN 설정\n웹 접근성 및 권고사항 준수로 Lighthouse에서 점수를 높임(현재 4가지 항목중 SEO 91점)\n구글 스프레드 시트로 다국어 자동화(i18n)\nMetrial UI와 같은 UI 라이브러리들 사용\nD3.js를 사용하여 최근 데이터 목록을 선형, 데이터 개수의 비율로 파이차트 구현\n`,
    skills: "HTML, CSS, Styled Component, Typescript, React",
  },
  {
    title: "Hiaas 신규 개발",
    content:
      "아티스트를 고용, 아티스트 구직, 프로젝트를 등록, 기업서비스, 결제 등을 제공하는 채용 플랫폼 개발하는 프로젝트",
    period: "2024.09 ~ 진행중",
    description: `현재 Figma 디자인 중인 단계로 디자인이 되는 순차적으로 Figma Plugin인 Builder.io를 사용하여 퍼블리싱 자동화 및 정리 진행중\n퍼블리싱 후 즉시 개발할 수 있도록 React 세팅과 동시에 퍼블리싱 이전 중`,
    skills: "HTML, CSS, Styled Component, React",
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
    transform: inView ? "translateY(0px)" : "translateY(20px)",
    config: { duration: 400 },
  });

  const renderContentWithLineBreaks = (text) =>
    text
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line, index) => (
        <span key={index} style={{ display: "block", margin: "10px 0" }}>
          • {line}
        </span>
      ));

  return (
    <AnimatedProject ref={ref} style={props}>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDetails>
        {/* <DetailItem>
          <Title>프로젝트명</Title>
          <Content>{project.title}</Content>
        </DetailItem> */}
        <DetailItem>
          <Title>설명</Title>
          <Content>{project.content}</Content>
        </DetailItem>
        <DetailItem>
          <Title>참여기간</Title>
          <Content>{project.period}</Content>
        </DetailItem>
        <DetailItem>
          <Title>내용</Title>
          <Content>{renderContentWithLineBreaks(project.description)}</Content>
        </DetailItem>
        <DetailItem>
          <Title>기술스택</Title>
          <Content>{project.skills}</Content>
        </DetailItem>

        {project.contribution && (
          <DetailItem>
            <Title>기여도</Title>
            <Content>{project.contribution}</Content>
          </DetailItem>
        )}
      </ProjectDetails>
    </AnimatedProject>
  );
};

export default ProjectSection;

const Section = styled.div`
  padding: 20px;
  background: #2e2e2e;
  border-radius: 15px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 15px 10px;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #00adee;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

const SectionContent = styled.div`
  font-size: 1.1rem;
  color: #d4d4d4;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Project = styled.div`
  margin-bottom: 30px;
  background: #3a3a3a;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
    z-index: 10;
    background: #4a4a4a;
  }

  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-bottom: 15px;
  }
`;

const AnimatedProject = styled(animated(Project))``;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
`;

const ProjectDetails = styled.div`
  font-size: 1rem;
  color: #b0b0b0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  color: #d4d4d4;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0;
  }

  @media (max-width: 480px) {
    margin: 8px 0;
  }
`;

const Title = styled.span`
  width: 120px; /* 고정 너비 설정 */
  font-weight: bold;
  margin-right: 10px;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 5px;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 10px;
  }
`;

const Content = styled.span`
  flex-grow: 1;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
