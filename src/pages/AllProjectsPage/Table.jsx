import React from 'react';

const Table = ({
  data,
  currentPage,
  itemsPerPage,
  handleViewClick,
  totalItems,
  setCurrentPage,
  getProjects,
  handleViewTickets,
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
    getProjects(pageNumber);
  };

  const tableCellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    // background: '#FFFFFF'
  };

  const paginationButtonStyle = {
    padding: '3px 8px',
    cursor: 'pointer',
  };

  const viewButtonStyle = {
    padding: '3px 8px',
    cursor: 'pointer',
  };
  return (
    <div>
      {/* Table content */}
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '10px',
          background: '#FFF',
        }}
      >
        <thead>
          <tr style={{ background: '#FAFAFA', color: '#444' }}>
            <th style={tableCellStyle}>SN</th>
            <th style={tableCellStyle}>Board ID</th>
            <th style={tableCellStyle}>Title</th>
            <th style={tableCellStyle}>Description</th>
            <th style={tableCellStyle}></th>
          </tr>
        </thead>

        <tbody>
          {console.log('Data:', data)}
          {data &&
            data.map((item, index) => (
              <tr key={item.id}>
                <td style={tableCellStyle}>
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td style={tableCellStyle}>{item.boardId}</td>
                <td style={tableCellStyle}>{item.title}</td>
                <td style={tableCellStyle}>{item.description}</td>
                <td style={tableCellStyle}>
                  <button
                    // onClick={() => handleViewClick(item)}
                    style={viewButtonStyle}
                    onClick={handleViewTickets}
                  >
                    View Tickets
                  </button>
                  <button
                    onClick={() => handleViewClick(item)}
                    style={viewButtonStyle}
                  >
                    Create Ticket
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

export default Table;
