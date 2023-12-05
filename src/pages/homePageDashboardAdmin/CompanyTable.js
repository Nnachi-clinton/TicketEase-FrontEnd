import React, { useState } from 'react';
import OrganizationsDetails from '../homePageDashboardAdmin/OrganizationsDetails';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 180px;
`;

const CompanyTable = ({
  companies,
  currentPage,
  itemsPerPage,
  //handleViewClick,
  totalItems,
  setCurrentPage,
  getManagers,
}) => {

  const [selectedUserDetails, setSelectedUserDetails] = useState(null);

  const changePage = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (
      direction === 'next' &&
      currentPage < Math.ceil(totalItems / itemsPerPage)
    ) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    //handleViewClick(pageNumber);
    getManagers(pageNumber);
  };

  const handleViewDetails = (userDetails) => {
    setSelectedUserDetails(userDetails);
  };

  const tableCellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  const paginationButtonStyle = {
    padding: '3px 8px',
    cursor: 'pointer',
    background: "#505F98",
    color: "white",
  };

  const viewButtonStyle = {
    padding: '3px 8px',
    cursor: 'pointer',
  };

  return (
    <>
      <Container>
        <div>
          {/* Table content */}
          <table
            style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}
          >
            <thead>
              <tr style={{ background: '#E5E5E5', color: '#444' }}>
                <th style={tableCellStyle}>SN</th>
                <th style={tableCellStyle}>Company Name</th>
                <th style={tableCellStyle}>Address</th>
                <th style={tableCellStyle}>Email</th>
                <th style={tableCellStyle}>Phone Number</th>
                <th style={tableCellStyle}></th>
              </tr>
            </thead>

            <tbody>
              {companies.map((company, index) => (
                <tr key={company.id}>
                  <td style={tableCellStyle}>
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td style={tableCellStyle}>{company.companyName}</td>
                  <td style={tableCellStyle}>{company.companyAddress}</td>
                  <td style={tableCellStyle}>{company.businessEmail}</td>
                  <td style={tableCellStyle}>{company.businessPhone}</td>
                  <td style={tableCellStyle}>
                    <button
                      onClick={() => handleViewDetails(company)}
                      style={viewButtonStyle}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <button
              onClick={() => changePage('prev')}
              style={paginationButtonStyle}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'center',
                margin: '0 10px',
              }}
            >
              {Array.from(
                { length: Math.ceil(totalItems / itemsPerPage) },
                (_, index) => (
                  <li key={index} style={{ margin: '0 5px' }}>
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      style={{
                        ...paginationButtonStyle,
                        fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
                        cursor: 'pointer',
                      }}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
            </ul>

            <button
              onClick={() => changePage('next')}
              style={paginationButtonStyle}
              disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
            >
              Next
            </button>
          </div>
        </div>
        {selectedUserDetails && (
          <OrganizationsDetails
            userDetails={selectedUserDetails}
            onClose={() => setSelectedUserDetails(null)}
          />
        )}
      </Container>
    </>
  );
};

export default CompanyTable;
