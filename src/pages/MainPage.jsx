import React from "react";
import styled from "styled-components";
import MainHeader from "../components/header/MainHeader";
import backGroundImg from "../assets/main-background.svg";
import btrImg from "../assets/BreakTheRules.svg";

const IntroContaioner = styled.div`
  font-size: 110px;
  font-weight: 800;
  margin: 4rem 5rem;

  /* 텍스트 전체에 그라디언트 적용 */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    180deg,



    #C74E70,  /* primary400 */
    #D57A94,  /* primary300 */
    #E3A6B7,  /* primary200 */
    #F1D2DB,  /* primary100 */
    #E3A6B7,  /* primary200 */
    #D57A94,  /* primary300 */
    #C74E70,  /* primary400 */
    #C74E70,  /* primary400 */
    #D57A94,  /* primary300 */
    #E3A6B7,  /* primary200 */
    #F1D2DB,  /* primary100 */
    #E3A6B7,  /* primary200 */
    #D57A94,  /* primary300 */
    #C74E70  /* primary400 */

  );
  background-size: 100% 500%;
  background-position-y: 0%;
  animation: gradient 15s ease-in-out forwards;

  @keyframes gradient {
    from {
      background-position-y: 0%;
    }
    to {
      background-position-y: 100%;
    }
  }

  @media screen and (max-width: 920px) {
    font-size: 100px;
     margin: 4rem 5rem;
  }

  @media screen and (max-width: 690px) {
    font-size: 80px;
     margin: 3rem 2.5rem;
  }
     @media screen and (max-width: 530px) {
    font-size: 65px;
     margin: 2.5rem 2.rem;
  }

    @media screen and (max-width: 430px) {
    font-size: 50px;
     margin: 6rem 1.8rem;
  }
`;

const BTRContainer = styled.div`
  width: 100%;

  @media screen and (max-width: 430px) {
    
     margin: 8rem -0.5rem;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 0%;
  padding-bottom: calc(1000 / 1920 * 100%);
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
`;

const Intro = () => {
  return (
    <IntroContaioner>
      DDWU<br /> UNIVERSITY<br /> MAKEUS<br /> CHALLENGE
    </IntroContaioner>
  );
};

const BreakTheRules = () => {
  return (
    <BTRContainer>
      <Img src={btrImg} alt="background" />
    </BTRContainer>
  );
};

function MainPage() {
  return (
    <>
      <MainHeader />
      <Intro />
      <BreakTheRules />
      <ImageContainer>
        <Img src={backGroundImg} alt="background" />
      </ImageContainer>
    </>
  );
}

export default MainPage;