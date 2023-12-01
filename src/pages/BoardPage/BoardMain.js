import React, { useEffect, useState } from 'react';
import BoardCard from './BoardCard.js';
import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;

const BoardMain = () => {
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
    <CardsContainer>
      {boardData.length > 0 ? (
        boardData.map((board) => (
          <BoardCard key={board.id} boardName={board.name} />
        ))
      ) : (
        <div>No Available boards</div>
      )}
    </CardsContainer>
  );
};

export default BoardMain;