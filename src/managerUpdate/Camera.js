import React, { useState } from 'react';
import camera from '../../src/assets/camera.svg';
import Styled from 'styled-components';
import AxiosInstance from '../Request/AxiosInstance';

const Main = Styled.div`
text-align: center;
  background: white;
  padding: 20px;
`;

const Text1 = Styled.p`
color: #1D2125;
font-family: Mulish;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
const Text2 = Styled.p`
color: rgba(29, 33, 37, 0.30);
font-family: Mulish;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
border-bottom: 1px solid rgba(229, 229, 229, 1);
padding-bottom: 25px;
`;

const CameraIcon = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (e) => {
    
    const file = e.target.files[0];

    // FormData for sending files
    // const formData = new FormData();
    // formData.append('image', file);
    const image = {
      PhotoFile:file
    }
    // console.log(images)

    try {
      // Make a PATCH request to the image upload endpoint
      const response = await AxiosInstance.patch(
        '/managers/photo/a863edac-aa44-49fe-ab79-82bdf51ecea4',
        image,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Assuming the response contains the URL of the updated image
      const imageUrl = response.data.imageUrl;

      // Set the image state to display in the front end
      setImage(imageUrl);
    } catch (error) {
      console.error('Error updating image:', error.message);
    }
  };

  return (
    <Main>
      <div>
        <div>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            id="logoInput"
            name="logoInput"
            onChange={handleImageUpload}
          />
          <label htmlFor="logoInput">
            <img
              src={image || camera}
              alt="Upload Icon"
              style={{ cursor: 'pointer', maxWidth: '100%' }}
            />
          </label>
        </div>
        <Text1>
          <p>Upload Organization Logo</p>
        </Text1>
        <Text2>
          <p>Image should not be more than 1mb</p>
        </Text2>
      </div>
    </Main>
  );
};

export default CameraIcon;
