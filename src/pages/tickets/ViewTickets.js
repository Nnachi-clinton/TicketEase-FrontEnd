import React from 'react';
import PendingColumn from './PendingColumn';
import IncompleteColumn from './IncompleteColumn';
import CompletedColumn from './CompletedColumn';
import styled from 'styled-components';

const Container = styled.div `
  max-width: 1200px; /* Set your desired max width for the container */
  margin: 0 auto; /* Center the container */
  display: flex;
  justify-content: space-between; 
`;

const Column = styled.div`
width: 300px; 
  padding: 20px;
  margin-left:20px;
  box-sizing: border-box; /
`;
const StatusColumns = () => {
  return (
    <Container>
      <Column> <PendingColumn/></Column>
      <Column> <IncompleteColumn/></Column>
      <Column><CompletedColumn/></Column>
  </Container>
  );
};

export default StatusColumns;