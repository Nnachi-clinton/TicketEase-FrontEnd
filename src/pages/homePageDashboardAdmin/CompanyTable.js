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
    getManagers(pageNumber);
  };

  const handleViewDetails = (userDetails) => {
    setSelectedUserDetails(userDetails);
  };

  const tableCellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = [];
    const ellipsis = <span style={{ margin: '0 5px' }}>...</span>;

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            style={{
              padding: '3px 8px',
              cursor: 'pointer',
              background: '#505F98',
              color: 'white',
              fontWeight: currentPage === i ? 'bold' : 'normal',
            }}
          >
            {i}
          </button>
        );
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);

      if (startPage > 1) {
        pageNumbers.push(
          <button
            key={1}
            onClick={() => handlePageChange(1)}
            style={{
              padding: '3px 8px',
              cursor: 'pointer',
              background: '#505F98',
              color: 'white',
            }}
          >
            1
          </button>
        );
        pageNumbers.push(ellipsis);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            style={{
              padding: '3px 8px',
              cursor: 'pointer',
              background: '#505F98',
              color: 'white',
              fontWeight: currentPage === i ? 'bold' : 'normal',
            }}
          >
            {i}
          </button>
        );
      }

      if (endPage < totalPages) {
        pageNumbers.push(ellipsis);
        pageNumbers.push(
          <button
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            style={{
              padding: '3px 8px',
              cursor: 'pointer',
              background: '#505F98',
              color: 'white',
            }}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <>
      <Container>
        <div>
          <table
            style={{
              width: '125%',
              borderCollapse: 'collapse',
              marginTop: '10px',
              background: '#FFF',
              height: '100%',
            }}
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
                      style={{
                        padding: '3px 8px',
                        cursor: 'pointer',
                        background: '#505F98',
                        color: 'white',
                      }}
                      onClick={() => handleViewDetails(company)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <button
              onClick={() => changePage('prev')}
              style={{
                padding: '3px 8px',
                cursor: 'pointer',
                background: '#505F98',
                color: 'white',
              }}
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
              {renderPageNumbers()}
            </ul>
            <button
              onClick={() => changePage('next')}
              style={{
                padding: '3px 8px',
                cursor: 'pointer',
                background: '#505F98',
                color: 'white',
              }}
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
