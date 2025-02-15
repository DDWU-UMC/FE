import React, { useEffect, useState } from "react";
import axios from "axios";
import MainHeader from "../components/header/MainHeader"; 
import MainFooter from "../components/footer/MainFooter";
import styled from "styled-components";
import Colors from "../constanst/colors";
import headerImg from "../assets/underheaderImg.svg";
const apiUrl = import.meta.env.VITE_API_URL;

const ManagementPageContainer = styled.div`
  width:80%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px; 
  gap: 40px; 
  font-size: 20px;
  color: white;
  display: flex; 
  flex-direction: column;
  align-items: center; 
  margin-bottom: 50px;

  .sub-tile-container {
 
  margin: 9rem 0rem 2rem 0rem;
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
  font-size: 23px;
  font-weight: bold;
  z-index: 1;
}
 
  @media screen and (max-width: 690px) {
    font-size: 15px;

  .sub-tile-container {
 
  margin: 8.5rem 0rem 0rem 0rem;

}
  }

`;

const ManagementListContainer = styled.div`
  width: 90%; /* 화면 크기에 맞춰 조정 */
  max-width: 1200px; /* 최대 크기 제한 */
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr)); 
  gap: 40px;
  justify-content: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  @media (max-width: 600px) {
  
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
`;
const ManagementContainer = styled.div`

  max-width: 100%;
  
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
      <ManagementPageContainer >
      <div className="sub-tile-container">
  <img className="sub-tile-bg" src={headerImg} alt="배경 이미지" />
  <div className="sub-tile">DDWU UMC 운영진</div>
</div>
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