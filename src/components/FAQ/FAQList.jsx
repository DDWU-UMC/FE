import React from "react";
import FAQItem from "./FAQItem";
import FAQData from "../../database/fqaData.json";
import styled from "styled-components";

const FQAContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 960px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 430px) {
    width: 90%;
  }
`;

const FAQList = ({ selectedCategory }) => {
  const filteredData = FAQData.filter(
    (faq) => faq.category === selectedCategory
  );

  return (
    <FQAContainer>
      {filteredData.map((faq) => (
        <FAQItem
          key={faq.id}
          question={faq.Q}
          answer={faq.A}
          additional={faq["+"]}
        />
      ))}
    </FQAContainer>
  );
};

export default FAQList;
