import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 90%;
  padding: 25px;
  background-color: #191919;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 50px;
  cursor: pointer;

  &:hover {
    background-color: rgba(50, 50, 50, 0.8);
  }

  @media screen and (max-width: 960px) {
    padding: 25px;
    gap: 45px;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    flex-direction: column;
    align-items: baseline;
    padding: 35px;
    gap: 25px;
  }
`;

const ProjectImage = styled.div`
  width: 320px;
  height: 200px;
  background-color: #585858;
  border-radius: 4px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* 이미지를 반복하지 않도록 설정 */

  @media screen and (max-width: 960px) {
    width: 270px;
    height: 180px;
    gap: 45px;
  }

  @media screen and (max-width: 768px) {
    margin: auto;
    width: 100%;
    height: 180px;
  }
`;

const ProjectInfo = styled.div`
  flex: 1;
  margin-top: 7px;
`;

const Title = styled.h2`
  font-size: 21px;
  font-weight: bold;
  margin: 10px 0px;

  @media screen and (max-width: 960px) {
    font-size: 18px;
  }
`;

const Type = styled.span`
  font-size: 18px;
  font-weight: 800;
  color: #ba224d;

  @media screen and (max-width: 960px) {
    font-size: 16px;
  }
`;

const Details = styled.p`
  font-size: 13px;
  color: #b7b7b7;

  @media screen and (max-width: 960px) {
    font-size: 11px;
  }
`;

const ProjectCard = ({
  title,
  serviceType,
  pm,
  frontEnd,
  backEnd,
  design,
  image,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick}>
      <ProjectImage imageUrl={image?.fileUrl} />
      <ProjectInfo>
        <Type>{serviceType}</Type>
        <Title>{title}</Title>
        <Details>
          <strong>PM&nbsp;</strong> {pm}
        </Details>
        <Details>
          <strong>Design&nbsp;</strong> {design}
        </Details>
        <Details>
          <strong>Front-end&nbsp;</strong> {frontEnd}
        </Details>
        <Details>
          <strong>Back-end&nbsp;</strong> {backEnd}
        </Details>
      </ProjectInfo>
    </CardContainer>
  );
};

export default ProjectCard;
