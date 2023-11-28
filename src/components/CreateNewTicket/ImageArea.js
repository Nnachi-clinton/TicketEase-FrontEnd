import React from "react";
import styled from "styled-components";
import member from '../../assets/member.svg';

const ImageContainer = styled.div`
  align-self: center;
  justify-content: center;
  display: flex;
  align-items: center;
  min-height: 1px;
  margin-top: 14px !important;
  margin-bottom: 50px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.2;  
  object-fit: contain;
  object-position: center;
  width: 200px;
  overflow: hidden;
  align-self: center;
  margin-top: 150px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ImageSection = () => {
  return (
    <>
      <ImageContainer>
        <Image
          loading="lazy"
          src={member}
          alt="Sample Image"
        />
      </ImageContainer>
    </>
  );
};

export default ImageSection;