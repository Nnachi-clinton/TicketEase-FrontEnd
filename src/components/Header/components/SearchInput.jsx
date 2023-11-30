import React, { useState } from 'react';
import styled from 'styled-components';
import SearchImage from '../../../assets/SearchImage.svg';

const SearchContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #e5e5e5;
  border-radius: 4px;
  height: 48px;
  position: relative;
  width: 445px;
`;

const Input = styled.input`
  color: #000000;
  font-family: 'Mulish-Regular', Helvetica;
  font-size: 14px;
  font-weight: 0;
  left: 49px;
  letter-spacing: 0;
  position: relative;
  border: 0px;
  height: 100%;

  width: 88%;

  &:focus {
    outline: none; /* Remove the default focus outline */
    border: 0px; /* Remove the border on focus */
  }
`;

const Icon = styled.img`
  height: 24px;
  left: 15px;
  position: absolute;
  top: 11px;
  width: 24px;
`;

export default function SearchInput(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Icon
        className="stockholm-icons"
        alt="Search Icon"
        src={SearchImage}
        onClick={handleSearch}
      />
    </SearchContainer>
  );
}
