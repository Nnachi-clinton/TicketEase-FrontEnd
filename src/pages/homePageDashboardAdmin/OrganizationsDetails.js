import React from 'react';
import styled from 'styled-components';

import GeneralIcon from '../assets/ProfileDetails/General.svg';
import PhoneIcon from '../assets/ProfileDetails/phone.svg';
import CommunicationIcon from '../assets/ProfileDetails/communication.svg';

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