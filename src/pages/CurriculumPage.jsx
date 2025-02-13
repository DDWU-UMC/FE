import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import MainHeader from "../components/header/MainHeader";
import styled from "styled-components";
import Colors from "../constanst/colors";
import CurriculumData from "../database/curriculumData.json"

const CurriculumsPageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0 20px; 
  gap: 40px; 
  color: white;
  display: flex; 
  flex-direction: column;
  align-items: center; 

  .sub-tile{
    margin-top: 100px;
    font-size: 23px;
    }
    @media screen and (max-width: 690px) {
      font-size: 15px;
  
      .sub-tile{
    margin-top: 130px;
    font-size: 20px;
    }


`;



const PartInfo = styled.div`
  background-color: rgba(54, 54, 54, 0.7);
  padding: 30px;
  color: white;
  border-radius: 10px;
  max-width: 900px;
  display: flex;
  flex-direction: column; 
  gap: 20px;

 .name-english{
  width: fit-content; 
  font-size: 20px;
  border: 1px solid white;
  padding: 5px 10px; 
  display: inline-block; 
  border-radius: 30px;
  }
  .name-korean{
  margin-left: 3px;
  font-size: 25px;
  }
  .part-icon{
  margin-left: 5px;
  width: 23px;
  height: 23px;
  }
  .part-info{
   margin-left: 3px;
  font-size: 15px;
  }

   @media screen and (max-width: 430px) {
    .name-english{
    font-size: 15px;
    padding: 5px 10px; 
  }
  .name-korean{
  font-size: 20px;
  }
  .part-icon{
  margin-left: 5px;
  width: 18px;
  height: 18px;
  }
  .part-info{
    font-size: 13px;
  }
 }
    
`;

const PartCurriculum = styled.div`
 background-color: rgba(54, 54, 54, 0.7);
  padding: 30px;
  color: white;
  border-radius: 10px;
  margin-top: 20px;
  max-width: 900px;
  display: flex;
  flex-direction: column; 
  gap: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;

  @media screen and (max-width: 430px) {
    gap: 14px;
    margin-bottom: 0px;

  }
`;
const PartButton = styled.button`
  background-color: ${(props) => (props.$active === "true"? Colors.primary : Colors.btn)};
  color: white;
  border: 1px solid ${(props) => (props.$active === "true" ? Colors.primary : Colors.primary900)};
  padding: 7px 17px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;

  @media screen and (max-width: 430px) {
    padding: 7px 7px;
    font-size: 12px;
  }
`;

const Parts = ({ selectedPart }) => {
    const filteredData = CurriculumData.filter((part) => part.part === selectedPart);

    return (
        <>
            {filteredData.map((part) => (
                <div key={part.part}>
                    <PartInfo>
                        <div className="name-english">{part.part}</div>

                        <div>
                            <span className="name-korean">{part.partKorean}</span>
                            <span>
                                <img className="part-icon" src={part.icon} alt="icon" /> {/* icon을 part에서 가져오도록 수정 */}
                            </span>
                        </div>

                        <div className="part-info">
                            {part.info}
                        </div>
                    </PartInfo>

                    <PartCurriculum>
                        {Array.from({ length: 13 }, (_, i) => part[`week${i}`])
                            .filter(Boolean)
                            .map((week, i) => (
                                <div key={i}>{week}</div>
                            ))}

                    </PartCurriculum>
                </div>
            ))}
        </>
    );
};



const CurriculumPage = () => {
    const { part } = useParams();  // URL 파라미터에서 part 값을 추출
    const [selectedPart, setSelectedPart] = useState(part || "Plan");  // 초기값은 파라미터 값으로 설정
  
    const parts = ["Plan", "Design", "Android", "Web", "Spring Boot"];
  
    useEffect(() => {
      if (part) {
        setSelectedPart(part);  // 파라미터 값에 따라 selectedPart 상태 변경
      }
    }, [part]);
  
    return (
      <>
        <MainHeader />
        <CurriculumsPageContainer>
          <div className="sub-tile">파트별 커리큘럼</div>
          <ButtonContainer>
            {parts.map((part) => (
              <PartButton
                key={part}
                $active={selectedPart === part ? "true" : "false"} 
                onClick={() => setSelectedPart(part)}
              >
                {part}
              </PartButton>
            ))}
          </ButtonContainer>
  
          <Parts selectedPart={selectedPart} />
        </CurriculumsPageContainer>
        <div></div>
      </>
    );
  };
export default CurriculumPage;