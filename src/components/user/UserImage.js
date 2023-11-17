import React from 'react';
import Styled from 'styled-components';
import defaultImage from '../../assets/defaultImage.svg';

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

const UserImage = () => {
  return (
    <>
      <Main>
        <div>
          <div>
            <img src={defaultImage} alt="Uplaod Icon"></img>
          </div>
          <Text1>
            <p>Upload Organization Logo</p>
          </Text1>
          <Text2>
            <p>Image should not be more than 1mb</p>
          </Text2>
        </div>
      </Main>
    </>
  );
};

export default UserImage;
