import React, { useState } from "react";
import styled from "styled-components";
import MainHeader from "../components/header/MainHeader";
import FAQList from "../components/FAQ/FAQList";

const FAQPageContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  gap: 40px;
  font-size: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 430px) {
    gap: 20px;
  }
`;

const SubTitle = styled.div`
  margin-top: 100px;
  font-size: 23px;

  @media screen and (max-width: 690px) {
    margin-top: 130px;
    font-size: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;

  @media screen and (max-width: 430px) {
    gap: 10px;
  }
`;

const CateButton = styled.button`
  background-color: ${(props) => (props.active ? "#ba224d" : "#4a0d1e")};
  color: ${(props) => (props.active ? "#ffffff" : "#B7B7B7")};
  border: 2px solid ${(props) => (props.active ? "#ba224d" : "#370a17")};
  padding: 3px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 3px 15px;
    font-size: 12px;
  }

  @media screen and (max-width: 430px) {
    padding: 3px 15px;
    font-size: 10px;
  }
`;

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Plan");
  const categories = ["Plan", "Design", "Develop", "동아리 활동"];

  return (
    <>
      <MainHeader />
      <FAQPageContainer>
        <SubTitle>FAQ 자주 묻는 질문</SubTitle>
        <ButtonContainer>
          {categories.map((category) => (
            <CateButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CateButton>
          ))}
        </ButtonContainer>
        <FAQList selectedCategory={selectedCategory} />
      </FAQPageContainer>
    </>
  );
};

export default FAQPage;
