// import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import AxiosInstance from '../../Request/AxiosInstance';
// import { FaChevronRight } from 'react-icons/fa';

const MergedComponent = () => {
  return (
    <StyledDiv1>
      <StyledDiv2>Organizations</StyledDiv2>
      <img
        alt=""
        src="create_organisation.svg"
        style={{ cursor: 'pointer', marginRight: '-14em' }}
      />
    </StyledDiv1>
  );
};

const StyledDiv1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10em;
  gap: 20px;
  padding-right: 80px;
  margin-top: 10em;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;

const StyledDiv2 = styled.div`
  color: #1d2126;
  flex-grow: 1;
  white-space: nowrap;
  font: 700 24px Mulish, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const StyledCardContainer = styled.div`
  width: 336px;
  height: 320px;
  border: 1px solid white;
  border-radius: 4px;
  background: #fff;
  margin-top: 30px;
  margin-left: 120px;
`;

const StyledClickableContainer = styled.div`
  cursor: pointer;
  margin-top: 1.2em;
  float: right;
`;

const StyledDiv5 = styled.div`
  display: flex;
  width: 296px;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const StyledDiv6 = styled.div`
  color: #1d2126;
  flex-grow: 1;
  white-space: nowrap;
  margin-left: 10px;
  margin-top: 1em;
  font: 600 20px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const StyledImg2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

const StyledDiv7 = styled.div`
  background-color: #e5e5e5;
  align-self: stretch;
  margin-top: 12px;
  height: 1px;
`;

const StyledDiv8 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 19px;
  flex-direction: column;
  padding: 0 20px;
`;

const StyledDiv9 = styled.div`
  color: #c4c4c4;
  white-space: nowrap;
  font: 400 12px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const StyledDiv10 = styled.div`
  display: flex;
  margin-top: 7px;
  justify-content: space-between;
  gap: 20px;
`;

const StyledDiv11 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`;

const StyledImg3 = styled.img`
  aspect-ratio: 3.13;
  object-fit: contain;
  object-position: center;
  width: 163px;
  overflow: hidden;
  align-self: center;
`;

const StyledDiv12 = styled.div`
  color: #c4c4c4;
  align-self: stretch;
  margin-top: 23px;
  white-space: nowrap;
  font: 400 12px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const StyledDiv13 = styled.div`
  color: #505f98;
  white-space: nowrap;
  justify-content: center;
  align-items: start;
  background-color: rgba(80, 95, 152, 0.05);
  align-self: stretch;
  margin-top: 7px;
  padding: 10px;
  font: 700 16px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const StyledDiv14 = styled.div`
  color: #21334f;
  align-self: stretch;
  margin-top: 34px;
  white-space: nowrap;
  font: 700 14px Mulish, sans-serif;
  width: 250px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const StyledDiv15 = styled.div`
  display: flex;
  flex-basis: 0%;
  flex-direction: column;
`;

const StyledDiv16 = styled.div`
  color: #fff;
  white-space: nowrap;
  background-color: #505f98;
  aspect-ratio: 1;
  width: 50px;
  padding: 0 11px;
  font: 700 24px Mulish, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 40px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const StyledButton = styled.button`
  margin-bottom: 16px;
  color: #505f98;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// const StyledMemberPhotosContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const StyledViewAllMembersButton = styled.button`
//   color: #505f98;
//   margin-bottom: 16px;
// `;

// const StyledMemberPhoto = styled.img`
//   aspect-ratio: 3.13;
//   object-fit: contain;
//   object-position: center;
//   width: 163px;
//   overflow: hidden;
//   align-self: center;
//   margin-bottom: 10px;
// `;

// const StyledChevronRight = styled(FaChevronRight)`
//   color: #505f98;
//   cursor: pointer;

// `;

// const StyledImg4 = styled.img`
//   aspect-ratio: 1;
//   object-fit: contain;
//   object-position: center;
//   width: 18px;
//   overflow: hidden;
//   align-self: end;
//   margin-top: 110px;
//   max-width: 100%;
//   @media (max-width: 991px) {
//     margin-top: 40px;
//   }
// `;

