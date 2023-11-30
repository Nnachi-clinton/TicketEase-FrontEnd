import React from 'react';
// import "./App.css";
import Card from './Card.js';
import Table from './Table.jsx';

function TableData() {
  // Sample data
  const data = [
    {
      serialNumber: 1,
      companyName: 'Decagon Institute, Edo Tech Hub',
      address: 'Off Airport road, Benin City, Edo state',
      email: 'kelvin.okonkwo@decagon.dev',
      phoneNumber: '08063635197',
    },
    {
      serialNumber: 2,
      companyName: 'Decagon Institute, Edo Tech Hub',
      address: 'Off Airport road, Benin City, Edo state',
      email: 'kelvin.okonkwo@decagon.dev',
      phoneNumber: '08063635197',
    },
    {
      serialNumber: 3,
      companyName: 'Decagon Institute, Edo Tech Hub',
      address: 'Off Airport road, Benin City, Edo state',
      email: 'kelvin.okonkwo@decagon.dev',
      phoneNumber: '08063635197',
    },
    {
      serialNumber: 4,
      companyName: 'Decagon Institute, Edo Tech Hub',
      address: 'Off Airport road, Benin City, Edo state',
      email: 'kelvin.okonkwo@decagon.dev',
      phoneNumber: '08063635197',
    },
    // Add more rows as needed
  ];

  // Define columns
  const columns = [
    { Header: 'S/N', accessor: 'serialNumber' },
    { Header: 'Company Name', accessor: 'companyName' },
    { Header: 'Address', accessor: 'address' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Phone Number', accessor: 'phoneNumber' },
  ];

  return (
    <div className="App">
      <Card body={<Table columns={columns} data={data} />} />
    </div>
  );
}

export default TableData;
