import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 8px;
  margin-left: 8px;

  @media (max-width: 600px) {
    margin-left: 1.5px;
  }
`;

const AddressImage = styled.img`
  aspect-ratio: 0.71;
  object-fit: contain;
  object-position: center;
  width: 18px;
  height: 18px;
  fill: slate-500;
  overflow: hidden;
  flex-shrink: 0;
  max-width: 100%;
  margin-bottom: 27px;
  margin-right: 32px;
`;

const AddressText = styled.div`
  color: black;
  font-size: 0.875rem;
  line-height: 1.25;
  flex-grow: 1;
  white-space: nowrap;
  margin-bottom: 27px;
`;

const GeneralInformation = ({ imageSrc, addressText }) => {
  return (
    <Container>
      <AddressImage loading="lazy" src={imageSrc} alt="Address" />
      <AddressText>{addressText}</AddressText>
    </Container>
  );
};

export default GeneralInformation;
