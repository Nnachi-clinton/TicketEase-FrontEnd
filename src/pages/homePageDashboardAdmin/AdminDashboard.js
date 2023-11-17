import React from 'react';
import PropTypes from 'prop-types';
import { useTable, usePagination } from 'react-table';
import '../homePageDashboardAdmin/AdminDashboard.css';
import notification from '../../assets/images/notification 1.svg';


const Card = ({ cardType, children }) => {
  return <div className={`card ${cardType}`}>{children}</div>;
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['top', 'down', 'bell', 'table']).isRequired,
};

const BasicTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize },
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column.id} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr key={rowIndex} {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td key={cellIndex} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {Math.ceil(data.length / pageSize)}
          </strong>{' '}
        </span>
      </div>
    </div>
  );
};

BasicTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

const AdminDashboard = () => {
  const columns = [
    { Header: 'S/N', accessor: 'sn' },
    { Header: 'Company Name', accessor: 'companyName' },
    { Header: 'Address', accessor: 'address' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Phone Number', accessor: 'phoneNumber' },
  ];

  const data = [
    {
      sn: 1,
      companyName: 'Decagon Tech Park',
      address: 'Edo State, Benin City',
      email: 'decagoninstitute@decagon.dev',
      phoneNumber: '+2348063635197',
    },
    // ... more data
  ];
   //let bellImg = "src/assets/images/notification 1.svg";

  return (
    <>
      <div className="app-container">
        <div className="grid-container">
          <Card cardType="top" />
          <Card cardType="down"/>

          <Card cardType="bell">
          <section>
            <div className="bellImg">
            <img src={notification} alt="bell" />
            </div>
            <h1>No notification yet</h1>
            <h2>You have currently no notification. 
            We'll notify you when something new arrives!</h2>
        </section>
          </Card>

          <Card cardType="table">
            <h1>Company Information</h1>
            <BasicTable columns={columns} data={data} />
          </Card>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
