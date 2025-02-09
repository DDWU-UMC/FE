import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  padding: 35px;
  background-color: rgba(36, 36, 36, 0.8);
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 70px;
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
  width: 200px;
  height: 200px;
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
  color: rgba(81, 81, 81, 0.8);

  @media screen and (max-width: 960px) {
    font-size: 18px;
  }
`;

const Details = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 1);

  @media screen and (max-width: 960px) {
    font-size: 11px;
  }
`;

const ProjectCard = ({ title, type, pm, frontend, backend, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <ProjectImage />
      <ProjectInfo>
        <Title>
          {title} <Type>{type}</Type>
        </Title>
        <Details>
          <strong>PM</strong> {pm}
        </Details>
        <Details>
          <strong>Front-end</strong> {frontend.join(", ")}
        </Details>
        <Details>
          <strong>Back-end</strong> {backend.join(", ")}
        </Details>
      </ProjectInfo>
    </CardContainer>
  );
};

export default ProjectCard;
