// Contact.jsx
import React from "react";
import Profile from "../asset/profile.jpeg";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      {/* <Header>성종화 블로그</Header> */}
      <Content>
        <ProfileImage src={Profile} alt="My Portrait" />

        <ContactDetails>
          <Heading>Contact Information</Heading>
          <Paragraph>생년월일: 1997.11.29</Paragraph>
          <Paragraph>이메일: jonghwasung@gmail.com</Paragraph>
          <Paragraph>전화번호: 010-2408-0329</Paragraph>
          <Paragraph>주소: 서울시 동작구</Paragraph>
        </ContactDetails>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #282c34;
  color: white;
  min-height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  @media (max-width: 768px) {
    margin-top: 61.5px;
  }
`;

const Header = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
  background-color: #20232a;
  font-size: 2em;
  font-weight: bold;
  border-bottom: 3px solid #61dafb;

  @media (max-width: 768px) {
    font-size: 1.5em;
    padding: 15px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  background-color: #282c34;
  color: white;
  border-radius: 12px;
  //   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 20px auto;

  @media (max-width: 768px) {
    flex-direction: column; // 모바일에서는 수직 정렬
    padding: 20px;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  border: 3px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 150px; // 모바일에 맞춰 이미지 크기 축소
    height: 150px;
    margin-right: 0;
    margin-bottom: 20px; // 수직 정렬을 위한 하단 여백 추가
  }
`;

const ContactDetails = styled.div`
  text-align: left;
  flex: 1;

  @media (max-width: 768px) {
    text-align: center; // 모바일에서 가운데 정렬
  }
`;

const Heading = styled.h3`
  font-size: 2.2em;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const Paragraph = styled.p`
  margin: 16px 0;
  font-size: 1.1em;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export default Contact;
