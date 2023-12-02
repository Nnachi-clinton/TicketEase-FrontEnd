import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import Table from './Table.jsx';
import { AxiosInstance2 } from '../../Request/AxiosInstance.js';
import styled from 'styled-components'


const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // justify-content: right;
  padding: 20px; 
  width: 70%;
  margin-left: auto;
`;

const MainTop = styled.h1`
  color: #000;
  font-family: Mulish;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px; 
`;


const Show = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Sort = styled.h6`
    // display: inline-flex;
    display: flex;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 4px;
    background: rgba(80, 95, 152, 0.05);
    color: #1D2125;
    font-family: Mulish;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 600px;

    select {
        margin-left: 20px;
      }
`
const Leftarrow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 10%;
`;

const Text = styled.h6`
  margin-left: 8px;
  font-size: 16px;
`;




const AllProjects = () => {
  const [allProjects, setProject] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [totalItems, setTotalItems] = useState(0);

  const getPojects = async () => {
    try {
      const res = await AxiosInstance2.get(
       // `/Project/GetProjectsByBoardId?boardId=${localStorage.getItem('boardId')}&page=${currentPage}&perPage=${itemsPerPage}`
        `/Project/GetProjectsByBoardId?boardId= &page=${currentPage}&perPage=${itemsPerPage}`
      );
      
      const { data, totalCount } = res.data;
  
      setProject(data);
      setTotalItems(totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewClick = (member) => {
    console.log('View clicked:', member);
  };

  useEffect(() => {
    getPojects();
  }, [currentPage]);

  return (
    <section>
      <StyledContainer>
        <div style={{ position: 'relative' }}>
          <Leftarrow>
            <FaArrowLeft size={24} />
            <Text>Go Back</Text>
          </Leftarrow>

          <Show>
            <MainTop>All Projects</MainTop>
            <Sort>
              Sort By{' '}
              <select>
                <option value="all">All</option>
                <option value="Newest">Newest</option>
              </select>
            </Sort>
          </Show>

          <Table
            data={allProjects}  
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            handleViewClick={handleViewClick}
            totalItems={totalItems}
            setCurrentPage={setCurrentPage}
            getProjects={getPojects}
          />
        </div>
      </StyledContainer>
    </section>
  );
};

export default AllProjects;

