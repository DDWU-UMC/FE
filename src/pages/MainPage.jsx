import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backGroundImg from "../assets/main-background.svg";
import backGroundImgMobile from "../assets/background-mobile.svg";
import btrImg from "../assets/BreakTheRules.svg";
import coreDayImg from "../assets/coreday.jpg";
import otImg from "../assets/ot.jpeg";
import netWorkingImg from "../assets/networking.jpeg";
import mtImg from "../assets/MT.png";
import pmdayImg from "../assets/Pmday.jpg";
import studyImg from "../assets/study.jpg";
import hackathonImg from "../assets/hackathon.png";
import demoImg from "../assets/demoday.jpeg";
import Colors from "../constanst/colors.mjs";
import planIcon from "../assets/plan-icon.svg";
import designIcon from "../assets/design-icon.svg";
import androidIcon from "../assets/android-icon.svg";
import webIcon from "../assets/web-icon.svg";
import springIcon from "../assets/springBoot-icon.svg";
import MainFooter from "../components/footer/MainFooter";

const IntroContaioner = styled.div`
  font-size: 9vw;
  font-weight: 12000;
  margin: 7rem 5rem;
  font-family: "Pretendard-ExtraBold";

  /* 텍스트 전체에 그라디언트 적용 */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    180deg,
    #c74e70,
    /* primary400 */ #d57a94,
    /* primary300 */ #e3a6b7,
    /* primary200 */ #f1d2db,
    /* primary100 */ #e3a6b7,
    /* primary200 */ #d57a94,
    /* primary300 */ #c74e70,
    /* primary400 */ #c74e70,
    /* primary400 */ #d57a94,
    /* primary300 */ #e3a6b7,
    /* primary200 */ #f1d2db,
    /* primary100 */ #e3a6b7,
    /* primary200 */ #d57a94,
    /* primary300 */ #c74e70,
    /* primary400 */ #d57a94,
    /* primary300 */ #e3a6b7,
    /* primary200 */ #f1d2db,
    /* primary100 */ #e3a6b7,
    /* primary200 */ #d57a94,
    /* primary300 */ #c74e70 /* primary400 */
  );
  background-size: 100% 350%;
  background-position-y: 0%;
  animation: gradient 12s ease-in-out forwards;

  @keyframes gradient {
    from {
      background-position-y: 0%;
    }
    to {
      background-position-y: 100%;
    }
  }

  @media screen and (max-width: 920px) {
    margin: 6rem 3.5rem;
  }

  @media screen and (max-width: 690px) {
    font-size: 11vw;
    margin: 8rem 2rem;
  }
`;

const BTRContainer = styled.div`
  width: 100%;
  margin: 5rem 0rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 12rem 0rem;

  gap: 8px;
  .umc {
    font-size: 4vw;
    font-family: "Pretendard-ExtraBold";
    color: #ffffff;
    margin-bottom: 5px;
  }
  .umc-info {
    font-size: 2.5vw;
    color: ${Colors.secondary25};
  }

  @media screen and (max-width: 900px) {
    .recruiting-text {
      font-family: "Pretendard-Bold";
      font-size: 6vw;
      color: white;
      font-weight: 900;
    }

    .umc {
      font-size: 6vw;
      font-family: "Pretendard-ExtraBold";
      color: #ffffff;
      margin-bottom: 5px;
    }
    .umc-info {
      font-size: 3vw;
      color: ${Colors.secondary25};
    }
  }

  @media screen and (max-width: 500px) {
    gap: 5px;
    margin: 10rem 0rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 0%;

  position: relative;

  .background-mobile {
    display: none;
  }

  @media screen and (max-width: 500px) {
    .background-web {
      display: none;
    }

    .background-mobile {
      display: block;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
`;

const FixedImgOT = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(90%, -350%);
  width: 15vw;
  max-width: 300px;
  text-align: center;

  border: 1px solid white;
  border-radius: 5px;
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2),
    0px -4px 10px rgba(255, 255, 255, 0.1),
    4px 0px 10px rgba(255, 255, 255, 0.1),
    -4px 0px 10px rgba(255, 255, 255, 0.1);

  transform-origin: center;

  &:hover {
    transform: translate(90%, -350%) scale(1.08);
    box-shadow: 0px 6px 15px rgba(255, 255, 255, 0.3),
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

  @media screen and (max-width: 500px) {
    width: 27vw;
    transform: translate(50%, -370%);
    &:hover {
      transform: translate(50%, -370%);
      box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2),
        0px -4px 10px rgba(255, 255, 255, 0.1),
        4px 0px 10px rgba(255, 255, 255, 0.1),
        -4px 0px 10px rgba(255, 255, 255, 0.1);
    }
  }
