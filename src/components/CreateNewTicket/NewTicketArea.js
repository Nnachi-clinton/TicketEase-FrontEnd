import React from 'react';
import styled from 'styled-components';

const NewTicketContainer = styled.button`
  color: #fff;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  background-color: #505f98;
  align-self: center;
  width: 232px;
  height: 60px;
  max-width: 100%;
  margin: 41px 0 196px;
  gap: 10px;
  cursor: pointer;
  padding: 16px 24px;
  font: 700 14px/18px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    margin: 55px 0;
  }
`;

const NewTicketSection = ({ handleCreateTicket }) => {
  return (
    <NewTicketContainer onClick={handleCreateTicket}>
      Create a new Ticket
    </NewTicketContainer>
  );
};

export default NewTicketSection;
