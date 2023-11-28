import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  align-self: center;
  display: flex;
  margin-top: 24px;
  width: 100%;
  max-width: 900px;
  justify-content: space-around;
  gap: 100px;
  padding:  20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const HeaderItem = styled.div`
  color: #000;
  font: 700 14px/18px Mulish, sans-serif;
`;

const HeaderSection = () => {
  return (<>
    <HeaderContainer>
      <HeaderItem>Project</HeaderItem>
      <HeaderItem>Title</HeaderItem>
      <HeaderItem>Description</HeaderItem>
      <HeaderItem>Phone Number</HeaderItem>
    </HeaderContainer>
  </>
  );
};

export default HeaderSection;