`;

const FixedImgCoreDay = styled(FixedImgOT)`
  transform: translate(-220%, -380%);

  &:hover {
    transform: translate(-220%, -380%) scale(1.08);
  }

  @media screen and (max-width: 500px) {
    transform: translate(-140%, -450%);

    &:hover {
      transform: translate(-140%, -450%);
    }
  }
`;

const FixedImgNetWorking = styled(FixedImgOT)`
  transform: translate(-120%, -250%);

  &:hover {
    transform: translate(-120%, -250%) scale(1.08);
  }

  @media screen and (max-width: 500px) {
    transform: translate(-80%, -240%);

    &:hover {
      transform: translate(-80%, -240%);
    }
  }
`;

const FixedImgStudy = styled(FixedImgOT)`
  transform: translate(130%, -160%);

  &:hover {
    transform: translate(130%, -160%) scale(1.08);
  }

  @media screen and (max-width: 500px) {
    transform: translate(60%, -120%);

    &:hover {
      transform: translate(60%, -120%);
    }
  }
`;

const FixedImgMT = styled(FixedImgOT)`
  transform: translate(-220%, -40%);

  &:hover {
    transform: translate(-220%, -40%) scale(1.08);
  }

  @media screen and (max-width: 500px) {
    transform: translate(-160%, -20%);

    &:hover {
      transform: translate(-160%, -20%);
    }
  }
`;

const FixedImgPmday = styled(FixedImgOT)`
  transform: translate(0%, -20%);

  &:hover {
    transform: translate(0%, -20%) scale(1.08);
  }
  @media screen and (max-width: 500px) {
    transform: translate(10%, 85%);

    &:hover {
      transform: translate(10%, 85%);
    }
  }
`;

const FixedImgHackathon = styled(FixedImgOT)`
  transform: translate(60%, 170%);

  &:hover {
    transform: translate(60%, 170%) scale(1.08);
  }
  @media screen and (max-width: 500px) {
    transform: translate(-120%, 200%);

    &:hover {
      transform: translate(-120%, 200%);
    }
  }
`;

const FixedImgDemo = styled(FixedImgOT)`
  transform: translate(-160%, 230%);

  &:hover {
      transform: translate(-160%, 230%) scale(1.08);
  }
  @media screen and (max-width: 500px) {
    transform: translate(40%, 320%);

    &:hover {
      transform: translate(40%, 320%);
    }
  }
`;


const PartIconsContainer = styled.div`
  width: 100%;

  margin: 25rem 0rem 12rem 0rem; /* PartIconsContainer에 마진을 바로 적용 */

  .partcontainer-web {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  .partcontainer-mobile {
    text-align: center;
  }
  .partInfo-mobile {
    display: none;

    @media screen and (max-width: 500px) {
      display: block;
      font-size: 5vw;
      font-family: "Pretendard-Bold";
      color: #ffffff;
      margin-bottom: 25px;
      color: white;
    }
  }

  .linesecond {
    margin-top: 90px;
    align-self: flex-start;
  }

  .linefirst-container {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    gap: 12px;
  }
  .linesecond-container {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  @keyframes hoverBounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    } /* 위로 살짝 */
    100% {
      transform: translateY(0);
    }
  }

  @keyframes hoverDownBounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    } /* 위로 살짝 */
    100% {
      transform: translateY(0);
    }
  }

  @keyframes Bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    } /* 위로 살짝 */
    100% {
      transform: translateY(0);
    }
  }

  @keyframes DownBounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    } /* 위로 살짝 */
    100% {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 1024px) {
    .linefirst {
      animation: hoverBounce 5s ease-in-out infinite;
    }

    .linesecond {
      animation: hoverBounce 5s ease-in-out infinite;
      animation-delay: 2.5s;
    }
  }
  @media screen and (max-width: 500px) {
    margin: 0rem;
  }
