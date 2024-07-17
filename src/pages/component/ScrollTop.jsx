import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RiArrowUpSLine } from "@react-icons/all-files/ri/RiArrowUpSLine";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 1) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <CustomArrow />
    </Button>
  );
};

const CustomArrow = styled(RiArrowUpSLine)`
  font-size: 30px; // Adjust this size to your preference
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex; // Add flex display
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
  color: black;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export default ScrollTop;
