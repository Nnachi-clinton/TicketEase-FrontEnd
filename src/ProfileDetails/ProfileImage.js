// ProfileImage.js
import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

const Image = styled.img`
  aspect-ratio: 0.86;
  object-fit: contain;
  object-position: center;
  width: 94px;
  height: 94px;
  fill: black;
  overflow: hidden;
`;

const ProfileImage = ({ src }) => {
  return (
    <ImageContainer>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="logoInput"
      />
      <label htmlFor="logoInput">
        <Image
          loading="lazy"
          src={src}
          alt="Profile"
          style={{ cursor: 'pointer' }}
        />
      </label>
    </ImageContainer>
  );
};

export default ProfileImage;
