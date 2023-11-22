// MyComponent.js
import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../ProfileDetails/ProfileImage';
import Direction from '../assets/ProfileDetails/Direction.svg';
import ProfilePhoto from '../assets/ProfileDetails/ProfilePhoto.svg';
import GeneralInformation from '../ProfileDetails/GeneralInformation';
import calender from '../assets/ProfileDetails/calender.svg';
import communication from '../assets/ProfileDetails/communication.svg';
import gender from '../assets/ProfileDetails/gender.svg';
import General from '../assets/ProfileDetails/General.svg';
import map from '../assets/ProfileDetails/map.svg';
import phone from '../assets/ProfileDetails/phone.svg';

const Container = styled.div`
background-color: red:
width: 75%;
`;

const SubContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
width: 25%
justify-content: center;
padding: 20px;
`;

const Header = styled.div`
  display: flex;
  width: 141px;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-left: 12px;
  margin-top: 20px;
  margin-bottom: 22px;

  @media (max-width: 600px) {
    margin-left: 2.5px;
  }
`;

const Title = styled.div`
  color: black;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.25;
  flex-grow: 1;
  white-space: nowrap;
`;

const Separator = styled.div`
  background-color: #d3d3d3;
  align-self: stretch;
  min-height: 1px;
  width: 100%;
  margin-top: 6px;
  margin-bottom: 30px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-right: 20px;

  @media (max-width: 600px) {
    padding-left: 5px;
    padding-right: 20px;
  }
`;

const MyComponent = (props) => {
  return (
    <Container>
      <SubContainer>
        <div>
          <Header>
            <img src={Direction} alt="direction" />
            <Title>Profile Detail</Title>
          </Header>
          <Separator />
          <DetailsContainer>
            <ProfileImage src={ProfilePhoto} />
            <GeneralInformation
              imageSrc={General}
              addressText="Chiebuka Ikenna"
            />
            <GeneralInformation
              imageSrc={map}
              addressText="10, Ayo Street, Ikoyi, Lagos"
            />
            <GeneralInformation imageSrc={phone} addressText="07069298070" />
            <GeneralInformation imageSrc={gender} addressText="Male" />
            <GeneralInformation imageSrc={calender} addressText="24/04/1996" />
            <GeneralInformation
              imageSrc={communication}
              addressText="chiebukaikenna@gmail.com"
            />
          </DetailsContainer>
        </div>
      </SubContainer>
    </Container>
  );
};

export default MyComponent;
