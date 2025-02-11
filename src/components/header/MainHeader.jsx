import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;


  .logo {
    margin: 0 2rem;
    font-size: 2rem;
    cursor: pointer;
    margin-top: 8px;
    width: 250px;
  }

  .header__menulist {
    margin-right: 1rem;
    list-style: none;
    display: flex;
  }

  .header__left {
    display: flex;
  }

  .header__right {
    list-style: none;
    display: flex;
  }

  .header__right div {
    margin: 0 1rem;
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
  .toggle {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;

    .header__menulist {
      display: ${(props) => (props.isToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: black;
    }

    .header__menulist li,
    .header__right li {
      margin: 1rem 0;
      padding: 0;
    }

    .header__menulist li:hover {
      transform: none; /* 크기 변화 없앰 */
      font-size: inherit; /* 폰트 크기 기본으로 설정 */
    }

    .apply {
      background-color: black;
      border: none;
    }
    .toggle {
      display: block;
    }
  }
  @media screen and (max-width: 470px) {
    .logo {
      margin: 0 2rem;
      font-size: 2rem;
      cursor: pointer;
      margin-top: 10px;
      width: 180px;
    }
  }
`;

const Logo = styled.div`
  width: 100px;
  height: 20px;
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
        <div onClick={handleLogoClick}>
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div
          className="toggle"
          onClick={() => {
            setIsToggled(!isToggled);
          }}
        >
          <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
        </div>
        {/* 메뉴 리스트 */}
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
