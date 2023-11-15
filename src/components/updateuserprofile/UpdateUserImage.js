import React, { useState } from 'react';
import defaultImage from '../assets/defaultImage.svg';

const UpdateUserImage = ({ userPhoto }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const imageProfileStyle = {
    borderRadius: '50%',
    backgroundColor: '#C4C4C4',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '104px',
    width: '104px',
  };

  const textStyle = {
    textAlign: 'center',
    fontSize: '8px',
    fontWeight: 'bold',
  };

  const textStyles = {
    textAlign: 'center',
    fontSize: '8px',
    opacity: '0.3',
  };

  const imageStyle = {
    padding: '40px 0',
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="user-profile">
      <div style={imageProfileStyle}>
        <img
          style={imageStyle}
          src={selectedImg || userPhoto || defaultImage}
          alt="User Profile Photo"
          className="profile-photo"
        />
      </div>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <p style={textStyle}>Upload Organization Logo</p>
      <p style={textStyles}>Image should not be more than 1mb</p>
    </div>
  );
};

export default UpdateUserImage;
