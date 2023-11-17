import React from 'react';

import Styled from 'styled-components';
import UserImage from '../../components/user/UserImage';
// import LineThrough from "./Line";
import UserForm from '../../components/user/UserForm.js';

const StyleMain = Styled.div`
background: rgba(0, 0, 0, 0.5);
width: 100%;
// height: 96vh;
height: 1086px;
overflow: none;
display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerDiv = Styled.div`
  background: white;
  padding: 20px;
  width: 155vh;
  // height: 80vh
  height: auto
`;

function UpdateUser() {
  return (
    <>
      <StyleMain>
        <div>
          <InnerDiv>
            <div>
              <UserImage />
              <UserForm />
            </div>
          </InnerDiv>
        </div>
      </StyleMain>
    </>
  );
}

export default UpdateUser;
