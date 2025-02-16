import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backGroundImg from "../assets/main-background.svg";
import backGroundImgMobile from "../assets/background-mobile.svg";
import btrImg from "../assets/BreakTheRules.svg";
import infoImg from "../assets/info.svg";
import coreDayImg from "../assets/coreday.jpg";
import otImg from "../assets/ot.jpeg";
import netWorkingImg from "../assets/networking.jpeg"
import mtImg from "../assets/MT.png"
import pmdayImg from "../assets/Pmday.jpg"
import studyImg from "../assets/study.jpg"
import hackathonImg from "../assets/hackathon.png"
import Colors from "../constanst/colors";
import planIcon from "../assets/plan-icon.svg"
import designIcon from "../assets/design-icon.svg"
import androidIcon from "../assets/android-icon.svg"
import webIcon from "../assets/web-icon.svg"
import springIcon from "../assets/springBoot-icon.svg"
import MainFooter from "../components/footer/MainFooter";

const IntroContaioner = styled.div`
  font-size: 9vw;;
  font-weight: 12000;
  margin: 7rem 5rem;
  font-family: 'Pretendard-ExtraBold';

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
     font-size: 11vw;
     margin: 8rem 2rem;
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

  position: relative;

  .background-mobile{
  display: none;
  
  }

  @media screen and (max-width: 500px) {
    .background-web{
  display: none;
  
  }
     .background-mobile{
  display: block;
  padding
  
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

  box-shadow: 
    0px 4px 10px rgba(255, 255, 255, 0.2),
    0px -4px 10px rgba(255, 255, 255, 0.1),
    4px 0px 10px rgba(255, 255, 255, 0.1),
    -4px 0px 10px rgba(255, 255, 255, 0.1);

  transform-origin: center;

  &:hover {
    transform: translate(90%, -350%) scale(1.08);
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

    @media screen and (max-width: 500px) {
      width: 27vw;
       transform: translate(50%, -370%);
       &:hover {
       transform: translate(50%, -370%);
       0px 4px 10px rgba(255, 255, 255, 0.2),
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
      transform: translate(-140%, -450%) ;
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
      transform: translate(-80%, -240%) ;
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

const PartIconsContainer = styled.div`
width: 100%;

  margin: 17rem 0rem 12rem 0rem; /* PartIconsContainer에 마진을 바로 적용 */

 
.partcontainer-web{

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;


 
}
  .linesecond {
  margin-top: 90px;
  align-self: flex-start; 
}

  .linefirst-container{
   display: flex;
  justify-content: center;
  margin-bottom:15px;
  gap:12px;
 
  }
   .linesecond-container{
   display: flex;
  justify-content: center;
    gap:12px;

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

@keyframes Bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); } /* 위로 살짝 */
  100% { transform: translateY(0); }
}

@keyframes DownBounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(10px); } /* 위로 살짝 */
  100% { transform: translateY(0); }
}