`;

const PartContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc((100% - 300px) / 5);
  max-width: calc((100% - 300px) / 5);
  text-align: center;
  align-items: center;
  justify-content: center;

  .partBtn {
    background-color: ${Colors.primary};
    margin-top: 14px;
    color: white;
    padding: 6px 10px;
    border-radius: 5px;
    font-size: 17px;
  }

  &:hover {
    animation: hoverBounce 2s ease-in-out infinite;
  }

  @media screen and (max-width: 1024px) {
    flex: 0 0 calc((100% - 100px) / 5);
    max-width: calc((100% - 100px) / 5);
    &:hover {
      animation: none;
    }
  }

  @media screen and (max-width: 690px) {
    flex: 0 0 calc((100% - 100px) / 5);
    max-width: calc((100% - 100px) / 5);
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const PartContainerMobile = styled.div`
  display: none;

  .partBtn {
    background-color: ${Colors.primary};
    margin-top: 14px;
    color: white;
    padding: 6px 10px;
    border-radius: 5px;
    font-size: 17px;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    flex: 0 0 calc((100% - 80px) / 3);
    max-width: calc((100% - 80px) / 3);
    text-align: center;
    align-items: center;
    justify-content: center;
    &:hover {
      animation: none;
    }

    .partBtn {
      margin-top: 11px;
      padding: 3px 5px;
      border-radius: 3px;
      font-size: 8px;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;

  width: 100%;
  aspect-ratio: 1 / 1; /* 정사각형 유지 */
  border-radius: 5px;
  background-color: ${Colors.secondary400};
  cursor: pointer;

  img {
    width: 100%;
  }
`;

const IconContainerMobile = styled.div`
  display: flex;
  width: 100%;
  aspect-ratio: 1 / 1; /* 정사각형 유지 */
  border-radius: 5px;
  background-color: ${Colors.secondary400};

  img {
    width: 100%;
  }
`;
const RecruitingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 150px;

  .recruiting-text {
    font-family: "Pretendard-Bold";
    font-size: 4vw;
    color: white;
    font-weight: 900;
  }

  .active-button {
    display: flex;
    padding: 10px 25px;
    font-size: 1.5vw;
    color: ${Colors.primary};
    border: 2.5px solid ${Colors.primary};
    border-radius: 30px;
    margin: 2rem;
    display: none;
  }
  .disabled-button {

    padding: 10px 25px;
    font-size: 1.5vw;
    color: white;
    border: 2.5px solid ${Colors.secondary200};
    border-radius: 30px;
    margin: 2rem;
    background-color: ${Colors.secondary200};
  }

  @media screen and (max-width: 900px) {
    .recruiting-text {
      font-family: "Pretendard-Bold";
      font-size: 6vw;
      color: white;
      font-weight: 900;
    }

    .active-button {
      padding: 8px 22px;
      font-size: 3.5vw;
      border: 2px solid ${Colors.primary};
      border-radius: 30px;
      margin: 1rem;
       display: none;
    }

    .disabled-button {
     
      padding: 8px 18px;
      font-size: 2vw;
      color: white;
      border: 2px solid ${Colors.secondary200};
      border-radius: 30px;
      margin: 1rem;
    }
  }
  @media screen and (max-width: 500px) {
    .active-button {
      padding: 5px 12px;
      font-size: 3.5vw;
      border: 1.5px solid ${Colors.primary};
      border-radius: 30px;
      margin: 1rem;
      display: none;
    }

    .disabled-button {

      padding: 5px 10px;
      font-family: "Pretendard-SemiBold";
      color: white;
      border: 1.5px solid ${Colors.secondary200};
      border-radius: 30px;
      margin: 1rem;
    }
  }
`;

const Intro = () => {
  return (
    <IntroContaioner>
      DDWU
      <br /> UNIVERSITY
      <br /> MAKEUS
      <br /> CHALLENGE
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

const Info = () => {
  return (
    <InfoContainer>
      <div className="umc">UMC란?</div>
      <div className="umc-info">대학생 IT 연합 사이드 프로젝트 동아리로 </div>
      <div className="umc-info">
        동덕여대 UMC는 2기부터 시작하여 현재까지 함께하고 있습니다
      </div>
    </InfoContainer>
  );
};

const PartIcons = () => {
  const navigate = useNavigate();

  const handlePartClick = (part) => {
    navigate(`/curriculum/${part}`);
  };

  return (
    <PartIconsContainer>
      <div className="partcontainer-web">
        <PartContainer
          className="linefirst"
          onClick={() => handlePartClick("plan")}
        >
          <IconContainer>
            <img src={planIcon} alt="planIcon" />
          </IconContainer>
          <div className="partBtn">Plan</div>
        </PartContainer>
        <PartContainer
          className="linesecond"
          onClick={() => handlePartClick("design")}
        >
          <IconContainer>
            <img src={designIcon} alt="designIcon" />
          </IconContainer>
          <div className="partBtn">Design</div>
        </PartContainer>
        <PartContainer
          className="linefirst"
          onClick={() => handlePartClick("android")}
        >
          <IconContainer>
            <img src={androidIcon} alt="androidIcon" />
          </IconContainer>
          <div className="partBtn">Android</div>
        </PartContainer>
        <PartContainer
          className="linesecond"
          onClick={() => handlePartClick("web")}
        >
          <IconContainer>
            <img src={webIcon} alt="webIcon" />
          </IconContainer>
          <div className="partBtn">Web</div>
        </PartContainer>
        <PartContainer
          className="linefirst"
          onClick={() => handlePartClick("springboot")}
        >
          <IconContainer>
            <img src={springIcon} alt="springIcon" />
          </IconContainer>
          <div className="partBtn">SpringBoot</div>
        </PartContainer>
      </div>

      <div className="partcontainer-mobile">
        <div className="partInfo-mobile">💡 어떤 파트가 있나요? 💡</div>
        <div className="linefirst-container">
          <PartContainerMobile
            className="plan-mobile"
            onClick={() => handlePartClick("plan")}
          >
            <IconContainerMobile>
              <img src={planIcon} alt="planIcon" />
            </IconContainerMobile>
            <div className="partBtn">Plan</div>
          </PartContainerMobile>
          <PartContainerMobile
            className="and-mobile"
            onClick={() => handlePartClick("android")}
          >
            <IconContainerMobile>
              <img src={androidIcon} alt="androidIcon" />
            </IconContainerMobile>
            <div className="partBtn">Android</div>
          </PartContainerMobile>
          <PartContainerMobile
            className="spring-mobile"
            onClick={() => handlePartClick("springboot")}
          >
            <IconContainerMobile>
              <img src={springIcon} alt="springIcon" />
            </IconContainerMobile>
            <div className="partBtn">SpringBoot</div>
          </PartContainerMobile>
        </div>
        <div className="linesecond-container">
          <PartContainerMobile
            className="design-mobile"
            onClick={() => handlePartClick("design")}
          >
            <IconContainerMobile>
              <img src={designIcon} alt="designIcon" />
            </IconContainerMobile>
            <div className="partBtn">Design</div>
          </PartContainerMobile>
          <PartContainerMobile
            className="web-mobile"
            onClick={() => handlePartClick("web")}
          >
            <IconContainerMobile>
              <img src={webIcon} alt="webIcon" />
            </IconContainerMobile>
            <div className="partBtn">Web</div>
          </PartContainerMobile>
        </div>
      </div>
    </PartIconsContainer>
  );
};

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Intro />
      <BreakTheRules />
      <Info />
      <PartIcons />
      <ImageContainer>
        <Img src={backGroundImg} alt="background" className="background-web" />
        <Img
          src={backGroundImgMobile}
          alt="background"
          className="background-mobile"
        />
        <FixedImgOT>
          <img
            src={otImg}
            alt="OT Image"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </FixedImgOT>
        <FixedImgCoreDay>
          <img
            src={coreDayImg}
            alt="CoreDay Image"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </FixedImgCoreDay>
        <FixedImgNetWorking>
          <img
            src={netWorkingImg}
            alt="netWorking Image"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </FixedImgNetWorking>
        <FixedImgStudy>
          <img
            src={studyImg}
            alt="netWorking Image"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </FixedImgStudy>
        <FixedImgMT>
          <img
            src={mtImg}
            alt="mt Image"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </FixedImgMT>
        <FixedImgPmday>
          <img
            src={pmdayImg}
            alt=" Image"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </FixedImgPmday>
        <FixedImgHackathon>
          <img
            src={hackathonImg}
            alt=" Image"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </FixedImgHackathon>
        <FixedImgDemo>
          <img
            src={demoImg}
            alt=" Image"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </FixedImgDemo>
      </ImageContainer>
      <RecruitingContainer>
        <div className="recruiting-text">RECRUITING</div>
        <div className="recruiting-text">START ! </div>
        <a
          href="https://forms.gle/4c356ToYRBTctdUH7"
          style={{ all: "unset", cursor: "pointer" }}
        >
          <div className="active-button">지원하기</div>
        </a>
        <div className="disabled-button">8기 모집이 완료되었습니다.</div>
      </RecruitingContainer>
      <MainFooter />
    </>
  );
};

export default MainPage;
