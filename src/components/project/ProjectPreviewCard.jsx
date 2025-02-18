import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #191919;
  border-radius: 8px;
  cursor: pointer;
`;

const CardInnerContainer = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 10px 20px 5px 20px;
`;

const ProjectImage = styled.div`
  width: 230px;
  height: 130px;
  background-color: rgba(57, 57, 57, 0.8);
  border-radius: 4px;
  margin-bottom: 10px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* 이미지를 반복하지 않도록 설정 */
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 15px;
  margin: 8px 0;
  font-weight: bold;
`;

const Type = styled.span`
  font-size: 15px;
  color: #ba224d;
  font-weight: bold;
`;

const ProjectPreviewCard = ({ title, serviceType, image, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardInnerContainer>
        <ProjectInfo>
          <Type>{serviceType}</Type>
          <Title>{title}</Title>
          <ProjectImage imageUrl={image?.fileUrl} />
        </ProjectInfo>
      </CardInnerContainer>
    </CardContainer>
  );
};

export default ProjectPreviewCard;
