import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";

const ProjectListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 430px) {
    gap: 25px;
  }
`;

const ProjectList = ({ projectData }) => {
  const navigate = useNavigate();

  return (
    <ProjectListContainer>
      {projectData.map((project) => (
        <ProjectCard
          key={project.projectId}
          {...project}
          onClick={() => navigate(`/project/${project.projectId}`)}
        />
      ))}
    </ProjectListContainer>
  );
};

export default ProjectList;
