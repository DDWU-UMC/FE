import React, { useState, useEffect } from "react";
import styled from "styled-components";
import headerImg from "../assets/underheaderImg.svg";
import ProjectList from "../components/project/ProjectList";
import MainFooter from "../components/footer/MainFooter";
import Colors from "../constanst/colors.mjs";
import projectsData from "../database/projectsData.json";

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
  min-height: 90vh;
  

  @media screen and (max-width: 530px) {
    min-height: 72vh;
  }

  @media screen and (max-width: 430px) {
    min-height: 74vh;
  }
`;

const SubTitleContainer = styled.div`
  margin: 9rem 0rem 0rem 0rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 690px) {
    margin: 8.5rem 0rem 0rem 0rem;
  }
`;

const SubTitleBG = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  width: 100%;
  height: auto;
  z-index: -1;
`;

const SubTitle = styled.div`
  position: relative;
  font-size: 30px;
  font-weight: bold;
  z-index: 1;

  @media screen and (max-width: 690px) {
    font-size: 25px;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const SearchFilterContainer = styled.div`
  width: 65%;
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
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media screen and (max-width: 430px) {
    width: 90%;
  }
`;

const SearchInput = styled.input`
  padding: 8px;
  border-radius: 8px;
  background-color: #282828;
  border: 1px solid #585858;
  color: white;
  width: 100%;

  &:focus::placeholder {
    color: transparent;
  }

  @media screen and (max-width: 550px) {
    font-size: 12px;
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
    width: 60px;
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
  const [selectedCohort, setSelectCohort] = useState("");

    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);  


  useEffect(() => {
    const filteredProjects = projectsData.result.filter((project) => {
      const matchesPlatform = selectedPlatform && selectedPlatform !== "ALL" ? project.serviceType === selectedPlatform : true;
      const matchesSearch = searchTerm ? project.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
      const matchesCohort = selectedCohort && selectedCohort !== "ALL" ? project.cohort === selectedCohort: true;

      return matchesPlatform && matchesSearch && matchesCohort;
    });
    setProjectData(filteredProjects);
  }, [ selectedPlatform, searchTerm, selectedCohort]);

  return (
    <>
      <ProjectPageContainer>
        <SubTitleContainer>
          <SubTitleBG src={headerImg} alt="배경 이미지" />
          <SubTitle>DDWU UMC 이전 기수 프로젝트</SubTitle>
        </SubTitleContainer>
        <SearchFilterContainer>
          <SearchInput
            type="text"
            placeholder="🔍 프로젝트명을 검색하세요."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Dropdown
            value={selectedCohort}
            onChange={(e) => setSelectCohort(e.target.value)}
          >
            <option value="" disabled hidden>
              기수
            </option>
            <option value="ALL">전체</option>
            <option value="7기">7기</option>
            <option value="6기">6기</option>
            <option value="5기">5기</option>
            <option value="4기">4기</option>
            
          </Dropdown>
          <Dropdown
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="" disabled hidden>
              플랫폼
            </option>
            <option value="ALL">전체</option>
            <option value="IOS">iOS</option>
            <option value="ANDROID">Android</option>
            <option value="WEB">Web</option>
          </Dropdown>
        </SearchFilterContainer>
        <ProjectList projectData={projectData} />
      </ProjectPageContainer>
      <FooterContainer>
        <MainFooter />
      </FooterContainer>
    </>
  );
}

export default ProjectPage;
