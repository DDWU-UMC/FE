import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import symbol from '../../assets/symbol.svg';
import Colors from "../../constanst/colors";

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* 배경을 약간 투명하게 */
  z-index: 1000; /* 다른 요소들보다 위에 위치하도록 설정 */
   @media screen and (max-width: 690px) {
   
   }
`


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
    display: none;
  }
  .header__menulist {
    margin-right: 1rem;
    list-style: none;
    display: flex;
  }

  li {
    color: ${Colors.secondary100};
    padding: 0.5rem 1.5rem;
    transition: color 0.3s ease, transform 0.3s ease;
    cursor: pointer;
  }

  li:hover {
    transform: scale(1.1);

  }
    .active {
    transform: scale(1.1);
    color: ${Colors.primary};
  }

  .apply {
    background-color: #941b3d;
    border-radius: 3px;
    border: 1px solid #ba224d;
    color: white;
  }

  .apply:hover {
    transform: none;
    cursor: pointer;
    transform: none;
    color: white;
  }
  .apply-mobile {
    display: none;
  }

  @media screen and (max-width: 920px) {
    font-size: 14px;
    li {
      padding: 0.5rem 1rem;
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
      width: 100%;
      justify-content: space-between;
      margin: 0 0rem;
      padding: 0px;
    }

    .header__menulist li {
      text-align: center;
      font-size: 13px;
      width: 100%;
      margin: 1rem 0.3rem;
      margin-bottom: 0px;
      padding: 15px 0px;

      padding-top:0px;
    }

    li:hover {
      transform: none;

      color: inherit;
    }

    .active {
      transform: none;
      color: white;
      border-bottom: 2px solid white;
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

    .apply {
      display: none;
    }

    .apply-mobile {
      padding: 7px;
      display: block;
      margin-right: 10px;
      margin-top: 20px;
      background-color: #941b3d;
      border-radius: 3px;
      border: 1px solid #ba224d;
    }
  }
`;

function MainHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <StyledHeader>
    <Header>
      <div className="header-mobile">
        <div onClick={() => navigate("/")}>
          <img className="logo" src={logo} alt="Logo" />
          <img className="symbol" src={symbol} alt="Logo" />
        </div>
        <a href="https://forms.gle/4c356ToYRBTctdUH7" style={{ all: "unset" }}>
        <div className="apply-mobile">지원하기</div>
        </a>
      </div>
      <ul className="header__menulist">
        <li
          className={location.pathname === "/projects" ? "active" : ""}
          onClick={() => navigate("/projects")}
        >
          프로젝트
        </li>
        <li
          className={location.pathname === "/management" ? "active" : ""}
          onClick={() => navigate("/management")}
        >
          운영진 소개
        </li>
        <li
          className={location.pathname.startsWith("/curriculum") ? "active" : ""}
          onClick={() => navigate("/curriculum/plan")}
        >
          커리큘럼
        </li>
        <li
          className={location.pathname === "/faq" ? "active" : ""}
          onClick={() => navigate("/faq")}
        >
          FAQ
        </li>
        <a href="https://forms.gle/4c356ToYRBTctdUH7" style={{ all: "unset" }}>
        <li className="apply">지원하기</li>
        </a>
      </ul>
    </Header>
    </StyledHeader>
  );
}

export default MainHeader;