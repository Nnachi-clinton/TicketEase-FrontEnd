import React from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background: #FFF;
`;

export const Outer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 57px;
  background: #FFF;
`;

const ManagerText = styled.div`
  color: #000;
  font-family: 'Mulish', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ManagerAlertPage = () => {
  return (
    <BodyWrapper>
      <Outer>
        <ManagerText>Manager Created Successfully</ManagerText>
      </Outer>
    </BodyWrapper>
  );
};

export default ManagerAlertPage;
