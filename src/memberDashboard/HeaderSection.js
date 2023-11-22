import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  align-self: center;
  display: flex;
  margin-top: 24px;
  width: 100%;
  max-width: 930px;
  justify-content: space-between;
  gap: 20px;
  padding: 0 20px;
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
      <HeaderItem>Name</HeaderItem>
      <HeaderItem>Address</HeaderItem>
      <HeaderItem>Email</HeaderItem>
      <HeaderItem>Phone Number</HeaderItem>
    </HeaderContainer>
    
  </>
  );
};

export default HeaderSection;