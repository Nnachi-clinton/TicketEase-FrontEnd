import React from 'react';
import styled from 'styled-components';

import GeneralIcon from '../../assets/ProfileDetails/General.svg';
import PhoneIcon from '../../assets/ProfileDetails/phone.svg';
import CommunicationIcon from '../../assets/ProfileDetails/communication.svg';

const Container = styled.div`
  background-color: white;
  width: 100%;
  margin-top: 0.7em;
  display: flex;
  flex-direction: column; /* Adjusted to column layout */
  align-items: center; /* Centered horizontally */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const GeneralInformation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #333;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const AddressText = styled.div`
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CloseButton = styled.button`
  background: #505f98;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: auto; /* Push the close button to the bottom */
`;

const OrganizationsDetails = ({ userDetails, onClose }) => {
    return (
      <Container>
        <ProfileImage src={userDetails.imageUrl} alt="Profile" />
        <DetailsContainer>
          <GeneralInformation>
            <Icon src={GeneralIcon} alt="General" />
            <AddressText>{`${userDetails.firstName} ${userDetails.lastName}`}</AddressText>
          </GeneralInformation>
          <GeneralInformation>
            <Icon src={PhoneIcon} alt="Phone" />
            <AddressText>{userDetails.phoneNumber}</AddressText>
          </GeneralInformation>
          <GeneralInformation>
            <Icon src={CommunicationIcon} alt="Communication" />
            <AddressText>{userDetails.email}</AddressText>
          </GeneralInformation>
        </DetailsContainer>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </Container>
    );
  };
  
  export default OrganizationsDetails;