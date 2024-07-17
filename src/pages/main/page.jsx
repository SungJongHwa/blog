// 필요한 라이브러리 설치
// npm install three @react-three/fiber @react-three/drei react-spring react-scroll styled-components

import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Link as ScrollLink, Element as ScrollElement } from "react-scroll";

const MainPage = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowIntro(false), 5000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

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
              <RotatingBox />
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
          </ScrollLinkContainer>
          <Sections>
            <ScrollElement name="section1">
              <Section>
                <h2>소개</h2>
                <p>여기는 소개 섹션입니다.</p>
              </Section>
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

const RotatingBox = () => {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
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
