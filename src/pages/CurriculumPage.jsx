import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import MainHeader from "../components/header/MainHeader";
import styled from "styled-components";
import Colors from "../constanst/colors";
import CurriculumData from "../database/curriculumData.json"

const CurriculumsPageContainer = styled.div`
  width: 80%;
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
  background-color: ${Colors.secondary400};
  padding: 30px;
  color: white;
  border-radius: 10px;
  max-width: 900px;
  display: flex;
  flex-direction: column; 
  gap: 12px;

 .name-english{
  width: fit-content; 
  font-size: 15px;
  font-weight: 600;
  padding: 4px 12px; 
  display: inline-block; 
  border-radius: 5px;
  background-color: ${Colors.primary}
  }
  .name-korean{
  margin-left: 3px;
  font-size: 25px;
  font-weight: 500;
  }
  .part-icon{
  margin-left: 5px;
  padding-top: 1.5px;
  width: 23px;
  height: 23px;
  }
  .part-info{
   margin-left: 3px;
  font-size: 15px;
  margin-top:3px;
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
  background-color: ${Colors.secondary400};
  padding: 30px;
  color: white;
  border-radius: 10px;
  margin-top: 20px;
  max-width: 900px;
  display: flex;
  flex-direction: column; 
  gap: 20px;

  .ordered-nav {
  position: relative;
  list-style: none; /* 기본 리스트 스타일 제거 */
  margin: 0;
  padding: 0;
  display: block;
}

.ordered-nav::before {
  /* 세로선 */
  content: '';
  height: 95%;
  position: absolute;
  left: 5px;
  top: 0;
  width: 1px;
  background-color: ${Colors.secondary200};
}

.ordered-nav--link {
  padding-left: 1.5rem;
  margin: 1rem 0;
  position: relative;
}

.ordered-nav--link::before {
  /* 각 항목의 원형 아이콘 */
  content: '';
  position: absolute;
  top: 20%;
  left: 0;
  width: 5px;
  height: 5px;
  background-color: ${Colors.secondary200};
  border: 3px solid ${Colors.secondary200};
  border-radius: 50%;
  transform: translateY(-50%);
}

.ordered-nav--link:first-child{
margin-top:0;
}
/* 첫 번째 요소 조정 */
.ordered-nav--link:first-child::before {
  top: 0;
  transform: none;
}

/* 마지막 요소 조정 */
.ordered-nav--link:last-child {
  margin-bottom: 0;
}
 .week{
 font-weight: 600;
 font-size: 16px;
margin-left: 8px;
 }
 .content{
 font-weight: 300;
 font-size: 13px;
 margin-left: 8px;
 margin-top: 8px;

 }
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
  color:${(props) => (props.$active === "true"?  "white" : Colors.secondary50 )};
  border: 1px solid ${(props) => (props.$active === "true" ? Colors.primary : Colors.primary900)};
  padding: 5px 17px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  
  @media screen and (max-width: 430px) {
    padding: 7px 7px;
    font-size: 10px;
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

                        <div style={{display: "flex"}}>
                            <div className="name-korean">{part.partKorean}</div>
                            <div>
                                <img className="part-icon" src={part.icon} alt="icon" />
                            </div>
                        </div>

                        <div className="part-info">
                            {part.info}
                        </div>
                    </PartInfo>

                    <PartCurriculum>
                    <ol className="ordered-nav">
            {part.curriculum
              .sort((a, b) => a.week - b.week) // 주차 순서대로 정렬
              .map((week, i) => (
                <li key={i} className="ordered-nav--link">
                  <div className="week">{week.week}주차</div> 
                  <div className="content">{week.content}</div> 
                </li>
              ))}
          </ol>
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