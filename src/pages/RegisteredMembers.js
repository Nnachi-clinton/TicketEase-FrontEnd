import React, { useState } from 'react';
import image from '../pages/manager/images/vector.jpg';
import styled from 'styled-components';
import { StyledButton } from './TicketInputfield';
import MemberProfile from './MemberProfile';

const Fulldiv = styled.div`
  overflow: hidden;
  background-color: #f0f0f0;
  margin-left: 280px;
  margin-top: 78px;
  width: 1233px;
  height: 899px;
`;
const Ptop = styled.p`
  margin-top: 0px 20px 0px;
  cursor: pointer;
`;
const Flexdiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px;
  margin: 20px;
`;
const Htop = styled.h2`
  margin-top: 0px;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
// const FlexDiv2 = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 0px;
//   height: 30px;
//   background-color: #d3d3d3;
//   .selectt {
//     cursor: pointer;
//     background-color: #d3d3d3;
//     border: none;
//   }
// `;
// const SpanSortby = styled.span`
//   white-space: nowrap;
//   padding-top: 5px;
// `;
// const SpanInnerSortBy = styled.span`
//   padding-top: 3px;
// `;

const Innerdiv = styled.div`
  background-color: white;
  height: 899px;

  .marginb {
    margin-bottom: 20px;
  }
`;
const Roww = styled.div`
  //   border-style:solid;
  //  border-bottom 10px;
  // height:1em
`;

const Column = styled.div`
  float: left;
  width: 25%;
  margin: 0px;
  padding: 0px;
  p {
    background-color: white;
  }
`;
const FormSpaceNotFoundd = styled.div`
  width: 300px;
  margin: auto;
  background-color: white;
`;
const ImgDiv = styled.div`
  background-color: white;
  margin: 0px;
  padding: 0px;
`;
const Centerh = styled.h3`
  padding: 0px;
  margin: 0px;
  text-align: center;
  background-color: white;
`;
const Centerp = styled.p`
  font-size: 14px;
  text-align: center;
`;
const Img = styled.img`
  width: 300px;
  margin: auto;
  background-color: white;
  width: 100%;
`;
function RegisteredMembers({ handleAllMembers }) {
  const [steps, setSteps] = useState(0);

  return (
    <>
      {steps === 0 && (
        <>
          <Fulldiv>
            <Ptop style={{ marginLeft: 20 }}>&#x2B05; Go Back</Ptop>
            <Flexdiv>
              <Htop>All Registered Members</Htop>
              {/* <FlexDiv2>
                <SpanSortby>&nbsp;Sort by &nbsp;</SpanSortby>
                <SpanInnerSortBy>|&nbsp;</SpanInnerSortBy>
                <select className="selectt">
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </FlexDiv2> */}
            </Flexdiv>
            <Innerdiv style={{ margin: 20 }}>
              <Roww>
                <div>
                  <Column>
                    <p>Name</p>
                  </Column>
                  <Column>
                    <p>Address</p>
                  </Column>
                  <Column>
                    <p>Email</p>
                  </Column>
                  <Column>
                    <p>Phone Number</p>
                  </Column>
                </div>
              </Roww>
              <hr />
              <FormSpaceNotFoundd>
                <Innerdiv style={{ textAlign: 'center' }}>
                  <ImgDiv>
                    <Img
                      src={image}
                      alt="Img"
                      className="form-space-notfound notfound-image"
                    />
                    <Centerh>No member found</Centerh>
                  </ImgDiv>
                  <Centerp>Sorry we couldnt find any results</Centerp>

                  <button
                    style={{
                      marginBottom: 20,
                      backgroundColor: '#505F98',
                      color: 'white',
                      width: '250px',
                      height: '48px',
                      fontfamily: 'Mulish',
                      fontsize: '16px',
                      fontstyle: 'normal',
                      fontweight: '600',
                      lineheight: 'normal',
                    }}
                    type="button"
                    onClick={() => setSteps(1)}
                  >
                    Create a new Member
                  </button>
                </Innerdiv>
              </FormSpaceNotFoundd>
            </Innerdiv>
          </Fulldiv>
        </>
      )}
      {steps === 1 && <MemberProfile handleAllMembers={handleAllMembers} />}
    </>
  );
}
export default RegisteredMembers;
