import React from "react";
// import './formstyle.css';
import image from './images/vector.jpg';
import styled from "styled-components";

const Fulldiv = styled.div `
overflow: hidden;
      background-color: #f0f0f0; 
      
`; 
const Ptop = styled.p`
margin-top: 0px 20px 0px;
  cursor: pointer;
`;
const Flexdiv = styled.div `
display:flex;
  justify-content: space-between;
  padding:0px;
  margin:20px
`;
const Htop = styled.h2`
margin-top: 0px;
font-size:18px;
font-weight:bold;
color:black
`
const FlexDiv2 = styled.div`
display:flex;
  justify-content: space-between;
  padding:0px;
  height:30px;
  background-color:#D3D3D3;
  .selectt{
    cursor:pointer;
     background-color:#D3D3D3;
      border:none;
  }
`
const SpanSortby = styled.span `
white-space:nowrap;
padding-top:5px;
` 
const SpanInnerSortBy = styled.span `
padding-top:3px;
`

const Innerdiv = styled.div `
background-color: white;

.marginb{
    margin-bottom: 20px;
}
`;
const Roww = styled.div`
//   border-style:solid;
//  border-bottom 10px;
// height:1em
`;

const Column = styled.div`
float:left;
    width: 25%;
    margin:0px;
    padding:0px;
    p{
        background-color:white
    }
`;
const FormSpaceNotFoundd = styled.div`
width: 300px;
    margin: auto;
    background-color: white;
`;
const ImgDiv = styled.div `
background-color: white;
  margin:0px;
  padding:0px
`;
const Centerh = styled.h3`
padding:0px;
   margin:0px;
   text-align: center;
   background-color: white;
`;
const Centerp = styled.p`
font-size: 14px;
  text-align: center;
`;
const Img = styled.img `
width: 300px;
    margin: auto;
    background-color: white;
    width: 100%;
`;
function AddManager(){
    return(
        <Fulldiv>
            <Ptop style={{marginLeft:20}}>&#x2B05; Back</Ptop>
            <Flexdiv>
                <Htop>All Registered Organisation</Htop>
                <FlexDiv2><SpanSortby>&nbsp;Sort by &nbsp;</SpanSortby><SpanInnerSortBy>|&nbsp;</SpanInnerSortBy><select className='selectt'><option>Newest</option><option>Oldest</option></select></FlexDiv2>
            </Flexdiv>
          
           <Innerdiv style={{margin:20}}>
            <Roww>
            <div >
                <Column>
                    <p>Company Name</p>
                </Column>
                <Column >
                    <p >Address</p>
                </Column>
                <Column>
                    <p>Email</p>
                </Column>
                <Column>
                    <p>Phone Number</p>
                </Column>
                <hr/>
            </div>
            
            </Roww>
            <FormSpaceNotFoundd>
                <Innerdiv style={{textAlign:'center'}}>
                    <ImgDiv>
                        <Img src={image} alt="Img" className="form-space-notfound notfound-image"/>
                        <Centerh>No member found</Centerh>
                    </ImgDiv>  
                    
                        <Centerp>Sorry we couldnt find any results</Centerp>                      
                    <button style={{marginBottom:20}} type="submit" >Create a new Manager</button>                    
                </Innerdiv>
            </FormSpaceNotFoundd>

          </Innerdiv>
        </Fulldiv>
    );
}
export default AddManager;