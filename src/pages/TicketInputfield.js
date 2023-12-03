import React from 'react';
import styled from 'styled-components';
import { IoIosAddCircle } from 'react-icons/io';
import { Axios } from 'axios';
import AxiosInstance from '../Request/AxiosInstance';

const Fulldiv = styled.div`
  overflow: hidden;
  background-color: #f0f0f0;
`;

const Innerdiv = styled.div`
  background-color: white;
  margin-left: 20px;
  margin-right: 20px;
  & .marginb {
    margin-bottom: 20px;
  }
`;

const FormSpace = styled.div`
  width: 300px;
  margin: auto;
  padding-top: 2em;
  background-color: white;
`;

export const StyledForm = styled.form`
  border-radius: 5px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  padding-top: 1em;
  color: ${(props) => (props.invalid ? 'red' : 'black')};
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

export const StyledButton = styled.button`
  color: white;
  width: 100%;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 17em;
`;

export const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: none;
`;

const Board = styled.div`
  font-weight: bold;
  color: #333;
  padding: 8px;
`;

const Button = styled.button`
  background-color: #505f98;
  color: white;
  border: none;
  padding: 10px 30px;
  margin-right: 8px;
  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  gap: 10px;
`;

function CreateTicket() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AxiosInstance.post('/');
    } catch (error) {
      
    }
  }


  return (
    <Fulldiv>
      <Container>
        <Board>Board</Board>
        <Button>
          <div>
            <IoIosAddCircle />{' '}
          </div>
          <div>Create a Ticket</div>
        </Button>
      </Container>

      {/* YourStyledComponent and Pcreatemanager components remain the same */}

      <Innerdiv>
        <FormSpace>
          <StyledForm onSubmit={handleSubmit}>
            <h1 style={{ textAlign: 'left', gap: '5px' }}>
              Work Collaboratively with <br />
              team members.{' '}
              <span style={{ color: '#505f98' }}> Create a Ticket</span>{' '}
            </h1>
            <StyledLabel>Title:</StyledLabel>
            <StyledInput type="text" name="title" required placeholder="" />
            <StyledLabel>Description:</StyledLabel>
            <StyledInput type="text" name='description' required placeholder="Cc" />
            <StyledLabel>Priority:</StyledLabel>
            <StyledSelect required name="priority">
              <option value="">Choose a Priority</option>
              <option value="2">High</option>
              <option value="1">Medium</option>
              <option value="0">Low</option>
            </StyledSelect>
            <StyledLabel>Assigned To:</StyledLabel>
            <StyledInput type="text" name='assignedto' placeholder="" />
            <StyledLabel>Project Id:</StyledLabel>
            <StyledInput required name='projectid' type="text" placeholder="" />
            {/* Other form fields */}
            <StyledButton type="submit">Create a New Ticket</StyledButton>
          </StyledForm>
        </FormSpace>
      </Innerdiv>
    </Fulldiv>
  );
}

export default CreateTicket;
