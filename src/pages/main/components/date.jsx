import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Element as ScrollElement } from "react-scroll";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import dayjs from "dayjs";

const Date = ({ setShowMainContent }) => {
  const [startDate, setStartDate] = useState("2022-04-19"); // 사귄 시작일
  const [history, setHistory] = useState([]);

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
    <AnniversaryContainer>
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
        {history.map((anniversary, index) => (
          <AnniversaryCard key={index} isPast={anniversary.isPast}>
            <CardContent>
              <CardTitle>{anniversary.days}일</CardTitle>
              <CardDate>{anniversary.date}</CardDate>
            </CardContent>
          </AnniversaryCard>
        ))}
      </AnniversaryDetails>
    </AnniversaryContainer>
  );
};

export default Date;

const AnniversaryContainer = styled.div`
  margin-top: 40px;
  padding: 20px;
  background: #2e2e2e;
  border-radius: 10px;
  color: #d4d4d4;
`;

const AnniversaryTitle = styled.h3`
  font-size: 2rem;
  color: #00adee;
  margin-bottom: 20px;
`;

const AnniversaryInputContainer = styled.div`
  margin-bottom: 20px;
`;

const AnniversaryInput = styled.input`
  padding: 5px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #00adee;
  background: #1e1e1e;
  color: #d4d4d4;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  &:focus {
    border-color: #00bfff;
    outline: none;
    box-shadow: 0 0 5px #00bfff;
  }

  &::placeholder {
    color: #888;
  }
`;

const AnniversaryDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const AnniversaryCard = styled.div`
  background: ${(props) => (props.isPast ? "#1e1e1e" : "#00adee")};
  color: ${(props) => (props.isPast ? "#d4d4d4" : "#ffffff")};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 200px;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CardDate = styled.p`
  font-size: 1.2rem;
  color: ${(props) => (props.isPast ? "#d4d4d4" : "#ffffff")};
`;
