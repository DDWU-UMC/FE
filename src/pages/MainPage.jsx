import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainHeader from "../components/header/MainHeader";
import MainFooter from "../components/footer/MainFooter";
import backGroundImg from "../assets/main-background.svg";
import btrImg from "../assets/BreakTheRules.svg";
import infoImg from "../assets/info.svg";
import otImg from "../assets/ot.jpeg";
import netWorkingImg from "../assets/networking.jpeg"
import mtImg from "../assets/MT.png"
import hackathonImg from "../assets/hackathon.png"
import Colors from "../constanst/colors";
import planIcon from "../assets/plan-icon.svg"
import designIcon from "../assets/design-icon.svg"
import androidIcon from "../assets/android-icon.svg"
import webIcon from "../assets/web-icon.svg"
import springIcon from "../assets/springBoot-icon.svg"

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
     margin: 6rem 3.5rem ;
  }

  @media screen and (max-width: 690px) {

     margin: 7rem 2.5rem;
  }


`;

const BTRContainer = styled.div`
  width: 100%;
    margin: 7rem 0rem;

`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

    margin: 8rem 0rem;
  
  img{
    width: 70%;}

   @media screen and (max-width: 430px) {
     margin: 8rem 0rem;
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

const PartIconsContainer = styled.div`
width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 17rem 0rem 12rem 0rem; /* PartIconsContainer에 마진을 바로 적용 */


  .linesecond {
  margin-top: 100px;
  align-self: flex-start; 
}

@media screen and (max-width: 1024px) {
  
     .linefirst{
  animation: hoverDownBounce 5s ease-in-out infinite;

}
     
.linesecond {
animation: hoverBounce 5s ease-in-out infinite; 
}


}
@media screen and (max-width: 430px) {
  
    
margin: 8rem 0rem; 

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
    
  
  .partBtn{
  background-color:${Colors.primary};
  margin-top: 14px;
  color: white;
  padding: 6px 10px;
  border-radius: 5px;
  font-size: 17px;
  }


  @keyframes hoverBounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); } /* 위로 살짝 */
  100% { transform: translateY(0); }
}

@keyframes hoverDownBounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(20px); } /* 위로 살짝 */
  100% { transform: translateY(0); }
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

    @media screen and (max-width: 430px) {
  
      flex: 0 0 calc((100% - 20px) / 5);
      max-width: calc((100% - 20px) / 5);
     .partBtn {

        margin-top: 11px;
        padding: 3px 5px;

        font-size: 8px;
  
      }
}
  
`;


const IconContainer = styled.div`


  display: flex;


  width: 100%;
  aspect-ratio: 1 / 1; /* 정사각형 유지 */
  border-radius:10px;
  background-color: ${Colors.secondary400};

  img{
  width: 100%;
  }



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

const Info = () => {
  return (
    <InfoContainer>
      <Img src={infoImg} alt="background" />
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
      <PartContainer className="linefirst" onClick={() => handlePartClick("Plan")}>
        <IconContainer>
          <img src={planIcon} alt="planIcon" />
        </IconContainer>
        <div className="partBtn">Plan</div>
      </PartContainer>
      <PartContainer className="linesecond" onClick={() => handlePartClick("Design")}>
        <IconContainer>
          <img src={designIcon} alt="designIcon"/>
        </IconContainer>
        <div className="partBtn">Design</div>
      </PartContainer>
      <PartContainer className="linefirst" onClick={() => handlePartClick("Android")}>
        <IconContainer>
          <img src={androidIcon} alt="androidIcon"/>
        </IconContainer>
        <div className="partBtn">Android</div>
      </PartContainer>
      <PartContainer className="linesecond" onClick={() => handlePartClick("Web")}>
        <IconContainer>
          <img src={webIcon} alt="webIcon" />
        </IconContainer>
        <div className="partBtn">Web</div>
      </PartContainer>
      <PartContainer className="linefirst" onClick={() => handlePartClick("Spring Boot")}>
        <IconContainer>
          <img src={springIcon} alt="springIcon"/>
        </IconContainer>
        <div className="partBtn">SpringBoot</div>
      </PartContainer>
    </PartIconsContainer>
  );
};


function MainPage() {
return (
  <>
    <MainHeader /> 
    <Intro />
    <BreakTheRules />
    <Info/>
    <PartIcons/>
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
    <MainFooter/>
  </>
);
}

export default MainPage;