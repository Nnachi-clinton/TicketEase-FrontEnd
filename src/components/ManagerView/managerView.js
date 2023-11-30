import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AxiosInstance from '../../Request/AxiosInstance';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  padding-bottom: 30px
  align-items: flex-start;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;
const EmptyProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: lightgray;
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  margin-bottom: 10px;
  padding-bottom: 40px;
  text-align: left;
`;


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchManagerDetails = async () => {
      try {
        const res = await AxiosInstance.get(
          '/managers/GetbyId?id=242e5eee-bea2-4c77-8c26-d5920c1cb039'
        );
        console.log('Fetched manager details:', res.data);
        // const managerDetails = res.data;
      } catch (error) {
        console.error('Error fetching manager details:', error.message);
      }
    }
    // fetch('https://localhost:7075/api/managers/GetById?id=242e5eee-bea2-4c77-8c26-d5920c1cb039')
    // .then(response => response.json())
    // .then(data => setUser(data))
    // .catch(error => console.error('Error fetching user data:', error));
    fetchManagerDetails();
  }, []);

  return (
    <Container>
     {user && (
        <>
          {user.profileImage ? (
            <ProfileImage src={user.profileImage} alt="Profile" />
          ) : (
            <EmptyProfileImage />
          )}
      
      <InfoItem><strong>Company Name:</strong> {user.name}</InfoItem>
      <InfoItem><strong>Business Number:</strong> {user.phoneNumber}</InfoItem>
      <InfoItem><strong>Business Email:</strong> {user.email}</InfoItem>
      <InfoItem><strong>company Address:</strong> {user.address}</InfoItem>
      <InfoItem><strong>Company Description:</strong> {user.description}</InfoItem>
      
    </>
    )}
    </Container>
  );
}


export default App;

                 