import React from "react";
import MainHeader from "../components/header/MainHeader";
import styled from "styled-components";
import projectData from "../data/projectData";
import ProjectCard from "../components/project/ProjectPreviewCard2";
import { useParams, useNavigate } from "react-router-dom";

const Back = styled.div`
  background-color: black;
`;

const ProjectDetailPageContainer = styled.div`
  width: 60%;
  margin: 50px auto;
  padding: 70px;
  border-radius: 15px;
  font-size: 20px;
  color: white;
  background-color: rgb(36, 36, 36, 0.7);
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const Project = styled.div`
  display: flex;
  gap: 100px;
`;

const ProjectImage = styled.div`
  width: 250px;
  height: 250px;
  background-color: rgba(57, 57, 57, 0.8);
  border-radius: 15px;

  @media screen and (max-width: 960px) {
    width: 180px;
    height: 180px;
    gap: 45px;
  }
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 23px;
  font-weight: bold;

  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`;

const Type = styled.span`
  font-size: 20px;
  color: #885564;

  @media screen and (max-width: 960px) {
    font-size: 18px;
  }
`;

const Details = styled.p`
  font-size: 12px;

  @media screen and (max-width: 960px) {
    font-size: 11px;
  }
`;

const Description = styled.p`
  font-size: 13px;
  margin-top: 40px;

  @media screen and (max-width: 960px) {
    font-size: 11px;
  }
`;

const Feature = styled.ul``;
const FeatureLi = styled.li`
  font-size: 12px;
`;

const OtherProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SubTitle = styled.div`
  margin-top: 20px;
  font-size: 25px;
  font-weight: bold;

  @media screen and (max-width: 430px) {
    font-size: 23px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 20px;
`;

const NoProjectsMessage = styled.p`
  font-size: 16px;
  color: gray;
  margin-top: 10px;
`;

const ProjectDetailPage = () => {
  const navigate = useNavigate();
  const { gen, id } = useParams();
  const selectedGen = Number(gen); // 현재 기수
  const currentProject = projectData[selectedGen]?.find(
    (p) => p.id === Number(id)
  ); // 현재 보고 있는 프로젝트

  const otherProjects =
    projectData[selectedGen].filter(
      (project) => project.id !== currentProject.id
    ) || []; // 현재 프로젝트 제외한 7기 프로젝트

  return (
    <Back>
      <MainHeader />
      <ProjectDetailPageContainer>
        {/* 메인 프로젝트 상세 정보 */}
        <Project>
          <ProjectImage />
          <ProjectInfo>
            <Title>
              {currentProject.title} <Type>{currentProject.type}</Type>
            </Title>
            <Details>
              <strong>PM</strong> {currentProject.pm}
            </Details>
            <Details>
              <strong>Front-end</strong> {currentProject.frontend.join(", ")}
            </Details>
            <Details>
              <strong>Back-end</strong> {currentProject.backend.join(", ")}
            </Details>
            <Description>
              프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트
              설명
            </Description>
            <Feature>
              <FeatureLi>핵심기능</FeatureLi>
              <FeatureLi>핵심기능</FeatureLi>
              <FeatureLi>핵심기능</FeatureLi>
            </Feature>
          </ProjectInfo>
        </Project>

        {/* 다른 프로젝트 미리보기 카드 */}
        <OtherProjects>
          <SubTitle>{selectedGen}기 다른 프로젝트 보기</SubTitle>
          {otherProjects.length > 0 ? (
            <CardContainer>
              {otherProjects.slice(0, 3).map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  type={project.type}
                  onClick={() =>
                    navigate(`/project/${selectedGen}/${project.id}`)
                  }
                />
              ))}
            </CardContainer>
          ) : (
            <NoProjectsMessage>다른 프로젝트가 없습니다.</NoProjectsMessage>
          )}
        </OtherProjects>
      </ProjectDetailPageContainer>
    </Back>
  );
};

export default ProjectDetailPage;
