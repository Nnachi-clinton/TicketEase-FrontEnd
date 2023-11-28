import React from 'react';
import Table from "./AllMembersPage1";
import * as S from "../../components/AllMembers/AllMembers"
import { FaArrowLeft } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';



const AllMembers = () => {
  const tableData = [
    {  firstName: 'Chidinma', lastName: 'Okafor', gender: 'Female', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
    {  firstName: 'John', lastName: 'Okafor', gender: 'Male', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
    {  firstName: 'Chidinma', lastName: 'Okafor', gender: 'Female', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
    {  firstName: 'John', lastName: 'Okafor', gender: 'Male', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
    {  firstName: 'Chidinma', lastName: 'Okafor', gender: 'Female', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
    {  firstName: 'John', lastName: 'Okafor', gender: 'Male', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
    {  firstName: 'Chidinma', lastName: 'Okafor', gender: 'Female', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
    {  firstName: 'John', lastName: 'Okafor', gender: 'Male', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
    {  firstName: 'Chidinma', lastName: 'Okafor', gender: 'Female', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
    {  firstName: 'John', lastName: 'Okafor', gender: 'Male', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
    {  firstName: 'Chidinma', lastName: 'Okafor', gender: 'Female', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
  ];

  return (
    <S.StyledContainer>
      <div style={{ position: 'relative' }}>

      <S.Leftarrow>
        <FaArrowLeft size={24} />
        <S.Text>Go Back</S.Text>
      </S.Leftarrow>
  
      <S.Show>
      <S.MainTop>All Registered Members</S.MainTop>
      <S.Sort>Sort By <select>
            <option value="all">All</option>
          </select></S.Sort>
      </S.Show>

        <Table data={tableData} />

        <S.PaginationContainer>
          <S.PaginationItem><MdArrowBackIos /></S.PaginationItem>
          <S.PaginationText color="#DADADA">Prev</S.PaginationText>
          <S.PaginationBackground>
            <S.PaginationText color="#FFF">1</S.PaginationText>
          </S.PaginationBackground>
          <S.PaginationText color="#031839">2</S.PaginationText>
          <S.PaginationText color="#031839">3</S.PaginationText>
          <S.PaginationItem><BsThreeDots /></S.PaginationItem>
          <S.PaginationText color="#031839">10</S.PaginationText>
          <S.PaginationText color="#031839">Next</S.PaginationText>
          <S.PaginationItem><MdArrowForwardIos /></S.PaginationItem>
        </S.PaginationContainer>

      </div>
    </S.StyledContainer>
  );
};

export default AllMembers;
