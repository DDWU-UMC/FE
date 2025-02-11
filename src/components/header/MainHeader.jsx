import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import symbol from "../../assets/symbol.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  .logo {
    margin-left: 1rem;
    font-size: 2rem;
    cursor: pointer;
    margin-top: 8px;
    width: 200px;
    padding: 0px;
  }
 .symbol {
    display:none;
  }
  .header__menulist {
    margin-right: 1rem;
    list-style: none;
    display: flex;
  }


  li {
    padding: 0.5rem 1.5rem;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  li:hover {
    transform: scale(1.1);
  }

  .apply {
    background-color: #941b3d;
    border-radius: 3px;
    border: 1px solid #ba224d;
  }

  .apply:hover {
    transform: none;
    cursor: pointer;
  }
   .apply-mobile {
    display:none;
  }

 @media screen and (max-width: 920px) {

 font-size: 14px;
 li {
    padding: 0.5rem 1rem;
    transition: color 0.3s ease, transform 0.3s ease;
  }
}


  

  @media screen and (max-width: 690px) {
   font-size: 12px;
    flex-direction: column;

  .header-mobile {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
  }

  .header__menulist {
    display: flex;
    width: 90%;
justify-content: space-between;
    margin: 0 0rem;
    padding:0px;
  }

  .header__menulist li {
    margin: 2rem 0;
    padding: 0;
  }

  .logo {
    display: none;
  }

  .symbol {
    display: block;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 20px;
    width: 40px;
  }

  .header__menulist li:hover {
    transform: none; /* 크기 변화 없앰 */
    font-size: inherit; /* 폰트 크기 기본으로 설정 */
  }

  .apply {
    display: none;
  }
    .apply-mobile{
    padding: 7px;
    display: block;
      margin-right: 10px;
    margin-top: 20px;
     background-color: #941b3d;
    border-radius: 3px;
    border: 1px solid #ba224d;
    }

  .apply-mobile:hover {
    transform: none;
    cursor: pointer;
  }
}
   
`;


function MainHeader() {
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleProjectPageClick = () => {
    navigate("/projects");
  };

  const handleManagementPageClick = () => {
    navigate("/management");
  };


  const handleCurriculumPageClick = () => {
        navigate("/curriculum");
   };

  const handleFAQPageClick = () => {
    navigate("/faq");
  };
  return (
      <Header isToggled={isToggled}>
        <div className="header-mobile">
        <div onClick={handleLogoClick}>
          <img className="logo" src={logo} alt="Logo" />
          <img className="symbol" src={symbol} alt="Logo" />
        </div>
        <div className="apply-mobile">지원하기</div>
        </div>
        <ul className="header__menulist">
          <li onClick={handleProjectPageClick}>프로젝트</li>
          <li onClick={handleManagementPageClick}>운영진 소개</li>
          <li onClick={handleCurriculumPageClick}>커리큘럼</li>
          <li onClick={handleFAQPageClick}>FAQ</li>
          <li className="apply">지원하기</li>
        </ul>
      </Header>
  );

}

export default MainHeader;
