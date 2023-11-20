// import React, { useState } from "react";

// const CompanyTable = () => {
//   const [companies, setCompanies] = useState([
//     {
//       sn: 1,
//       companyName: "Ndubuogaranya PLC",
//       address: "123 Main St, Abuja",
//       email: "ndu@ndu.com",
//       phoneNumber: "+234(0)80 0897 8787",
//       industry: "Finance",
//     },
//     {
//         sn: 1,
//         companyName: "Ndubuogaranya PLC",
//         address: "123 Main St, Abuja",
//         email: "ndu@ndu.com",
//         phoneNumber: "+234(0)80 0897 8787",
//         industry: "Finance",
//       },
//       {
//         sn: 1,
//         companyName: "Ndubuogaranya PLC",
//         address: "123 Main St, Abuja",
//         email: "ndu@ndu.com",
//         phoneNumber: "+234(0)80 0897 8787",
//         industry: "Finance",
//       },
//       {
//         sn: 1,
//         companyName: "Ndubuogaranya PLC",
//         address: "123 Main St, Abuja",
//         email: "ndu@ndu.com",
//         phoneNumber: "+234(0)80 0897 8787",
//         industry: "Finance",
//       },
//       {
//         sn: 1,
//         companyName: "Ndubuogaranya PLC",
//         address: "123 Main St, Abuja",
//         email: "ndu@ndu.com",
//         phoneNumber: "+234(0)80 0897 8787",
//         industry: "Finance",
//       },
//       {
//         sn: 1,
//         companyName: "Ndubuogaranya PLC",
//         address: "123 Main St, Abuja",
//         email: "ndu@ndu.com",
//         phoneNumber: "+234(0)80 0897 8787",
//         industry: "Finance",
//       },
//       {
//         sn: 1,
//         companyName: "Ndubuogaranya PLC",
//         address: "123 Main St, Abuja",
//         email: "ndu@ndu.com",
//         phoneNumber: "+234(0)80 0897 8787",
//         industry: "Finance",
//       }

//   ]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5); 


//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = companies.slice(indexOfFirstItem, indexOfLastItem);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Previous page
//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   // Next page
//   const nextPage = () => {
//     if (indexOfLastItem < companies.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return (
//     <div>
//       {/* Table content */}
//       <table
//         style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}
//       >
//         <thead>
//           <tr style={{ background: "#E5E5E5", color: "#444" }}>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>SN</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//               Company Name
//             </th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//               Address
//             </th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//               Phone Number
//             </th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>
//               Industry
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((company, index) => (
//             <tr key={company.sn}>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {company.sn}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {company.companyName}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {company.address}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {company.email}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {company.phoneNumber}
//               </td>
//               <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                 {company.industry}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div
//         style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}
//       >
//         <button
//           onClick={prevPage}
//           style={{ padding: "5px 10px", cursor: "pointer" }}
//         >
//           Previous
//         </button>
//         <ul
//           style={{
//             listStyle: "none",
//             display: "flex",
//             justifyContent: "center",
//             margin: "0 10px",
//           }}
//         >
//           {Array.from(
//             { length: Math.ceil(companies.length / itemsPerPage) },
//             (_, index) => (
//               <li key={index} style={{ margin: "0 5px" }}>
//                 <button
//                   onClick={() => paginate(index + 1)}
//                   style={{ padding: "5px 10px", cursor: "pointer" }}
//                 >
//                   {index + 1}
//                 </button>
//               </li>
//             )
//           )}
//         </ul>
//         <button
//           onClick={nextPage}
//           style={{ padding: "5px 10px", cursor: "pointer" }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CompanyTable;

import React, { useState } from "react";

const CompanyTable = () => {
  const [companies] = useState([
    {
        sn: 1,
        companyName: "Decagon Institue",
        address: "Edo TechPark Edo State Nigeria",
        email: "decagonEdo@dev.com",
        phoneNumber: "+234(0)80 0897 8787",
        industry: "Education",
      }
      
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = companies.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(companies.length / itemsPerPage)));

  return (
    <div>
      {/* Table content */}
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}
      >
        <thead>
          <tr style={{ background: "#E5E5E5", color: "#444" }}>
            <th style={tableCellStyle}>SN</th>
            <th style={tableCellStyle}>Company Name</th>
            <th style={tableCellStyle}>Address</th>
            <th style={tableCellStyle}>Email</th>
            <th style={tableCellStyle}>Phone Number</th>
            <th style={tableCellStyle}>Industry</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((company, index) => (
            <tr key={company.sn}>
              <td style={tableCellStyle}>{company.sn}</td>
              <td style={tableCellStyle}>{company.companyName}</td>
              <td style={tableCellStyle}>{company.address}</td>
              <td style={tableCellStyle}>{company.email}</td>
              <td style={tableCellStyle}>{company.phoneNumber}</td>
              <td style={tableCellStyle}>{company.industry}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div
        style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}
      >
        <button onClick={prevPage} style={paginationButtonStyle}>
          Prev
        </button>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            margin: "0 10px",
          }}
        >
          {Array.from(
            { length: Math.ceil(companies.length / itemsPerPage) },
            (_, index) => (
              <li key={index} style={{ margin: "0 5px" }}>
                <button
                  onClick={() => paginate(index + 1)}
                  style={paginationButtonStyle}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
        <button onClick={nextPage} style={paginationButtonStyle}>
          Next
        </button>
      </div>
    </div>
  );
};

const tableCellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
};

const paginationButtonStyle = {
  padding: "3px 8px",
  cursor: "pointer",
};

export default CompanyTable;
