import React, { useState } from "react";
import MainHeader from "../components/header/MainHeader";
import styled from "styled-components";
import ProjectList from "../components/project/ProjectList";
import projectData from "../database/projectData";

const ProjectPageContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  gap: 35px;
  font-size: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

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
`;

const SearchFilterContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchInput = styled.input`
  padding: 8px;
  border-radius: 8px;
  background-color: #282828;
  border: 1px solid #585858;
  color: white;
  width: 100%;
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
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;

  @media screen and (max-width: 430px) {
    gap: 10px;
  }
`;

const GenButton = styled.button`
  background-color: ${(props) => (props.active ? "#ba224d" : "#4a0d1e")};
  color: white;
  border: 2px solid ${(props) => (props.active ? "#ba224d" : "#370a17")};
  padding: 5px 20px;
  border-radius: 4px;
  cursor: pointer;

  @media screen and (max-width: 430px) {
    padding: 3px 15px;
    font-size: 10px;
  }
`;

function ProjectPage() {
  const [selectedGen, setSelectedGen] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const generations = ["전체", "7기", "6기", "5기", "4기", "3기"];
  const platforms = ["전체", "iOS", "Android", "Web"];

  const allProjects = Object.values(projectData).flat(); // 모든 프로젝트 배열로 변환

  const filteredProjects = allProjects.filter((project) => {
    return (
      (selectedGen === "전체" || project.gen == selectedGen) &&
      (selectedPlatform === "전체" || project.platform === selectedPlatform) &&
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <MainHeader />
      <ProjectPageContainer>
        <SubTitle>DDWU UMC 이전 기수 프로젝트</SubTitle>
        <SearchFilterContainer>
          <SearchInput
            type="text"
            placeholder="프로젝트명을 검색하세요."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Dropdown
            value={selectedGen}
            onChange={(e) => setSelectedGen(e.target.value)}
          >
            <option value="" disabled hidden>
              기수
            </option>
            {generations.map((gen) => (
              <option key={gen} value={gen}>
                {gen}
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
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </Dropdown>
        </SearchFilterContainer>
        <ProjectList
          projectData={projectData[selectedGen] || []}
          gen={selectedGen}
        />
      </ProjectPageContainer>
    </>
  );
}

export default ProjectPage;
