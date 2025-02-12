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
  margin-top: 20px;
  font-size: 25px;
  font-weight: bold;

  @media screen and (max-width: 430px) {
    font-size: 20px;
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
  const [selectedGen, setSelectedGen] = useState(7);
  const generations = [7, 6, 5, 4, 3];

  return (
    <>
      <MainHeader />
      <ProjectPageContainer>
        <SubTitle>DDWU UMC 이전 기수 프로젝트</SubTitle>
        <ButtonContainer>
          {generations.map((gen) => (
            <GenButton
              key={gen}
              active={selectedGen === gen}
              onClick={() => setSelectedGen(gen)}
            >
              {gen}th
            </GenButton>
          ))}
        </ButtonContainer>
        <ProjectList
          projectData={projectData[selectedGen] || []}
          gen={selectedGen}
        />
      </ProjectPageContainer>
    </>
  );
}

export default ProjectPage;
