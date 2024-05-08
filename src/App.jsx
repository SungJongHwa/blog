// App.jsx
import React from "react";
import Contact from "./component/Contact";
import ScrollTop from "./component/ScrollTop";
import styled from "styled-components";

const App = () => {
  return (
    <div>
      <Contact />
      <Section id="about">
        <Heading>소개</Heading>
        <Paragraph>
          안녕하세요! 저는 프론트엔드 개발자입니다. 웹과 모바일 어플리케이션의
          디자인 및 기능을 개발하고 최적화하는 것을 전문으로 합니다. 사용자
          경험을 극대화하고, 효율적인 코드를 작성하며, 최신 기술 동향을 끊임없이
          파악하여 개선하는 데에 열정을 가지고 있습니다. React, Vue.js와 같은
          최신 프레임워크를 활용해 빠르고 직관적인 UI를 구축하며, 협업과 소통을
          통해 최고의 결과를 만듭니다.
        </Paragraph>
      </Section>
      <Section id="blog">
        <h2>블로그</h2>
        <p>이곳은 블로그 섹션입니다. 여기에 블로그 글을 작성하세요.</p>
      </Section>
      <ScrollTop />
    </div>
  );
};

export default App;

// 스타일링 요소들
const Section = styled.section`
  padding: 50px;
  text-align: center;
  // background-color: #20232a;

  border-bottom: 3px solid #61dafb;
  margin: 0 auto;
  // max-width: 800px;
  // border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const Heading = styled.h2`
  font-size: 2em;
  margin-bottom: 16px;
  font-weight: bold;
  color: #61dafb;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  margin: 0 auto;
  max-width: 700px;

  @media screen and (max-width: 768px) {
    font-size: 1em;
    padding: 0 20px;
    max-width: 100%;
  }
`;
