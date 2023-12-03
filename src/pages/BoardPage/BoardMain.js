import React, { useEffect, useState } from 'react';
import BoardCard, { MergedComponent } from './BoardCard.js';
import styled from 'styled-components';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  flex-wrap: wrap;
  justify-content: center;
  marging-left: 54em !important;
  gap: 10px;
`;

const BoardMain = ({
  handleCreateProject,
  handleViewAllProjecs,
  handleCreateBoard,
  handleViewTickets,
}) => {
  // State to store the board data
  const [boardData, setBoardData] = useState([]);

  // Function to fetch data from the API
  const fetchBoardData = async () => {
    try {
      const response = await fetch(
        'https://localhost:7075/api/Board/get-all-board-by-pagination?page=1&perPage=6'
      );
      const data = await response.json();

      // Assuming the response structure is an array of board objects
      setBoardData(data?.boards || []);
    } catch (error) {
      console.error('Error fetching board data:', error);
    }
  };

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchBoardData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div style={{ marginLeft: '10em' }}>
      {/* Render MergedComponent above the CardsContainer */}
      <MergedComponent handleCreateBoard={handleCreateBoard} />

      {/* CardsContainer with board data */}
      <CardsContainer>
        {boardData.length > 0 ? (
          boardData.map((board) => (
            <BoardCard
              handleCreateProject={handleCreateProject}
              handleViewAllProjecs={handleViewAllProjecs}
              handleViewTickets={handleViewTickets}
              key={board.id}
              boardName={board.name}
            />
          ))
        ) : (
          <div>No Available boards</div>
        )}
      </CardsContainer>
    </div>
  );
};

export default BoardMain;
