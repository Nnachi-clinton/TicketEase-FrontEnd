import React, { useState } from 'react';
import styled from 'styled-components';
import CreateTicket from '../../pages/TicketInputfield';

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

const NewTicketSection = () => {
  const [steps, setSteps] = useState(0);
  return (
    <>
      {steps === 0 && (
        <>
          <NewTicketContainer onClick={() => setSteps(2)}>
            Create a new Ticket
          </NewTicketContainer>
        </>
      )}
      {steps === 2 && <CreateTicket />}
    </>
  );
};

export default NewTicketSection;
