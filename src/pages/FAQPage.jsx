import React, { useState } from "react";
import styled from "styled-components";
import FAQList from "../components/FAQ/FAQList";
import headerImg from "../assets/underheaderImg.svg";
import MainFooter from "../components/footer/MainFooter";
import Colors from "../constanst/colors.mjs";

const FAQPageContainer = styled.div`
  width: 80%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  gap: 40px;
  font-size: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 85vh; /* 페이지 최소 높이 100% 설정 */

  .sub-tile-container {
    margin: 9rem 0rem 0rem 0rem;
    position: relative; /* 부모 요소 설정 */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .sub-tile-bg {
    position: absolute; /* 절대 위치 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%); /* 정중앙 배치 */
    width: 100%; /* 원하는 크기로 조정 */
    height: auto;
    z-index: -1;
  }

  .sub-tile {
    position: relative;
    font-size: 30px;
    font-weight: bold;
    z-index: 1;
  }

  @media screen and (max-width: 1440px) {
    min-height: 80vh;
  }

  @media screen and (max-width: 530px) {
    min-height: 77vh;
  }

  @media screen and (max-width: 430px) {
    min-height: 80vh;
  }

  @media screen and (max-width: 690px) {

   .sub-tile {
      font-size: 25px;
    }
    .sub-tile-container {
      margin: 8.5rem 0rem 0rem 0rem;
    }
  }

  @media screen and (max-width: 500px) {
    .sub-tile {
      font-size: 18px;
    }
  }

   @media screen and (max-width: 470px) {
    padding: 5px 8px;
    font-size: 10px;
  }

   @media screen and (max-width: 370px) {
    padding: 5px 7px;
    font-size: 8px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 20px;

  @media screen and (max-width: 430px) {
  
    gap: 12px;
  }
`;

const CateButton = styled.button`
  background-color: ${(props) =>
    props.$active === "true" ? Colors.primary : Colors.btn};
  color: ${(props) =>
    props.$active === "true" ? "white" : Colors.secondary50};
  border: 1px solid
    ${(props) =>
      props.$active === "true" ? Colors.primary : Colors.primary900};
  padding: 6px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;

  @media screen and (max-width: 690px) {
    padding: 6px 16px;
    font-size: 14px;
  }

   @media screen and (max-width: 560px) {
    padding: 6px 13px;
    font-size: 12px;
  }

  @media screen and (max-width: 470px) {
    padding: 6px 9px;
    font-size: 10px;
  }

   @media screen and (max-width: 360px) {
    padding: 6px 7px;
    font-size: 8px;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${Colors.secondary400};
`;

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Plan");
  const categories = ["Plan", "Design", "Develop", "동아리 활동"];

  return (
    <>
      <FAQPageContainer>
        <div className="sub-tile-container">
          <img className="sub-tile-bg" src={headerImg} alt="배경 이미지" />
          <div className="sub-tile">FAQ 자주 묻는 질문</div>
        </div>
        <ButtonContainer>
          {categories.map((category) => (
            <CateButton
              key={category}
              $active={selectedCategory === category ? "true" : "false"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CateButton>
          ))}
        </ButtonContainer>
        <FAQList selectedCategory={selectedCategory} />
      </FAQPageContainer>
      <FooterContainer>
        <MainFooter />
      </FooterContainer>
    </>
  );
};

export default FAQPage;