const CardContainer = ({ organizationName }) => {
  const navigate = useNavigate();

  return (
    <StyledCardContainer>
      <StyledDiv5 style={{ width: '100%' }}>
        <div style={{ display: 'flex' }}>
          <StyledDiv6 style={{ width: '295px' }}>{organizationName}</StyledDiv6>
          <StyledClickableContainer
            onClick={() => console.log('StyledImg2 clicked')}
          >
            <StyledImg2
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/68ffaddb-8e9d-4a42-94fa-324ab898210e?"
            />
          </StyledClickableContainer>
        </div>
      </StyledDiv5>
      <StyledDiv7 />
      <StyledDiv8>
        <StyledDiv9>TOTAL MEMBERS</StyledDiv9>
        <StyledDiv10>
          <StyledDiv11>
            <StyledImg3 loading="lazy" srcSet="..." />
            <StyledDiv12>STATUS</StyledDiv12>
            <StyledDiv13>Active</StyledDiv13>
            <StyledDiv14>
              <StyledButton
                onClick={() => console.log('View all Members clicked')}
              >
                View all Members
              </StyledButton>
              {/* <StyledChevronRight
                onClick={() => console.log('Chevron Left clicked')}
              /> */}
            </StyledDiv14>
          </StyledDiv11>
          <StyledDiv15>
            <StyledDiv16>10</StyledDiv16>
          </StyledDiv15>
        </StyledDiv10>
      </StyledDiv8>
    </StyledCardContainer>
  );
  // const CardContainer = ({ organizationName, handleCreateOrganization }) => {
  //   const navigate = useNavigate();
  //   const [members, setMembers] = useState([]);

  //   // Function to fetch members
  //   const fetchMembers = async () => {
  //     try {
  //       const response = await AxiosInstance.get('/api/members'); // Adjust the API endpoint
  //       const membersData = response.data?.members || [];
  //       setMembers(membersData);
  //     } catch (error) {
  //       console.error('Error fetching members:', error.message);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchMembers();
  //   }, []); // Fetch members on component mount

  //   // Function to get member photos
  //   const getMemberPhotos = () => {
  //     return members.map((member) => member.photoUrl);
  //   };

  //   const memberPhotos = getMemberPhotos();

  //   return (
  //     <StyledCardContainer>
  //       <StyledDiv5 style={{ width: '100%' }}>
  //         <div style={{ display: 'flex' }}>
  //           <StyledDiv6 style={{ width: '295px' }}>{organizationName}</StyledDiv6>
  //           <StyledClickableContainer
  //             onClick={() => console.log('StyledImg2 clicked')}
  //           >
  //             <StyledImg2
  //               loading="lazy"
  //               src="https://cdn.builder.io/api/v1/image/assets/TEMP/68ffaddb-8e9d-4a42-94fa-324ab898210e?"
  //             />
  //           </StyledClickableContainer>
  //         </div>
  //       </StyledDiv5>
  //       <StyledDiv7 />
  //       <StyledDiv8>
  //         <StyledDiv9>TOTAL MEMBERS</StyledDiv9>
  //         <StyledDiv10>
  //           <StyledDiv11>
  //             <StyledMemberPhotosContainer>
  //               {memberPhotos.slice(0, 4).map((photo, index) => (
  //                 <StyledMemberPhoto key={index} loading="lazy" src={photo} />
  //               ))}
  //             </StyledMemberPhotosContainer>
  //             <StyledDiv12>STATUS</StyledDiv12>
  //             <StyledDiv13>Active</StyledDiv13>
  //             <StyledDiv14>
  //               {memberPhotos.length > 4 && (
  //                 <StyledViewAllMembersButton
  //                   onClick={() => console.log('View all Members clicked')}
  //                 >
  //                   View all Members
  //                 </StyledViewAllMembersButton>
  //               )}
  //               {/* <StyledChevronLeft onClick={() => console.log('Chevron Left clicked')} /> */}
  //             </StyledDiv14>
  //           </StyledDiv11>
  //           <StyledDiv15>
  //             <StyledDiv16>10</StyledDiv16>
  //           </StyledDiv15>
  //         </StyledDiv10>
  //       </StyledDiv8>
  //     </StyledCardContainer>
  //   );
};

export default CardContainer;
export { MergedComponent, CardContainer };
