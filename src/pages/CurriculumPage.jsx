import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Colors from "../constanst/colors.mjs";
import headerImg from "../assets/underheaderImg.svg";
import axios from "axios";
import CurriculumData from "../database/curriculumData.json";
import MainFooter from "../components/footer/MainFooter";

const apiUrl = import.meta.env.VITE_API_URL;

const CurriculumsPageContainer = styled.div`
  width: 80%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  gap: 40px;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  .sub-tile-container {
    margin: 9rem 0rem 0rem 0rem;
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

  @media screen and (max-width: 500px) {
    .sub-tile {
      font-size: 18px;
    }
  }
`;

const PartInfo = styled.div`
  background-color: ${Colors.secondary400};
  padding: 30px;
  color: white;
  border-radius: 10px;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .name-english {
    width: fit-content;
    font-size: 15px;
    font-weight: 600;
    padding: 4px 12px;
    display: inline-block;
    border-radius: 5px;
    background-color: ${Colors.primary};
  }
  .name-korean {
    margin-left: 3px;
    font-size: 25px;
    font-weight: 500;
  }
  .part-icon {
    margin-left: 5px;
    padding-top: 1.5px;
    width: 23px;
    height: 23px;
  }
  .part-info {
    margin-left: 3px;
    font-size: 15px;
    margin-top: 3px;
  }

  @media screen and (max-width: 430px) {
    .name-english {
      font-size: 11px;
      padding: 3px 8px;
    }
    .name-korean {
      font-size: 22px;
    }
    .part-icon {
      margin-left: 5px;
      margin-top: 2px;
      width: 18px;
      height: 18px;
    }
    .part-info {
      font-size: 13px;
    }
  }
`;

const PartCurriculum = styled.div`
  background-color: ${Colors.secondary400};
  padding: 30px;
  color: white;
  border-radius: 10px;
  margin-top: 20px;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .ordered-nav {
  position: relative;
  list-style: none; /* 기본 리스트 스타일 제거 */
  margin: 0;
  padding: 0;
  display: block;
}

.ordered-nav::before {
  /* 세로선 */
  content: '';
  height: 95%;
  position: absolute;
  left: 5px;
  top: 0;
  width: 1px;
  background-color: ${Colors.secondary200};
}

.ordered-nav--link {
  padding-left: 1.5rem;
  margin: 1rem 0;
  position: relative;
}

.ordered-nav--link::before {
  /* 각 항목의 원형 아이콘 */
  content: '';
  position: absolute;
  top: 20%;
  left: 0;
  width: 5px;
  height: 5px;
  background-color: white;
  border: 3px solid white;
  border-radius: 50%;
  transform: translateY(-50%);
  box-shadow: 
    0px 6px 15px rgba(255, 255, 255, 0.25), 
    0px -6px 15px rgba(255, 255, 255, 0.12), 
    6px 0px 15px rgba(255, 255, 255, 0.12),
    -6px 0px 15px rgba(255, 255, 255, 0.12);
}

.ordered-nav--link:first-child{
margin-top:0;
}
/* 첫 번째 요소 조정 */
.ordered-nav--link:first-child::before {
  top: 0;
  transform: none;
}

/* 마지막 요소 조정 */
.ordered-nav--link:last-child {
  margin-bottom: 0;
}
 .week{
 font-weight: 600;
 font-size: 16px;
margin-left: 8px;
 }
 .content{
 font-weight: 300;
 font-size: 13px;
 margin-left: 8px;
 margin-top: 8px;

 }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 20px;

  @media screen and (max-width: 430px) {
    gap: 12px;
    margin-bottom: 0px;
  }
`;
const PartButton = styled.button`
  background-color: ${(props) =>
    props.$active === "true" ? Colors.primary : Colors.btn};
  color: ${(props) =>
    props.$active === "true" ? "white" : Colors.secondary50};
  border: 1px solid
    ${(props) =>
      props.$active === "true" ? Colors.primary : Colors.primary900};
  padding: 5px 17px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;

  @media screen and (max-width: 600px) {
    padding: 6px 8px;
    font-size: 13px;
  }

  @media screen and (max-width: 430px) {
    padding: 7px 7px;
    font-size: 10px;
  }
`;

const Parts = ({ selectedPart }) => {
  const filteredData = CurriculumData.filter(
    (part) => part.part === selectedPart
  );
  const [curriculumData, setCurriculumData] = useState([]);
  const [error, setError] = useState(null);

  const formatPartName = (part) => {
    const specialCases = {
      springboot: "Spring Boot",
      web: "Web",
      android: "Android",
      design: "Design",
      plan: "Plan",
    };

    const lowerPart = part.toLowerCase();
    return (
      specialCases[lowerPart] ||
      lowerPart.charAt(0).toUpperCase() + lowerPart.slice(1)
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/curriculums`, {
          params: { partType: selectedPart },
        });

        if (response.data.isSuccess) {
          setCurriculumData(response.data.result);
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        console.error("API 호출 오류:", error.message);
        setError(error.message);
      }
    };

    fetchData();
  }, [selectedPart]);

  return (
    <>
      {filteredData.map((part) => (
        <div key={part.part}>
          <PartInfo>
            <div className="name-english">{formatPartName(part.part)}</div>

            <div style={{ display: "flex" }}>
              <div className="name-korean">{part.partKorean}</div>
              <div>
                <img className="part-icon" src={part.icon} alt="icon" />
              </div>
            </div>

            <div className="part-info">{part.info}</div>
          </PartInfo>

          <PartCurriculum>
            <ol className="ordered-nav">
              {curriculumData
                .sort((a, b) => a.week - b.week) // 주차 순서대로 정렬
                .map((week) => (
                  <li key={week.curriculumId} className="ordered-nav--link">
                    <div className="week">{week.week}주차</div>
                    <div className="content">{week.content}</div>
                  </li>
                ))}
            </ol>
          </PartCurriculum>
        </div>
      ))}
    </>
  );
};

const CurriculumPage = () => {
  const { part } = useParams();
  const [selectedPart, setSelectedPart] = useState(part || "PLAN");

  const parts = ["plan", "design", "android", "web", "springboot"];

  const partNamesInBTN = {
    plan: "Plan",
    design: "Design",
    android: "Android",
    web: "Web",
    springboot: "Spring Boot",
  };

  useEffect(() => {
    if (part) {
      setSelectedPart(part);
    }
  }, [part]);

  return (
    <>
      <CurriculumsPageContainer>
        <div className="sub-tile-container">
          <img className="sub-tile-bg" src={headerImg} alt="배경 이미지" />
          <div className="sub-tile">DDWU UMC 파트 커리큘럼</div>
        </div>
        <ButtonContainer>
          {parts.map((part) => (
            <PartButton
              key={part}
              $active={selectedPart === part ? "true" : "false"}
              onClick={() => setSelectedPart(part)}
            >
              {partNamesInBTN[part]}
            </PartButton>
          ))}
        </ButtonContainer>

        <Parts selectedPart={selectedPart} />
      </CurriculumsPageContainer>
      <MainFooter/>
    </>
  );
};
export default CurriculumPage;
