import React from "react";
import styled from "styled-components";
import MainHeader from "../components/header/MainHeader";
import backGroundImg from "../assets/main-background.svg";
import btrImg from "../assets/BreakTheRules.svg";
import otImg from "../assets/ot.jpeg";
import netWorkingImg from "../assets/networking.jpeg"
import mtImg from "../assets/MT.png"
import hackathonImg from "../assets/hackathon.png"

const IntroContaioner = styled.div`
  font-size: 9vw;;
  font-weight: 800;
  margin: 7rem 5rem;

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
    #C74E70,  /* primary400 */
    #D57A94,  /* primary300 */
    #E3A6B7,  /* primary200 */
    #F1D2DB,  /* primary100 */
    #E3A6B7,  /* primary200 */
    #D57A94,  /* primary300 */
    #C74E70  /* primary400 */

  );
  background-size: 100% 350%;
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
     margin: 4rem 5rem;
  }

  @media screen and (max-width: 690px) {

     margin: 3rem 2.5rem;
  }
     @media screen and (max-width: 530px) {

     margin: 2.5rem 2.rem;
  }

    @media screen and (max-width: 430px) {

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

const FixedImgOT = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-220%, -510%);
  width: 15vw;
  max-width: 300px;
  text-align: center;

  border: 1px solid white;
  border-radius: 5px;
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 
    0px 4px 10px rgba(255, 255, 255, 0.2),
    0px -4px 10px rgba(255, 255, 255, 0.1),
    4px 0px 10px rgba(255, 255, 255, 0.1),
    -4px 0px 10px rgba(255, 255, 255, 0.1);

  transform-origin: center;

  &:hover {
    transform: translate(-220%, -510%) scale(1.08);
    box-shadow: 
      0px 6px 15px rgba(255, 255, 255, 0.3),
      0px -6px 15px rgba(255, 255, 255, 0.15),
      6px 0px 15px rgba(255, 255, 255, 0.15),
      -6px 0px 15px rgba(255, 255, 255, 0.15);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 3px;
    transition: transform 0.4s ease-in-out;
  }
`;

const FixedImgNetWorking = styled(FixedImgOT)`
  transform: translate(-120%, -390%);

  &:hover {
    transform: translate(-120%, -390%) scale(1.08);
  }
`;

const FixedImgMT = styled(FixedImgOT)`
  transform: translate(90%, -490%);

  &:hover {
    transform: translate(90%, -490%) scale(1.08);
  }
`;

const FixedImgHackathon = styled(FixedImgOT)`

 transform: translate(70%, -10%);

 &:hover {
    transform: translate(70%, -10%) scale(1.08); /* ✅ 위치 고정 + 크기 확대 */
}
`;

function MainPage() {
return (
  <>
    <MainHeader /> 
    <Intro />
    <BreakTheRules />
    <ImageContainer>
      <Img src={backGroundImg} alt="background" />
      <FixedImgOT>
        <img src={otImg} alt="OT Image" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
      </FixedImgOT>
      <FixedImgNetWorking>
        <img src={netWorkingImg} alt="netWorking Image" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
      </FixedImgNetWorking>
      <FixedImgMT>
        <img src={mtImg} alt="mt Image" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
      </FixedImgMT>
      <FixedImgHackathon>
        <img src={hackathonImg} alt=" Image" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
      </FixedImgHackathon>
    </ImageContainer>
  </>
);
}

export default MainPage;