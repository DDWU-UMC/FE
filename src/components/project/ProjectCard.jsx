import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  padding: 35px;
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

  @media screen and (max-width: 960px) {
    width: 250px;
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
  margin-top: 7px;

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
  platform,
  pm,
  frontend,
  backend,
  design,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick}>
      <ProjectImage />
      <ProjectInfo>
        <Type>{platform}</Type>
        <Title>{title}</Title>
        <Details>
          <strong>PM&nbsp;</strong> {pm}
        </Details>
        <Details>
          <strong>Front-end&nbsp;</strong> {frontend.join(", ")}
        </Details>
        <Details>
          <strong>Back-end&nbsp;</strong> {backend.join(", ")}
        </Details>
        <Details>
          <strong>Design&nbsp;</strong> {design}
        </Details>
      </ProjectInfo>
    </CardContainer>
  );
};

export default ProjectCard;
