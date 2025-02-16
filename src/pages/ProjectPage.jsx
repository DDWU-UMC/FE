import React, { useState, useEffect } from "react";
import axios from "axios";
import headerImg from "../assets/underheaderImg.svg";
import styled from "styled-components";
import ProjectList from "../components/project/ProjectList";
import MainFooter from "../components/footer/MainFooter";
import Colors from "../constanst/colors";

const apiUrl = import.meta.env.VITE_API_URL;

const ProjectPageContainer = styled.div`
  width: 80%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  gap: 35px;
  font-size: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  min-height: 65vh;

  .sub-tile-container {
    margin: 9rem 0rem 2rem 0rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .sub-tile-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    width: 100%;
    height: auto;
    z-index: -1;
  }

  .sub-tile {
    position: relative;
    font-size: 23px;
    font-weight: bold;
    z-index: 1;
  }

  @media screen and (max-width: 530px) {
    min-height: 73vh;
  }

  @media screen and (max-width: 430px) {
    min-height: 76vh;
  }

  @media screen and (max-width: 690px) {
    font-size: 15px;

    .sub-tile-container {
      margin: 8.5rem 0rem 0rem 0rem;
    }
    @media screen and (max-width: 500px) {
      .sub-tile {
        font-size: 18px;
      }
    }
  }
  @media screen and (max-width: 430px) {
    gap: 30px;
  }
`;

const SubTitle = styled.div`
  margin-top: 100px;
  font-size: 23px;

  @media screen and (max-width: 430px) {
    font-size: 20px;
  }

  @media screen and (max-width: 690px) {
    margin-top: 130px;
    font-size: 20px;
  }
`;

const SearchFilterContainer = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 960px) {
    width: 70%;
  }

  @media screen and (max-width: 690px) {
    width: 80%;
  }

  @media screen and (max-width: 550px) {
    width: 90%;
  }

  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  padding: 8px;
  border-radius: 8px;
  background-color: #282828;
  border: 1px solid #585858;
  color: white;
  width: 90%;

  &:focus::placeholder {
    color: transparent;
  }

  @media screen and (max-width: 550px) {
    font-size: 11px;
  }

  @media screen and (max-width: 430px) {
    font-size: 10px;
  }
`;

const Dropdown = styled.select`
  width: 120px;
  padding: 6px 0px;
  border-radius: 8px;
  border: 1px solid #585858;
  background-color: #282828;
  color: #ffffff;
  text-align: center;

  &:hover {
    border: 1px solid #ba224d;
  }

  @media screen and (max-width: 550px) {
    font-size: 12px;
  }

  @media screen and (max-width: 430px) {
    font-size: 11px;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${Colors.secondary400};
`;

function ProjectPage() {
  const [projectData, setProjectData] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [cohortId, setCohortId] = useState([]);
  const [selectedGen, setSelectedGen] = useState("");
  const [selectedParseIntGen, setSelectedParseIntGen] = useState();
  const platforms = { 전체: "ALL", iOS: "IOS", Android: "ANDROID", Web: "WEB" };

  // 필터링된 프로젝트 데이터를 가져오는 api 호출 함수
  const fetchProjects = () => {
    axios
      .get(`${apiUrl}/projects`, {
        params: {
          cohortId: selectedParseIntGen ? selectedParseIntGen : undefined,
          type:
            selectedPlatform && selectedPlatform !== "전체"
              ? selectedPlatform
              : undefined,
          keyword: searchTerm ? searchTerm : undefined,
        },
      })
      .then((response) => {
        setProjectData(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  };

  useEffect(() => {
    const cohort = axios.get(`${apiUrl}/projects/cohort`);
    const projects = axios.get(`${apiUrl}/projects`);

    axios
      .all([cohort, projects])
      .then(
        axios.spread((responseOne, responseTwo) => {
          const cohortData = responseOne.data.result;

          const cohortMap = cohortData.reduce((acc, item) => {
            acc[item.name] = item.cohortId;
            return acc;
          }, {});
          setCohortId(cohortMap);

          setProjectData(responseTwo.data.result);
        })
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [selectedParseIntGen, selectedPlatform, searchTerm]);

  return (
    <>
      <ProjectPageContainer>
        <div className="sub-tile-container">
          <img className="sub-tile-bg" src={headerImg} alt="배경 이미지" />
          <div className="sub-tile">DDWU UMC 이전 기수 프로젝트</div>
        </div>
        <SearchFilterContainer>
          <SearchInput
            type="text"
            placeholder="🔍&nbsp;프로젝트명을 검색하세요." //🔍&nbsp;
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Dropdown
            value={selectedGen}
            onChange={(e) => {
              const selectedValue = e.target.value;
              setSelectedGen(selectedValue);
              setSelectedParseIntGen(cohortId[selectedValue]);
            }}
          >
            <option value="" disabled hidden>
              기수
            </option>
            <option key="All" value="All">
              전체
            </option>
            {Object.entries(cohortId).map(([key, value]) => (
              <option key={key} value={key}>
                {key} {/* 기수 이름 표시 */}
              </option>
            ))}
          </Dropdown>

          <Dropdown
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="" disabled hidden>
              플랫폼
            </option>
            {Object.entries(platforms).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </Dropdown>
        </SearchFilterContainer>
        <ProjectList projectData={projectData} gen={selectedParseIntGen} />
      </ProjectPageContainer>
      <FooterContainer>
        <MainFooter />
      </FooterContainer>
    </>
  );
}

export default ProjectPage;
