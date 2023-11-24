import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTable = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    color: #21334F;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  th {
    background-color: #FAFAFA; 
    color: #21334F;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;    
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px; 
  width: 70%
`;

export const MainTop = styled.h1`
  color: #000;
  font-family: Mulish;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px; 
`;

export const StyledViewLink = styled(Link)`
  display: inline-flex;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: rgba(20, 168, 0, 0.05);
  color: #14A800;
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  text-decoration: none; 
`;

export const Show = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Sort = styled.h6`
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
export const Leftarrow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 10%;
`;

export const Text = styled.h6`
  margin-left: 8px;
  font-size: 16px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;

  > *:not(:first-child) {
    margin-left: 20px; 
  }
`;

export const PaginationItem = styled.div`
  width: 36px;
  height: 36px;
  color: #DADADA;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold; 

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const PaginationText = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: ${(props) => props.color};
  text-align: center;
  font-family: 'Helvetica Neue';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-weight: 700;
  cursor: pointer;
`;

export const PaginationBackground = styled.div`
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    background-color: rgba(20, 168, 0, 0.1);
    border-radius: 2px;
    background: #505F98;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgba(20, 168, 0, 0.2);
    }
`;
