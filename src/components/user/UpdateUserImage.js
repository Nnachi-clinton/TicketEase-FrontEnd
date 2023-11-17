import React, { useState } from 'react';
import defaultImage from '../../assets/defaultImage.svg';

const UpdateUserImage = ({ userPhoto }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const imageProfileStyle = {
    borderRadius: '50%',
    backgroundColor: '#C4C4C4',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
    height: '104px',
    width: '104px',
    cursor: 'pointer',
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

  const handleClick = (event) => {
    // 👇️ refers to the image element
    console.log(event.target);
    var fileInput = document.getElementById('imgUpload');
    var fileTrigger = document.getElementById('imgdisplay');

    // fileInput.addEventListener('change', function () {
    //   console.log('Selected file: ', fileInput.files[0].name);
    // });
    fileTrigger.addEventListener('click', function () {
      fileInput.click();
    });
    console.log('Image clicked');
  };

  return (
    <div className="user-profile">
      <div onClick={handleClick} style={imageProfileStyle}>
        <img
          style={imageStyle}
          id="imgdisplay"
          src={selectedImg || userPhoto || defaultImage}
          alt="User Profile "
          className="profile-photo"
        />
      </div>
      <input
        style={{ display: 'none' }}
        type="file"
        id="imgUpload"
        onChange={handleImageChange}
        accept="image/*"
      />
      <p style={textStyle}>Upload Organization Logo</p>
      <p style={textStyles}>Image should not be more than 1mb</p>
    </div>
  );
};

export default UpdateUserImage;
