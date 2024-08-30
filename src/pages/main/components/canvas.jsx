import React from "react";
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Text3D, Box } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useSpring } from "react-spring";
import styled from "styled-components";

const CanvasSection = ({ setShowMainContent }) => {
  const handleClick = () => {
    setShowMainContent(true);
  };

  return (
    <StyledCanvasContainer>
      <Canvas camera={{ position: [0, 0, 500] }}>
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
    </StyledCanvasContainer>
  );
};

export default CanvasSection;

const MovingText = ({ handleClick }) => {
  const ref = React.useRef();
  const speed = 0.1;
  let time = 0;

  const handlePointerOver = (e) => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = (e) => {
    document.body.style.cursor = "default";
  };

  useFrame(() => {
    time += speed;
    ref.current.position.y = Math.sin(time) * 0.5;
  });

  return (
    <group>
      {" "}
      <Box
        args={[3, 1, 1]}
        position={[-1, 0, 0]}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        visible={false}
      />
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
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
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
    </group>
  );
};

const AnimatedCamera = () => {
  const { camera } = useThree();
  const spring = useSpring({
    from: { z: 500 },
    to: { z: 10 },
    config: { duration: 1000 },
  });

  useFrame(() => {
    camera.position.z = spring.z.get();
  });

  return null;
};

const StyledCanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
