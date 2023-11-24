import React from "react";
import styled from "styled-components";

const NoMemberFoundContainer = styled.div`
  align-self: center;
  margin-top: 37px;
  white-space: nowrap;
  color: #000;
font-family: Mulish;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
  font: 600 24px/30px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const NoMemberFound = styled.div`
  align-self: center;
  margin-top: 37px;
  white-space: nowrap;
  color: #8C92A2;
font-family: Mulish;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
  font: 600 24px/30px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const NoMemberFoundSection = () => {
  return (
    <>
    <NoMemberFoundContainer>No Member found</NoMemberFoundContainer>
    <NoMemberFound>Sorry we couldn’t find any results</NoMemberFound>
    </>
  );
};

export default NoMemberFoundSection;