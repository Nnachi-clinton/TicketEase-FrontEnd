import React from 'react';
import * as S from "../../components/AllMembers/AllMembers";


const Table = ({ data }) => {
  return (
    <S.StyledTable>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>More Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.gender}</td>
            <td>{item.address}</td>
            <td>
              {item.phoneNumber}
            </td>
            <td>
              <S.StyledViewLink to={`/details/${index}`}>
                View
              </S.StyledViewLink>
            </td>
          </tr>
        ))}
      </tbody>
    </S.StyledTable>
  );
};

export default Table;
