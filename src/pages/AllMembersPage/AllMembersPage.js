import React, { useEffect, useState } from 'react';
import * as S from "../../components/AllMembers/AllMembers"
import { FaArrowLeft } from "react-icons/fa";
import AllMembersTable from "../AllMembersPage/AllMembersTable";
import AxiosInstance from '../../Request/AxiosInstance.js';


const AllMembers = () => {
  const [allMembers, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [totalItems, setTotalItems] = useState(0);

  const getMembers = async () => {
    try {
      const res = await AxiosInstance.get(
        // `/User/get-Users-By-ManagerId?managerId=${localStorage.getItem('mangerId')}&page=${currentPage}&perPage=${itemsPerPage}`
        `/User/get-Users-By-ManagerId?managerId=fb7f3e38-9ca8-4057-bf41-92a34be32c86&page=${currentPage}&perPage=${itemsPerPage}`
      );
      //console.log('API Response:', res.data);
      const { data, totalCount } = res.data;
  
      setMembers(data);
      setTotalItems(totalCount);
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleViewClick = (member) => {
    console.log('View clicked:', member);
  };

  useEffect(() => {
    getMembers();
  }, [currentPage]);

  return (
    <section>
      <S.StyledContainer>
        <div style={{ position: 'relative' }}>
          <S.Leftarrow>
            <FaArrowLeft size={24} />
            <S.Text>Go Back</S.Text>
          </S.Leftarrow>

          <S.Show>
            <S.MainTop>All Registered Members</S.MainTop>
            <S.Sort>
              Sort By{' '}
              <select>
                <option value="all">All</option>
                <option value="check">check</option>
              </select>
            </S.Sort>
          </S.Show>

          {/* Updated prop name from 'companies' to 'data' */}
          <AllMembersTable
            data={allMembers}  // Updated prop name
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            handleViewClick={handleViewClick}
            totalItems={totalItems}
            setCurrentPage={setCurrentPage}
            getMembers={getMembers}
          />
        </div>
      </S.StyledContainer>
    </section>
  );
};

export default AllMembers;

// const AllMembers = () => {
//   const tableData = [
//     {  firstName: 'Chidinma', lastName: 'Okafor', gender: 'Female', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
//     {  firstName: 'John', lastName: 'Okafor', gender: 'Male', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
//     {  firstName: 'Chidinma', lastName: 'Okafor', gender: 'Female', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
//     {  firstName: 'John', lastName: 'Okafor', gender: 'Male', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
//     {  firstName: 'Chidinma', lastName: 'Okafor', gender: 'Female', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
//     {  firstName: 'John', lastName: 'Okafor', gender: 'Male', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
//     {  firstName: 'Chidinma', lastName: 'Okafor', gender: 'Female', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
//     {  firstName: 'John', lastName: 'Okafor', gender: 'Male', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
//     {  firstName: 'Chidinma', lastName: 'Okafor', gender: 'Female', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
//     {  firstName: 'John', lastName: 'Okafor', gender: 'Male', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
//     {  firstName: 'Chidinma', lastName: 'Okafor', gender: 'Female', address: 'Edo Tech Pack', phoneNumber: '07089576355' },
//   ];

//   return (
//     <S.StyledContainer>
//       <div style={{ position: 'relative' }}>

//       <S.Leftarrow>
//         <FaArrowLeft size={24} />
//         <S.Text>Go Back</S.Text>
//       </S.Leftarrow>
  
//       <S.Show>
//       <S.MainTop>All Registered Members</S.MainTop>
//       <S.Sort>Sort By <select>
//             <option value="all">All</option>
//             <option value="check">check</option>
//           </select></S.Sort>
//       </S.Show>

//         <Table data={tableData} />

//         <S.PaginationContainer>
//           <S.PaginationItem><MdArrowBackIos /></S.PaginationItem>
//           <S.PaginationText color="#DADADA">Prev</S.PaginationText>
//           <S.PaginationBackground>
//             <S.PaginationText color="#FFF">1</S.PaginationText>
//           </S.PaginationBackground>
//           <S.PaginationText color="#031839">2</S.PaginationText>
//           <S.PaginationText color="#031839">3</S.PaginationText>
//           <S.PaginationItem><BsThreeDots /></S.PaginationItem>
//           <S.PaginationText color="#031839">10</S.PaginationText>
//           <S.PaginationText color="#031839">Next</S.PaginationText>
//           <S.PaginationItem><MdArrowForwardIos /></S.PaginationItem>
//         </S.PaginationContainer>

//       </div>
//     </S.StyledContainer>
//   );
// };

// export default AllMembers;
