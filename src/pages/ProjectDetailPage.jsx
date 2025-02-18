import React, { useState, useEffect } from "react";
import axios from "axios";
import headerImg from "../assets/underheaderImg.svg";
import ProjectPreviewCard from "../components/project/ProjectPreviewCard";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import MainFooter from "../components/footer/MainFooter";

const apiUrl = import.meta.env.VITE_API_URL;

const ProjectDetailPageContainer = styled.div`
  width: 80%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  gap: 50px;
  font-size: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (max-width: 690px) {
    gap: 30px;
  }

  @media screen and (max-width: 500px) {
    gap: 10px;
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

const Project = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  margin-bottom: 30px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;

const ProjectIntro = styled.div`
  padding: 25px 50px;
  border-radius: 8px;
  background-color: #191919;

  @media screen and (max-width: 600px) {
    padding: 20px 35px;
  }

  @media screen and (max-width: 430px) {
    padding: 15px 20px;
  }
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin: 5px 0;

  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const Type = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #ba224d;

  @media screen and (max-width: 960px) {
    font-size: 18px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Info = styled.p`
  font-size: 24px;
  color: #b7b7b7;
  font-weight: bold;
  margin: 8px 0;
  word-break: keep-all;

  @media screen and (max-width: 960px) {
    font-size: 18px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Details = styled.p`
  font-size: 18px;
  color: #b7b7b7;
  margin: 8px 0;
  word-break: keep-all;

  @media screen and (max-width: 960px) {
    font-size: 15px;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ProjectDetail = styled.div`
  flex: 1;
  padding: 15px 40px;
  border-radius: 8px;
  background-color: #191919;
  padding-bottom: 50px;

  @media screen and (max-width: 430px) {
    padding: 15px 20px;
    padding-bottom: 30px;
  }
`;

const ImageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  margin-top: 20px;

  @media screen and (max-width: 880px) {
    padding-bottom: 20px;
  }

  @media screen and (max-width: 675px) {
    padding-bottom: 10px;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: auto;
  border-radius: 4px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: contain; /* 원본 크기 유지 */
  background-position: center;
  background-repeat: no-repeat;
`;

const ProjectSubTitle = styled.p`
  margin-top: 30px;
  font-size: 24px;
  font-weight: bold;

  @media screen and (max-width: 960px) {
    font-size: 18px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Line = styled.div`
  width: 5%;
  border: 1px solid #585858;
`;

const SubTitle2 = styled.div`
  margin-top: 20px;
  font-size: 25px;
  font-weight: bold;

  @media screen and (max-width: 430px) {
    font-size: 20px;
  }

  @media screen and (max-width: 690px) {
    margin-top: 50px;
    font-size: 20px;
  }
`;

const OtherProjects = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 80px;
`;

const ProjectDetailPage = () => {
  const navigate = useNavigate();
  const [projectDetailData, setProjectDetailData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const projectId = useParams();

  // 새로고침 후 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const projectDetailData = axios.get(`${apiUrl}/projects/${projectId.id}`);
    const projects = axios.get(`${apiUrl}/projects/${projectId.id}/others`);

    axios
      .all([projectDetailData, projects])
      .then(
        axios.spread((responseOne, responseTwo) => {
          setProjectDetailData(responseOne.data.result);
          setProjectData(responseTwo.data.result);
        })
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
    window.location.reload();
  };

  return (
    <>
      <ProjectDetailPageContainer>
        <SubTitleContainer>
          <SubTitleBG src={headerImg} alt="배경 이미지" />
          <SubTitle>프로젝트 살펴보기</SubTitle>
        </SubTitleContainer>
        <Project>
          <ProjectIntro>
            <Title>
              {projectDetailData.title}&nbsp;&nbsp;
              <Type>{projectDetailData.serviceType}</Type>
            </Title>
            <Info>{projectDetailData.introduction}</Info>
          </ProjectIntro>
          <ProjectDetail>
            <ImageDiv>
              <ProjectImage imageUrl={projectDetailData.image?.fileUrl} />
            </ImageDiv>
            <ProjectSubTitle>프로젝트 팀원</ProjectSubTitle>
            <Details>
              <strong>PM&nbsp;</strong> {projectDetailData.pm}
            </Details>
            <Details>
              <strong>Design&nbsp;</strong> {projectDetailData.design}
            </Details>
            <Details>
              <strong>Front-end&nbsp;</strong> {projectDetailData.frontEnd}
            </Details>
            <Details>
              <strong>Back-end&nbsp;</strong> {projectDetailData.backEnd}
            </Details>
            {projectDetailData.description && (
              <>
                <ProjectSubTitle>프로젝트 설명</ProjectSubTitle>
                <Details>{projectDetailData.description}</Details>
              </>
            )}
            <ProjectSubTitle>서비스 핵심 기능</ProjectSubTitle>
            {Array.isArray(projectDetailData.features) &&
            projectDetailData.features.length > 0 ? (
              projectDetailData.features.map((feature, index) => (
                <Details key={index}>- {feature.content}</Details>
              ))
            ) : (
              <Details>핵심 기능이 없습니다.</Details>
            )}
          </ProjectDetail>
        </Project>
        <Line />
        <SubTitle2>다른 프로젝트 둘러보기</SubTitle2>
        {/* 다른 프로젝트 미리보기 카드 */}
        <OtherProjects>
          {projectData.map((project, index) => (
            <ProjectPreviewCard
              key={index}
              {...project}
              onClick={() => handleProjectClick(project.projectId)}
            />
          ))}
        </OtherProjects>
      </ProjectDetailPageContainer>
      <MainFooter />
    </>
  );
};

export default ProjectDetailPage;
