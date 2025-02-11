import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: rgba(36, 36, 36, 0.8);
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: rgba(50, 50, 50, 0.8);
  }
`;

const CardInnerContainer = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin: 20px 20px 5px 20px;
  gap: 10px;
`;

const ProjectImage = styled.div`
  width: 160px;
  height: 160px;
  background-color: rgba(57, 57, 57, 0.8);
  border-radius: 15px;
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: bold;
`;

const Type = styled.span`
  font-size: 15px;
  color: rgba(81, 81, 81, 0.8);
`;

const ProjectCard = ({ title, type, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardInnerContainer>
        <ProjectImage />
        <ProjectInfo>
          <Title>
            {title} <Type>{type}</Type>
          </Title>
        </ProjectInfo>
      </CardInnerContainer>
    </CardContainer>
  );
};

export default ProjectCard;