@media screen and (max-width: 1024px) {
  
     .linefirst{
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
    
  
  .partBtn{
  background-color:${Colors.primary};
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
  
    display:none;
    
}
  
`;

const PartContainerMibile = styled.div`
  display: none;
  
  .partBtn{
  background-color:${Colors.primary};
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
  border-radius:5px;
  background-color: ${Colors.secondary400};

  img{
  width: 100%;
  }



`;


const IconContainerMobile = styled.div`

  display: flex;
  width: 100%;
  aspect-ratio: 1 / 1; /* 정사각형 유지 */
  border-radius: 5px;
  background-color: ${Colors.secondary400};

  img{
  width: 100%;
  }



`;
const RecruitingContainer = styled.div`


display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 150px;

.recruiting-text{
  font-family: 'Pretendard-Bold';
font-size: 50px;
color:white;
font-weight: 900;
}

.active-button{
display:flex;
padding: 10px 25px;
font-size: 20px;
font-weight: 600;
color: ${Colors.primary};
border: 2.5px solid ${Colors.primary};
border-radius: 30px;
margin: 2rem;

}
.disabled-button{
display:none;
padding: 10px 25px;
font-size: 20px;
font-weight: 600;
color: white;
border: 2.5px solid ${Colors.secondary200};
border-radius: 30px;
margin: 2rem;
background-color:${Colors.secondary200};
}


  @media screen and (max-width: 500px) {
  
.recruiting-text{
font-size: 30px;

}

.active-button{
font-size: 15px;

}
.disabled-button{
font-size: 15px;

}
    
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
      <div className="partcontainer-web">
      <PartContainer className="linefirst" onClick={() => handlePartClick("plan")}>
        <IconContainer>
          <img src={planIcon} alt="planIcon" />
        </IconContainer>
        <div className="partBtn">Plan</div>
      </PartContainer>
      <PartContainer className="linesecond" onClick={() => handlePartClick("design")}>
        <IconContainer>
          <img src={designIcon} alt="designIcon"/>
        </IconContainer>
        <div className="partBtn">Design</div>
      </PartContainer>
      <PartContainer className="linefirst" onClick={() => handlePartClick("android")}>
        <IconContainer>
          <img src={androidIcon} alt="androidIcon"/>
        </IconContainer>
        <div className="partBtn">Android</div>
      </PartContainer>
      <PartContainer className="linesecond" onClick={() => handlePartClick("web")}>
        <IconContainer>
          <img src={webIcon} alt="webIcon" />
        </IconContainer>
        <div className="partBtn">Web</div>
      </PartContainer>
      <PartContainer className="linefirst" onClick={() => handlePartClick("springboot")}>
        <IconContainer>
          <img src={springIcon} alt="springIcon"/>
        </IconContainer>
        <div className="partBtn">SpringBoot</div>
      </PartContainer>
      </div>

      <div className="partcontainer-mobile">
      <div className="linefirst-container">
      <PartContainerMibile className="plan-mobile" onClick={() => handlePartClick("PLAN")}>
        <IconContainerMobile>
          <img src={planIcon} alt="planIcon" />
        </IconContainerMobile>
        <div className="partBtn">Plan</div>
      </PartContainerMibile>
      <PartContainerMibile className="and-mobile" onClick={() => handlePartClick("ANDROID")}>
        <IconContainerMobile>
          <img src={androidIcon} alt="androidIcon"/>
        </IconContainerMobile>
        <div className="partBtn">Android</div>
      </PartContainerMibile>
      <PartContainerMibile className="spring-mobile" onClick={() => handlePartClick("SPRING_BOOT")}>
        <IconContainerMobile>
          <img src={springIcon} alt="springIcon"/>
        </IconContainerMobile>
        <div className="partBtn">SpringBoot</div>
      </PartContainerMibile>
      </div>
      <div className="linesecond-container">
      <PartContainerMibile className="design-mobile" onClick={() => handlePartClick("DESIGN")}>
        <IconContainerMobile>
          <img src={designIcon} alt="designIcon"/>
        </IconContainerMobile>
        <div className="partBtn">Design</div>
      </PartContainerMibile>
      <PartContainerMibile className="web-mobile" onClick={() => handlePartClick("WEB")}>
        <IconContainerMobile>
          <img src={webIcon} alt="webIcon" />
        </IconContainerMobile>
        <div className="partBtn">Web</div>
      </PartContainerMibile>
      </div>
      </div>
    </PartIconsContainer>
  );
};


const MainPage= () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

return (
  <>
    <Intro />
    <BreakTheRules />
    <Info/>
    <PartIcons/>
    <ImageContainer>
      <Img src={backGroundImg} alt="background" className="background-web"/>
      <Img src={backGroundImgMobile} alt="background" className="background-mobile"/>
      <FixedImgOT>
        <img src={otImg} alt="OT Image" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
      </FixedImgOT>
      <FixedImgCoreDay>
        <img src={coreDayImg} alt="CoreDay Image" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
      </FixedImgCoreDay>
      <FixedImgNetWorking>
        <img src={netWorkingImg} alt="netWorking Image" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
      </FixedImgNetWorking>
      <FixedImgStudy>
        <img src={studyImg} alt="netWorking Image" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
      </FixedImgStudy>
      <FixedImgMT>
        <img src={mtImg} alt="mt Image" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
      </FixedImgMT>
      <FixedImgPmday>
        <img src={pmdayImg} alt=" Image" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
      </FixedImgPmday>
      <FixedImgHackathon>
        <img src={hackathonImg} alt=" Image" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
      </FixedImgHackathon>
    </ImageContainer>
    <RecruitingContainer> 
      <div className="recruiting-text">RECRUITING</div>
      <div className="recruiting-text">START ! </div>
      <a href="https://forms.gle/4c356ToYRBTctdUH7" style={{ all: "unset", cursor: "pointer" }}>
      <div className="active-button">지원하기</div>
      </a>
      <div className="disabled-button">8기 모집이 완료되었습니다.</div>
    </RecruitingContainer>
    <MainFooter/>
  </>
);
}

export default MainPage;