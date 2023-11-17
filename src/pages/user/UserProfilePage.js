import React, { useState } from 'react';
import UpdateUserImage from '../../components/user/UpdateUserImage';
import UpdateUserProfileForm from '../../components/user/UpdateUserProfileForm';

function UserProfilePage() {
  // State for managing user profile data
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    state: '',
  });

  // State for managing the selected image
  const [selectedImg, setSelectedImg] = useState(null);

  // Handler for updating user data
  const handleUserDataChange = (name, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for updating the selected image
  const handleImageChange = (image) => {
    setSelectedImg(image);
  };

  // Handler for submitting the form
  const handleSubmit = () => {
    // Your logic for handling the form submission with user data and selected image
    console.log('Submitting form:', userData, selectedImg);
  };

  return (
    <div className='cover'>
      <UpdateUserImage userPhoto={selectedImg} />
      <p style={{ border: '1px solid #e5e5e5' }}></p>
      <UpdateUserProfileForm
        userData={userData}
        onUserDataChange={handleUserDataChange}
        onImageChange={handleImageChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

// const Cover = styled.div`
//   width: 1084px;
//   height: 892px;
//   border-radius: 4px;
//   background: #fff;
//   /* Add any additional styles as needed */
// `;

export default UserProfilePage;

