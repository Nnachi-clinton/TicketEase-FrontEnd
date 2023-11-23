import React, { useState } from 'react';

const CompanyTable = ({
  companies,
  currentPage =1,
  itemsPerPage,
  handleViewClick,
  totalItems,
}) => {
  const [localCurrentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = localCurrentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = companies.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const prevPage = () => {
    if (localCurrentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (localCurrentPage < Math.ceil(totalItems / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // const handleViewClick = (company) => {
  //   // Implement your view logic here
  //   console.log('View clicked:', company);
  // };

  return (
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
              <td style={tableCellStyle}>{index + 1}</td>
              <td style={tableCellStyle}>{company.companyName}</td>
              <td style={tableCellStyle}>{company.companyAddress}</td>
              <td style={tableCellStyle}>{company.businessEmail}</td>
              <td style={tableCellStyle}>{company.businessPhone}</td>
              <td style={tableCellStyle}>
                <button
                  onClick={() => handleViewClick(company)}
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
          onClick={prevPage}
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
                  onClick={() => paginate(index + 1)}
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
          onClick={nextPage}
          style={paginationButtonStyle}
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

const paginationButtonStyle = {
  padding: '3px 8px',
  cursor: 'pointer',
};

const viewButtonStyle = {
  padding: '3px 8px',
  cursor: 'pointer',
};

export default CompanyTable;