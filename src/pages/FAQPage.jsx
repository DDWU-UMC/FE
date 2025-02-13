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
    gap: 30px;
  }
`;

const SubTitle = styled.div`
  margin-top: 20px;
  font-size: 25px;
  font-weight: bold;

  @media screen and (max-width: 430px) {
    font-size: 23px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;

  @media screen and (max-width: 430px) {
    gap: 14px;
  }
`;

const CateButton = styled.button`
  background-color: ${(props) =>
    props.active ? "rgb(105, 9, 38)" : "#602133"};
  color: white;
  font-weight: ${(props) => (props.active ? "800" : "400")};
  border: none;
  padding: 5px 17px;
  border-radius: 10px;
  cursor: pointer;

  @media screen and (max-width: 430px) {
    padding: 5px 14px;
    font-size: 12px;
  }
`;

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("동아리 활동");
  const categories = ["Plan", "Design", "Develop", "동아리 활동"];

  return (
    <>
      <MainHeader />
      <FAQPageContainer>
        <SubTitle>자주 묻는 질문</SubTitle>
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