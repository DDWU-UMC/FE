import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #282828;
  border-radius: 8px;
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
  padding: 8px;
  gap: 5px;
`;

const ProjectImage = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(57, 57, 57, 0.8);
  border-radius: 4px;
`;

const ProjectInfo = styled.div`
  padding-left: 10px;
`;

const Title = styled.h2`
  font-size: 13px;
  margin: 10px 0 0 0;
  font-weight: bold;
`;

const Type = styled.span`
  font-size: 13px;
  color: #ba224d;
`;

const ProjectCard = ({ title, platform, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardInnerContainer>
        <ProjectImage />
        <ProjectInfo>
          <Title>{title}</Title>
          <Type>{platform}</Type>
        </ProjectInfo>
      </CardInnerContainer>
    </CardContainer>
  );
};

export default ProjectCard;
