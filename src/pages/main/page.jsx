import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Link as ScrollLink, Element as ScrollElement } from "react-scroll";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Git",
  "Github",
  "GitLab",
  "Jquery",
  "HTML",
  "CSS",
  "Webpack",
  "Babel",
  "Slack",
  "Jira",
  "Confluence",
  "Styled-components",
  "Discord",
];

const MainPage = () => {
  const [showIntro, setShowIntro] = React.useState(true);

  React.useEffect(() => {
    const timer1 = setTimeout(() => setShowIntro(false), 5000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const half = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, half);
  const secondHalf = skills.slice(half);

  return (
    <>
      {showIntro ? (
        <IntroContainer>
          <FadeText>안녕하세요!</FadeText>
          <FadeText delay={2000}>성종화입니다.</FadeText>
        </IntroContainer>
      ) : (
        <MainContainer>
          <CanvasContainer>
            <Canvas>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Stars />
              <OrbitControls />
              <Laptop />
            </Canvas>
          </CanvasContainer>
          <ScrollLinkContainer>
            <ScrollLink to="section1" smooth={true} duration={1000}>
              소개
            </ScrollLink>
            <ScrollLink to="section2" smooth={true} duration={1000}>
              프로젝트
            </ScrollLink>
            <ScrollLink to="section3" smooth={true} duration={1000}>
              연락처
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={1000}>
              스킬
            </ScrollLink>
          </ScrollLinkContainer>
          <Sections>
            <ScrollElement name="section1">
              <Section>
                <h2>소개</h2>
                <p>여기는 소개 섹션입니다.</p>
              </Section>
            </ScrollElement>

            <ScrollElement name="skills">
              <SkillsSection>
                <h2>스킬</h2>
                <SkillsWrapper>
                  <SkillsSlider>
                    <SkillRow>
                      {firstHalf.map((skill, index) => (
                        <SkillItem key={index}>{skill}</SkillItem>
                      ))}
                      {firstHalf.map((skill, index) => (
                        <SkillItem key={index + firstHalf.length}>
                          {skill}
                        </SkillItem>
                      ))}
                    </SkillRow>
                    <SkillRow reverse>
                      {secondHalf.map((skill, index) => (
                        <SkillItem key={index}>{skill}</SkillItem>
                      ))}
                      {secondHalf.map((skill, index) => (
                        <SkillItem key={index + secondHalf.length}>
                          {skill}
                        </SkillItem>
                      ))}
                    </SkillRow>
                  </SkillsSlider>
                </SkillsWrapper>
              </SkillsSection>
            </ScrollElement>

            <ScrollElement name="section2">
              <Section>
                <h2>프로젝트</h2>
                <p>여기는 프로젝트 섹션입니다.</p>
              </Section>
            </ScrollElement>

            <ScrollElement name="section3">
              <Section>
                <h2>연락처</h2>
                <p>여기는 연락처 섹션입니다.</p>
              </Section>
            </ScrollElement>
          </Sections>
        </MainContainer>
      )}
    </>
  );
};

export default MainPage;

const Laptop = () => {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <group ref={ref} position={[0, 0, 0]} onClick={handleClick}>
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[1.5, 0.1, 1]} />
        <meshStandardMaterial color={"silver"} />
      </mesh>
      <mesh position={[0, 0.3, -0.5]} rotation={[1.57, 0, 0]}>
        <boxGeometry args={[1.5, 0.05, 1]} />
        <meshStandardMaterial color={"#1b1b1b"} />
      </mesh>
      <mesh position={[0, 0.35, -0.45]}>
        <planeGeometry args={[1.4, 0.8]} />
        <meshStandardMaterial color={"#000000"} />
      </mesh>
      <mesh position={[0.65, 0.32, -0.48]}>
        <boxGeometry args={[0.02, 0.02, 0.02]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh position={[-0.65, 0.32, -0.48]}>
        <boxGeometry args={[0.02, 0.02, 0.02]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
    </group>
  );
};

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  position: relative;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 50vh;
`;

const ScrollLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #222;
  padding: 10px 0;
`;

const Sections = styled.div`
  width: 100%;
`;

const Section = styled.div`
  padding: 50px;
  text-align: center;
`;

const AnimatedText = styled(animated.div)`
  color: #ffffff;
  font-size: 4rem;
  position: absolute;
`;

const FadeText = ({ children, delay = 0 }) => {
  const props = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: async (next) => {
      await next({ opacity: 1, transform: "scale(1.5)" });
      await next({ opacity: 0, transform: "scale(1.5)" });
    },
    config: { duration: 1000 },
    delay: delay,
    reset: true,
  });

  return <AnimatedText style={props}>{children}</AnimatedText>;
};

const SkillsSection = styled.div`
  padding: 50px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
`;

const SkillsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  overflow: hidden;
`;

const SkillsSlider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const SkillRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  animation: ${({ reverse }) => (reverse ? "scroll-reverse" : "scroll")} 60s
    linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes scroll-reverse {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const SkillItem = styled.div`
  display: inline-block;
  margin: 20px 60px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
`;
