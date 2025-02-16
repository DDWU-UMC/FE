import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import ProjectPreviewCard from "./ProjectPreviewCard";
import styled from "styled-components";

const ProjectListContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 430px) {
    gap: 25px;
  }
`;

const ProjectList = ({ projectData, gen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <ProjectListContainer>
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          onClick={() => handleProjectClick(project.projectId)}
        />
      ))}
    </ProjectListContainer>
  );
};

export default ProjectList;
