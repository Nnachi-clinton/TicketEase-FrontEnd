import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  handlePageChange,
  setCurrentPage,
  totalPageCount,
}) => {
  const paginationButtonStyle = {
    padding: '3px 8px',
    cursor: 'pointer',
  };

  const nextButtonStyle = {
    ...paginationButtonStyle,
    color: '#505F98', 
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div
      style={{
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Navigation icon for "Prev" */}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        style={paginationButtonStyle}
        disabled={currentPage === 1}
      >
        <FaChevronLeft />
      </button>

      {/* "Prev" button */}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        style={paginationButtonStyle}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* Page numbers */}
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 10px',
        }}
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index} style={{ margin: '0 5px' }}>
            <button
              onClick={() => handlePageChange(index + 1)}
              style={{
                ...paginationButtonStyle,
                color: '#505F98', // Set color to #505F98
                fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
                cursor: 'pointer',
              }}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>

      {/* "Next" button */}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        style={nextButtonStyle}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

      {/* Navigation icon for "Next" */}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        style={nextButtonStyle}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
