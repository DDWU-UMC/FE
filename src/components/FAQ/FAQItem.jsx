import React, { useState } from "react";
import styled from "styled-components";

const FAQItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (max-width: 430px) {
    gap: 5px;
  }
`;

const Question = styled.div`
  width: 100% - 30px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  border-radius: 8px;
  background-color: #191919;
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 18px;
    font-size: 14px;
  }

  @media screen and (max-width: 430px) {
    padding: 15px;
    font-size: 12px;
  }
`;

const Answer = styled.div`
  font-size: 15px;
  padding: 20px;
  white-space: pre-line;
  display: ${(props) => (props.isOpen ? "block" : "none")};

  @media screen and (max-width: 768px) {
    padding: 18px;
    font-size: 13px;
  }

  @media screen and (max-width: 430px) {
    width: 87%;
    padding: 15px;
    font-size: 12px;
  }
`;

const ArrowIcon = styled.svg`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

const FAQItem = ({ question, category, answer, additional }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FAQItemContainer>
      <Question onClick={() => setIsOpen(!isOpen)}>
        Q. {question}
        <ArrowIcon
          isOpen={isOpen}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </ArrowIcon>
      </Question>
      <Answer isOpen={isOpen}>
        A. {answer}
        {additional && <p>{additional}</p>}
      </Answer>
    </FAQItemContainer>
  );
};

export default FAQItem;
