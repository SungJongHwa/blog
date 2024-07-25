import React, { useRef, useState, useEffect } from "react";
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { OrbitControls, Stars, Text3D } from "@react-three/drei";
import { Link as ScrollLink, Element as ScrollElement } from "react-scroll";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

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
  const [showIntro, setShowIntro] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowIntro(false), 5000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const handleClick = () => {
    setShowMainContent(true);
  };

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
        <>
          {!showMainContent ? (
            <CanvasContainer>
              <Canvas camera={{ position: [0, 0, 300] }}>
                <AnimatedCamera />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Stars />
                <OrbitControls />
                <MovingText handleClick={handleClick} />
                <EffectComposer>
                  <Bloom
                    luminanceThreshold={0.1}
                    luminanceSmoothing={0.9}
                    height={300}
                  />
                </EffectComposer>
              </Canvas>
            </CanvasContainer>
          ) : (
            <MainContainer>
              <ScrollLinkContainer>
                <StyledScrollLink to="section1" smooth={true} duration={1000}>
                  소개
                </StyledScrollLink>
                <StyledScrollLink to="section2" smooth={true} duration={1000}>
                  프로젝트
                </StyledScrollLink>
                <StyledScrollLink to="skills" smooth={true} duration={1000}>
                  스킬
                </StyledScrollLink>
              </ScrollLinkContainer>
              <Sections>
                <ScrollElement name="section1">
                  <Section>
                    <SectionTitle>소개</SectionTitle>
                    <SectionContent>여기는 소개 섹션입니다.</SectionContent>
                  </Section>
                </ScrollElement>
                <ScrollElement name="skills">
                  <SkillsSection>
                    <SectionTitle>스킬</SectionTitle>
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
                        <SkillRow>
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
                    <SectionTitle>프로젝트</SectionTitle>
                    <SectionContent>여기는 프로젝트 섹션입니다.</SectionContent>
                  </Section>
                </ScrollElement>
              </Sections>
            </MainContainer>
          )}
        </>
      )}
    </>
  );
};

const MovingText = ({ handleClick }) => {
  const ref = useRef();
  const speed = 0.1;
  let time = 0;

  useFrame(() => {
    time += speed;
    ref.current.position.y = Math.sin(time) * 0.5;
  });

  return (
    <>
      <Text3D
        ref={ref}
        position={[-1, 0, 0]}
        rotation={[0, 0, 0]}
        size={0.7}
        height={0.3}
        curveSegments={32}
        bevelEnabled
        bevelThickness={0.05}
        bevelSize={0.03}
        bevelOffset={0}
        bevelSegments={8}
        font="/fonts/helvetiker_bold.typeface.json"
        onClick={handleClick}
      >
        Click
        <meshStandardMaterial
          attach="material"
          color="lightblue"
          emissive="#00adee"
          emissiveIntensity={0.8}
          roughness={0.4}
          metalness={0.5}
        />
      </Text3D>
      {/* <mesh position={[1, -0.5, 0]}>
        <boxGeometry args={[0.7, 0.4, 0.1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[1, -0.3, 0.1]}>
        <planeGeometry args={[0.6, 0.3]} />
        <meshStandardMaterial color="black" />
      </mesh> */}
    </>
  );
};

const AnimatedCamera = () => {
  const { camera } = useThree();
  const spring = useSpring({
    from: { z: 300 },
    to: { z: 10 },
    config: { duration: 1000 },
  });

  useFrame(() => {
    camera.position.z = spring.z.get();
  });

  return null;
};

export default MainPage;

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
  background-color: #121212;
  color: white;
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
  cursor: pointer;
`;

const ScrollLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #222;
  padding: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const StyledScrollLink = styled(ScrollLink)`
  color: #ffffff;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s;

  &:hover {
    color: #00adee;
  }
`;

const Sections = styled.div`
  width: 100%;
`;

const Section = styled.div`
  padding: 60px 20px;
  text-align: center;
  background-color: #1e1e1e;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #00adee;
`;

const SectionContent = styled.p`
  font-size: 1.2rem;
  color: #d4d4d4;
`;

const AnimatedText = styled(animated.div)`
  color: #ffffff;
  font-size: 4rem;
  position: absolute;
  font-family: "Arial", sans-serif;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

const FadeText = ({ children, delay = 0 }) => {
  const props = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: async (next) => {
      await next({ opacity: 1, transform: "scale(1.5)" });
      await next({ opacity: 0, transform: "scale(1.5)" });
    },
    config: { duration: 1000 },
    delay,
    reset: true,
  });

  return <AnimatedText style={props}>{children}</AnimatedText>;
};

const SkillsSection = styled.div`
  padding: 60px 20px;
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
  animation: ${({ reverse }) => (reverse ? "scroll-reverse" : "scroll")} 10s
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
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    color: #00adee;
  }
`;
