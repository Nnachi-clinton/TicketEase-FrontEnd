import React from "react";
import styled from "styled-components";
import HeaderSection from "../memberDashboard/HeaderSection";
import ImageSection from "../memberDashboard/ImageSection";
import NoMemberFoundSection from "../memberDashboard/NoMemberFoundSection";
import NewMemberSection from "../memberDashboard/NewMemberSection";

const MainContainer = styled.div`
  border-radius: 4px;
  width: 900px;
  height: 728px;
  background-color: #fff;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-left: 400px;
  margin-right: 100px;
  margin-top: 239px;
  margin-bottom: 57px;
`;

const Separator = styled.div`
  background-color: #d3d3d3;
  align-self: stretch;
  min-height: 1px;
  width: 100%;
  margin-top: 6px;
  margin-bottom: 30px;
`;
const RegisteredMembers = (props) => {
  return (
    <MainContainer>
      <HeaderSection />
      <Separator/>
      <ImageSection />
      <NoMemberFoundSection />
      <NewMemberSection />
    </MainContainer>
  );
};

export default RegisteredMembers;