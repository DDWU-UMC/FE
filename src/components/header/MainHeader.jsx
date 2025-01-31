import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


const Header = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;

  .logo {
    margin: 0 2rem;
    font-size: 2rem;
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
    padding: 0 1rem;
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

    .toggle {
      display: block;
    }

  }
`;

function MainHeader() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Header isToggled={isToggled} >
      
      <div className="logo">
       로고 {/* 추후에 로고 삽입*/}
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
        <li>프로젝트</li>
        <li>운영진소개</li>
        <li>커리큘럼</li>
        <li>FAQ</li>
      </ul>

    </Header>
  );
}

export default MainHeader;