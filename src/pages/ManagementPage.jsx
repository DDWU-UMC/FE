import React from "react";
import MainHeader from "../components/header/MainHeader"; 
import styled from "styled-components";

const ManagementPageContainer = styled.div`
  max-width: 100%
  margin: 0 auto;
  padding: 0 20px; 
  gap: 40px; 
  font-size: 20px;
  color: white;
  display: flex; 
  flex-direction: column;
  align-items: center; 

  .sub-tile{
  margin-top: 20px;
  font-size: 23px;
  }
  @media screen and (max-width: 630px) {
    font-size: 15px;
  }

`;

const ManagementListContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* 기본적으로 왼쪽 정렬 */
  gap: 40px; /* gap 값을 40px로 설정 */
  color: white;


  @media screen and (max-width: 768px) {
      justify-content: space-evenly; /* 작은 화면에서는 왼쪽 정렬 */
gap: 40px 0px;
    align-items: flex-start; /* 요소들이 왼쪽부터 차례로 배치되게 */
  }

`;

const ManagementContainer = styled.div`
  flex: 0 0 calc((100% - 80px) / 3);
  max-width: calc((100% - 80px) / 3);
  
  padding: 20px; 
  background-color: rgba(54, 54, 54, 0.7);
  border-radius: 18px;
  box-sizing: border-box;

  .profile-wrapper {
    display: flex;
    justify-content: center; /* 프로필 이미지만 가로 중앙 정렬 */
  }

  .profileImg {
    width: 150px;
    height: 150px;
    background-color: #575757;
    border-radius: 100px;
    box-shadow: inset 0px 4px 3px rgba(0, 0, 0, 0.25);
  }
  
  .position {
    font-size: 18px;
    margin: 8px 10px;
  }
  
  .name {
    font-size: 13px;
    margin: 8px 10px;
    color: rgba(255, 255, 255, 0.6);
  }
  
  .management-intro {
    font-size: 13px;
    margin: 8px 10px;
    color: rgba(255, 255, 255, 0.6);
  }
  
  .career {
    padding-left: 12px;
    font-size: 13px;
    margin: 0px 10px 15px;
    color: rgba(255, 255, 255, 0.6);
  }

  @media screen and (max-width: 768px) {
    flex: 0 0 calc((100% - 120px) / 2);
    max-width: calc((100% - 120px) / 2);
  }
  
  @media screen and (max-width: 630px) {
    flex: 0 0 calc((100% - 100px) / 2);
    max-width: calc((100% - 100px) / 2);

    .profileImg {
      width: 120px;
      height: 120px;
      background-color: #575757;
      border-radius: 100px;
      box-shadow: inset 0px 4px 3px rgba(0, 0, 0, 0.25);
    }
    
    .position {
      font-size: 12px;
      margin: 8px 10px;
    }
    
    .name {
      font-size: 10px;
      margin: 8px 10px;
      color: rgba(255, 255, 255, 0.6);
    }
    
    .management-intro {
      font-size: 10px;
      margin: 8px 10px;
      color: rgba(255, 255, 255, 0.6);
    }
    
    .career {
      padding-left: 10px;
      font-size: 10px;
      margin: 0px 10px 15px;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  @media screen and (max-width: 560px) {
    flex: 0 0 60%;
    max-width: 60%;

     
    .profileImg {
      width: 130px;
      height: 130px;
      background-color: #575757;
      border-radius: 100px;
      box-shadow: inset 0px 4px 3px rgba(0, 0, 0, 0.25);
    }
    
    .position {
      font-size: 12px;
      margin: 8px 10px;
    }
    
    .name {
      font-size: 10px;
      margin: 8px 10px;
      color: rgba(255, 255, 255, 0.6);
    }
    
    .management-intro {
      font-size: 10px;
      margin: 8px 10px;
      color: rgba(255, 255, 255, 0.6);
    }
    
    .career {
      padding-left: 12px;
      font-size: 10px;
      margin: 0px 10px 15px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
     @media screen and (max-width: 460px) {
  flex: 0 0 70%;
    max-width: 70%;
  }
}
`
const Managements = () => {
  return (
    <ManagementContainer>
      <div className="profile-wrapper">
        <div className="profileImg"></div>
      </div>
      <div className="position">직책</div>
      <div className="name">
        <span>닉네임</span>
        <span>/</span>
        <span>이름</span>
      </div>
      <div className="management-intro">끝까지 해내는 용기, 함께합시다!</div>
      <ul className="career">
        <li>DDUMC 5th WEB 챌린저</li>
        <li>DDUMC 6th ANDROID 파트장</li>
        <li>DDUMC 7th 회장</li>
        <li>DDUMC 8th 부회장</li>
      </ul>
    </ManagementContainer>
  );
};



function ManagementPage() {
  return (
    <>
      <MainHeader /> 
      <ManagementPageContainer>
      <div className="sub-tile">DDWU UMC 운영진</div>
      <ManagementListContainer>
      <Managements></Managements>
      <Managements></Managements>
      <Managements></Managements>
      <Managements></Managements>
      <Managements></Managements>
      <Managements></Managements>

      </ManagementListContainer>
      </ManagementPageContainer>
     
    </>
  );
}

export default ManagementPage;