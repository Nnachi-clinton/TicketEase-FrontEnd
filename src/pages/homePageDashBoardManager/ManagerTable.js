import React, { useState } from 'react';

const ManagerTable = ({
  registeredUsers,
  currentPage,
  itemsPerPage,
  handleViewClick,
  totalItems,
  setCurrentPage,
  getUsers,
}) => {
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
    handleViewClick(pageNumber);
    getUsers(pageNumber);
  };

  const tableCellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  const paginationButtonStyle = {
    padding: '3px 8px',
    cursor: 'pointer',
    background: '#505F98',
    color: 'white',
  };

  const viewButtonStyle = {
    padding: '3px 8px',
    cursor: 'pointer',
  };
  return (
    <div>
      {/* Table content */}
      <table
        style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}
      >
        <thead>
          <tr style={{ background: '#E5E5E5', color: '#444' }}>
            <th style={tableCellStyle}>SN</th>
            <th style={tableCellStyle}>First Name</th>
            <th style={tableCellStyle}>Last Name</th>
            <th style={tableCellStyle}>Email</th>
            <th style={tableCellStyle}>Phone Number</th>
            <th style={tableCellStyle}></th>
          </tr>
        </thead>

        <tbody>
          {registeredUsers.map((user, index) => (
            <tr key={user.id}>
              <td style={tableCellStyle}>
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>
              <td style={tableCellStyle}>{user.firstName}</td>
              <td style={tableCellStyle}>{user.lastName}</td>
              <td style={tableCellStyle}>{user.email}</td>
              <td style={tableCellStyle}>{user.phoneNumber}</td>
              <td style={tableCellStyle}>
                <button
                  onClick={() => handleViewClick(user)}
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
  );
};

export default ManagerTable;
