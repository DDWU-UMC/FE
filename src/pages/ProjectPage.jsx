import React, { useState } from "react";
import MainHeader from "../components/header/MainHeader";
import styled from "styled-components";
import ProjectList from "../components/project/ProjectList";
import projectData from "../data/projectData";

const ProjectPageContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  gap: 40px;
  font-size: 20px;
  color: white;
  background-color: black;
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
    font-size: 23px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;

  @media screen and (max-width: 430px) {
    gap: 14px;
  }
`;

const GenButton = styled.button`
  background-color: ${(props) =>
    props.active ? "rgb(105, 9, 38)" : "#602133"};
  color: white;
  font-weight: ${(props) => (props.active ? "800" : "400")};
  border: none;
  padding: 6px 20px;
  border-radius: 10px;
  cursor: pointer;

  @media screen and (max-width: 430px) {
    padding: 3px 17px;
    font-size: 12px;
  }
`;

function ProjectPage() {
  const [selectedGen, setSelectedGen] = useState(7);
  const generations = [7, 6, 5, 4, 3];

  return (
    <>
      <MainHeader />
      <ProjectPageContainer>
        <SubTitle>이전 기수 프로젝트</SubTitle>
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
