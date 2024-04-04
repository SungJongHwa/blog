import './App.css';
import styled from 'styled-components';
import { Routes, Route, useLocation } from 'react-router-dom';

const StyledApp = styled.div`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border: 2px solid #007bff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  color: #333;
  font-size: 48px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const SubTitle = styled.div`
  color: #555;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #777;
  font-size: 18px;
  line-height: 1.5;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 24px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #0056b3;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

function App() {
  return (
    <StyledApp>
      <Title>안녕하세요, 시율입니다!</Title>
      <SubTitle>여러분을 환영합니다.</SubTitle>
      <Description>
        저의 블로그에 오신 것을 환영합니다. 블로그에는 다양한 주제로 포스트를
        작성하고 있습니다. 놀러 오세요!
      </Description>
      <br />
      <Link href="https://m.blog.naver.com/octlolo?fbclid=PAAaZy1fW4qxbt3j7TajpKOTSRtvmeMpkBaa_HhOBgsERsK_GhouXg6y1Tmjk_aem_AXHfwpVmrQv841DEapvRUUS3MchNTxMnHEH_qSjR9SrSd0gJqZ0E58fkEaSS6dBUnXM&tab=1">
        시율's의 블로그 바로가기
      </Link>
    </StyledApp>
  );
}

export default App;
