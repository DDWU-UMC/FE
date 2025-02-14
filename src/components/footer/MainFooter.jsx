import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import instargram from "../../assets/instargram.svg";
import kako from "../../assets/kakao.svg";
import mail from "../../assets/mail.svg";
import symbol from "../../../public/symbol.svg";
import Colors from "../../constanst/colors";

const StyledFooter = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${Colors.secondary400};
  
   padding-top: 2rem;
   padding-bottom: 2rem;
  
   @media screen and (max-width: 530px) {

   padding-top: 1rem;
   padding-bottom: 1rem;

   
   }
`

const FooterContainer = styled.div`


  .icon-container{

  display: flex;
  gap: 10px;
  margin-left: 40px;

  }
  .logo{
  width: 180px;
  }
  .instargram, .kakao, .mail{
    width: 40px;
  }
    .symbol{
    display:none;
    }

  .copyright-notice{
  margin-left: 40px;
  color: white;
  margin-top: 25px;
  font-size: 14px;
  font-weight: 400;

  }

   @media screen and (max-width: 530px) {

    .icon-container{
    margin-left: 20px;
  }
   .logo{
  width: 150px;
  }
  .instargram, .kakao, .mail{
    width: 30px;
  }

  .copyright-notice{
  margin-top: 18px;
  font-size: 12px;
  font-weight: 400;
  margin-left: 20px;

  }

  @media screen and (max-width: 430px) {

 
   .logo{
  display:none;
  }
  .symbol{
  display:block;
  width: 40px;

  }
  .instargram, .kakao, .mail{
  margin-top:6px;
    width: 30px;

  }

  .copyright-notice{
  margin-top: 18px;
  font-size: 9px;
  font-weight: 400;
   margin-left: 20px;

  }
   
   }
`
const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  font-size: 14px;
  color: white;
  margin-left: 40px;

   @media screen and (max-width: 530px) {
     margin-top: 18px;
     font-size: 12px;
     margin-left: 20px;
   }
   @media screen and (max-width: 430px) {
     font-size: 9px;
   
   }
`;

const TeamMember = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px; /* 원하는 너비 */
  margin-bottom: 3px;
`;

const Role = styled.div`
  flex-basis: 100px; /* 역할 고정 너비 */
  text-align: left;
`;

const Nickname = styled.div`
  flex-basis: 150px; /* 닉네임 고정 너비 */
  text-align: left;
`;

const MemberList = [
  { role: "PM", nickname: "김희선 노하영" },
  { role: "Design", nickname: "맹소현" },
  { role: "Front-end", nickname: "김희선 장고은" },
  { role: "Back-end", nickname: "강도경 박세은" }
];

const Team = () => {
  return (
    <TeamContainer>
      {MemberList.map((member, index) => (
        <TeamMember key={index}>
          <Role>{member.role}</Role>
          <Nickname>{member.nickname}</Nickname>
        </TeamMember>
      ))}
    </TeamContainer>
  );
};


function MainFooter() {

    return (
        <StyledFooter>
            <FooterContainer>
            <div className="icon-container">
                <img src={logo} className="logo"/>
                <img src={symbol} className="symbol"/>
                <a href="https://www.instagram.com/ddwu_makeus_challenge?igsh=dmd5dGpidHo5angy&utm_source=qr">
                <img src={instargram} className="instargram"/>
                </a>
                <a href="">
                <img src={kako} className="kakao"/>
                </a>
               <a href="mailto:ddwu0umc@gmail.com">
                <img src={mail} className="mail"/>
                </a>
            </div>
            <div className="copyright-notice">
            DDWU University MakeUs Challenge (동덕여대 유엠씨, 대학생 IT 연합동아리)<br/>
            Copyright 2025. DDWU UMC. All rights reserved.
            </div>
            <Team/>
            </FooterContainer>
        </StyledFooter>
      
    );
  }
  
  export default MainFooter;