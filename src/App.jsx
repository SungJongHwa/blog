import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const StyledApp = styled(motion.div)`
  background-color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #ff6f61;
  font-size: 30px;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  color: #ff6f61;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #777;
  font-size: 16px;
  line-height: 1.5;
`;

const Link = styled.a`
  color: #ff6f61;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #c70039;
  }
`;

const Button = styled.button`
  background-color: #ff6f61;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #c70039;
  }
`;

const SocialMediaList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const SocialMediaItem = styled.li`
  margin: 0 10px;
`;

const SocialMediaLink = styled.a`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff6f61;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #c70039;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

const ScheduleButton = styled(Button)`
  margin-top: 20px;
`;

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleCreateSchedule = () => {
    // 여행 일정 생성 로직 구현
    alert("여행 일정이 생성되었습니다!");
  };

  return (
    <StyledApp>
      <Title>안녕하세요, 시율입니다.</Title>
      <SubTitle>여러분을 환영합니다.</SubTitle>
      <Description>
        저는 여행, 일상, 생각, 맛집 등 다양한 주제의 흥미로운 이야기를 담은
        블로그를 운영하고 있어요. 함께 즐거운 시간 보내요!
      </Description>
      <br />
      <Link href="https://m.blog.naver.com/octlolo?fbclid=PAAaZy1fW4qxbt3j7TajpKOTSRtvmeMpkBaa_HhOBgsERsK_GhouXg6y1Tmjk_aem_AXHfwpVmrQv841DEapvRUUS3MchNTxMnHEH_qSjR9SrSd0gJqZ0E58fkEaSS6dBUnXM&tab=1">
        시율님의 블로그 바로가기
      </Link>
      <br /> <br /> <br />
      <hr />
      <h2>SNS</h2>
      <br />
      <SocialMediaList>
        <SocialMediaItem>
          <SocialMediaLink href="https://www.facebook.com/profile.php?id=100003778632929">
            <img src="https://www.example.com/facebook.png" alt="Facebook" />
          </SocialMediaLink>
        </SocialMediaItem>
        <SocialMediaItem>
          <SocialMediaLink href="https://www.instagram.com/1oct._/">
            <img src="https://www.example.com/instagram.png" alt="Instagram" />
          </SocialMediaLink>
        </SocialMediaItem>
      </SocialMediaList>
      <br />
      <hr />
      <br />
      {/* <ScheduleButton onClick={handleCreateSchedule}>
        여행 일정 생성하기
      </ScheduleButton> */}
    </StyledApp>
  );
}

export default App;
