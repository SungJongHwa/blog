import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useSpring, useTrail, animated, config } from "react-spring";
import dayjs from "dayjs";

const Date = ({ setShowMainContent }) => {
  const [startDate, setStartDate] = useState("2022-04-19"); // 사귄 시작일
  const [history, setHistory] = useState([]);

  // Spring animation configuration for container fade-in
  const containerAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.wobbly,
  });

  // Spring trail animation for anniversary cards
  const trail = useTrail(history.length, {
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: config.gentle,
  });

  useEffect(() => {
    const calculateAnniversaries = () => {
      const start = dayjs(startDate);
      const today = dayjs();
      const maxDays = 3000;
      const anniversaries = [];

      for (let i = 100; i <= maxDays; i += 100) {
        const anniversaryDate = start.add(i, "day");
        const isPast = anniversaryDate.isBefore(today);
        anniversaries.push({
          days: i,
          date: anniversaryDate.format("YYYY-MM-DD"),
          isPast: isPast,
        });
      }

      setHistory(anniversaries);
    };

    calculateAnniversaries();
  }, [startDate]);

  return (
    <AnniversaryContainer style={containerAnimation}>
      <AnniversaryTitle>기념일 히스토리</AnniversaryTitle>
      <AnniversaryInputContainer>
        <label htmlFor="startDate">사귄 시작일: </label>
        <AnniversaryInput
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </AnniversaryInputContainer>
      <AnniversaryDetails>
        {trail.map((animationStyle, index) => (
          <AnimatedAnniversaryCard
            key={index}
            style={animationStyle}
            isPast={history[index].isPast}
          >
            <CardContent>
              <CardTitle>{history[index].days}일</CardTitle>
              <CardDate isPast={history[index].isPast}>
                {history[index].date}
              </CardDate>
            </CardContent>
          </AnimatedAnniversaryCard>
        ))}
      </AnniversaryDetails>
    </AnniversaryContainer>
  );
};

export default Date;

// Background animation
const bgAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const AnniversaryContainer = styled(animated.div)`
  margin-top: 40px;
  padding: 30px;
  background: linear-gradient(145deg, #242424, #3c3c3c);
  background-size: 400% 400%;
  animation: ${bgAnimation} 20s ease infinite;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  color: #e0e0e0;
  max-width: 900px;
  margin: 50px auto;
  border: 1px solid #00adee;
`;

const AnniversaryTitle = styled.h3`
  font-size: 3rem;
  color: #00adee;
  margin-bottom: 45px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const AnniversaryInputContainer = styled.div`
  margin-bottom: 50px;
  text-align: center;
`;

const AnniversaryInput = styled.input`
  padding: 15px 20px;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
  background: #1e1e1e;
  color: #e0e0e0;
  appearance: none;
  transition: box-shadow 0.4s ease, transform 0.3s ease;
  border: 1px solid #00bfff;

  &:focus {
    border-color: #00bfff;
    outline: none;
    box-shadow: 0 0 15px #00bfff;
    transform: scale(1.1);
  }

  &::placeholder {
    color: #888;
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;

const AnniversaryDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

const AnimatedAnniversaryCard = styled(animated.div)`
  background: ${(props) =>
    props.isPast
      ? "linear-gradient(145deg, #3c3c3c, #242424)"
      : "linear-gradient(145deg, #00adee, #005f8e)"};
  color: ${(props) => (props.isPast ? "#e0e0e0" : "#ffffff")};
  padding: 35px;
  border-radius: 25px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  width: 250px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  text-align: center;

  &:hover {
    transform: translateY(-15px) scale(1.05);
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardTitle = styled.h4`
  font-size: 2rem;
  margin-bottom: 14px;
  color: #ffeb3b;
`;

const CardDate = styled.p`
  font-size: 1.6rem;
  color: ${(props) => (props.isPast ? "#e0e0e0" : "#ffffff")};
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;
`;
