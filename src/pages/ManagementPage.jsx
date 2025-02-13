import React, { useEffect, useState } from "react";
import axios from "axios";
import MainHeader from "../components/header/MainHeader"; 
import styled from "styled-components";
import Colors from "../constanst/colors";
const apiUrl = import.meta.env.VITE_API_URL;

const ManagementPageContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px; 
  gap: 40px; 
  font-size: 20px;
  color: white;
  display: flex; 
  flex-direction: column;
  align-items: center; 

  .sub-tile{
  margin-top: 100px;
  font-size: 23px;
  }
  @media screen and (max-width: 690px) {
    font-size: 15px;

    .sub-tile{
  margin-top: 130px;
  font-size: 20px;
  }
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

;
`;
const ManagementContainer = styled.div`
  flex: 0 0 calc((100% - 80px) / 3);
  max-width: calc((100% - 80px) / 3);
  
  padding: 20px; 
  background-color: ${Colors.secondary400};
  border-radius: 8px;
  box-sizing: border-box;

  .profile-wrapper {
    display: flex;
    justify-content: center; /* 프로필 이미지만 가로 중앙 정렬 */
  }

  .profileImg {
    width: 180px;
    height: 180px;
    background-color: #575757;
    border-radius: 100px;
    box-shadow: inset 0px 4px 3px rgba(0, 0, 0, 0.25);
  }
  
  .position {
    font-size: 15px;
    margin: 8px 10px;
    margin-top: 15px;
    font-weight: 500;
    color: ${Colors.primary400};
  }
  
  .name {
    font-size: 17px;
    font-weight:600;
    margin: 10px 10px;
    color: white;
  }
  
  .management-intro {
    font-size: 13px;
    margin: 12px 10px;
    color: rgba(255, 255, 255, 0.6);
  }
  
  .career {
    font-size: 13px;
    margin: 15px 10px 15px;
    color: rgba(255, 255, 255, 0.6);
  }
ul {
  list-style-type: none; /* 기본 점 제거 */
  padding-left: 0; /* 기본 들여쓰기 제거 */
}

ul li::before {
  content: " - "; /* 항목 앞에 대시 추가 */
  margin-right: 8px; /* 대시와 텍스트 간격 조정 */
}
ul li {
  margin-bottom: 3px; /* 항목들 사이 간격 추가 */
}
  @media screen and (max-width: 768px) {
    flex: 0 0 calc((100% - 120px) / 2);
    max-width: calc((100% - 120px) / 2);
  }
  
  @media screen and (max-width: 630px) {
    flex: 0 0 calc((100% - 100px) / 2);
    max-width: calc((100% - 100px) / 2);

    .profileImg {
      width: 165px;
      height: 165px;
    }
    
    .position {
      font-size: 13px;
      margin: 8px 10px;
    }
    
    .name {
      font-size: 14px;
      font-weight: 500;
      margin: 8px 10px;
 
    }
    
    .management-intro {
      font-size: 11px;
      margin: 8px 10px;
      color: rgba(255, 255, 255, 0.6);
    }
    
    .career {
     
      font-size: 11px;
      margin: 4px 10px 15px;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  @media screen and (max-width: 560px) {
    flex: 0 0 60%;
    max-width: 60%;

     
    .profileImg {
      width: 160px;
      height: 160px;
  
    }
    
    .position {
      font-size: 12px;
      margin: 8px 10px;
    }
    
    .name {
      font-size: 13px;
      margin: 8px 10px;
     
    }
    
    .management-intro {
      font-size: 11px;
      margin: 8px 10px;
    
    }
    
    .career {
  
      font-size: 10px;
      margin: 0px 10px 15px;
    }
  }
     @media screen and (max-width: 460px) {
  flex: 0 0 70%;
    max-width: 70%;
    .profileImg {
      width: 150px;
      height: 150px;
  
    }
       @media screen and (max-width: 350px) {
  flex: 0 0 70%;
    max-width: 70%;
    .profileImg {
      width: 140px;
      height: 140px;
  
    }
  }
}
`;
const Managements = ({ admin }) => {
  return (
    <ManagementContainer key={admin.clubAdminId}>
      <div className="profile-wrapper">
        <img className="profileImg" src={admin.image.fileUrl} alt={admin.name} />
      </div>
      <div className="text-wrapper">
        <div className="position">{admin.role}</div>
        <div className="name">
          <span>{admin.nickname}</span>
          <span> · </span>
          <span>{admin.name}</span>
        </div>
        <div className="management-intro">{admin.commitment}</div>
        <ul className="career">
          {admin.roleHistories.map((history) => (
            <li key={history.id}>{history.content}</li>
          ))}
        </ul>
      </div>
    </ManagementContainer>
  );
};


function ManagementPage() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/club-admins`)
      .then((response) => {
        setAdmins(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <MainHeader />
      <ManagementPageContainer>
        <div className="sub-tile">DDWU UMC 운영진</div>
        <ManagementListContainer>
          {admins.map((admin) => (
            <Managements key={admin.clubAdminId} admin={admin} />
          ))}
        </ManagementListContainer>
      </ManagementPageContainer>
    </>
  );
}

export default ManagementPage;