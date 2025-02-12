import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import ProjectPreviewCard from "./ProjectPreviewCard";
import styled from "styled-components";

const ProjectListContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 430px) {
    gap: 35px;
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

  const handleProjectClick = (id) => {
    navigate(`/project/${gen}/${id}`);
  };

  return (
    <ProjectListContainer>
      {projectData.map((project, index) =>
        isMobile ? (
          <ProjectPreviewCard
            key={index}
            {...project}
            onClick={() => handleProjectClick(project.id)}
          />
        ) : (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => handleProjectClick(project.id)}
          />
        )
      )}
    </ProjectListContainer>
  );
};

export default ProjectList;
