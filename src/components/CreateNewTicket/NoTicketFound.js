import React from 'react';
import styled from 'styled-components';

const NoTicketFoundContainer = styled.div`
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
    margin: 55px;
  }
`;

const NoTicketFound = styled.div`
  align-self: center;
  margin-top: 37px;
  white-space: nowrap;
  color: #8c92a2;
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font: 600 24px/30px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    margin: 5px;
  }
`;

const NoTicketFoundSection = () => {
  return (
    <>
      <NoTicketFoundContainer>No Ticket found</NoTicketFoundContainer>
      <NoTicketFound>Sorry, we couldn't find any results</NoTicketFound>
    </>
  );
};

export default NoTicketFoundSection;
