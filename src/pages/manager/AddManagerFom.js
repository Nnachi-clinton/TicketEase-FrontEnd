import React, {useState } from "react";
import styled from "styled-components";

const Fulldiv = styled.div `
overflow: hidden;
      background-color: #f0f0f0; 
`;
const Hnomargin = styled.h2 `
text-align:left;
font-weight:bold;
font-size:18px;
color:black;
margin:20px 20px 20px
`;
const Pcreatemanager = styled.p`
font-size: 14px;
  margin-left:20px
`;
const Innerdiv = styled.div `
background-color: white;
margin-left:20px;
margin-right:20px;
.marginb{
    margin-bottom: 20px;
}
`;
const FormSpace = styled.div`width: 300px;
margin: auto;
padding-top:2em;
background-color: white;`;
export const StyledForm = styled.form`
  border-radius: 5px;
`

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  padding-top:1em;
  color: ${props => props.invalid ? 'red' : 'black'};
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size:14px
`

export const StyledButton = styled.button`
  color: white;
  width:100%;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom:17em
`

export const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`



function AddManager(){
  const [formData, setFormData] = useState({
    companyName: '',
    businessEmail: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:7075/api/managers/AddManager',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if(response.ok){
        console.log('Manager registered successfully');
      }else{
        console.log('Failed to submit data');
      }
    } catch (error) {
      console.log('Error: ',error);
    }
  }
    return(
        <Fulldiv>
          <Hnomargin>Create manager's account</Hnomargin>
          <Pcreatemanager>Fill the form below with the correct details as specified</Pcreatemanager>
          <Innerdiv>
            <FormSpace>                  
                  <StyledForm onSubmit={handleSubmit}>
                      <StyledLabel>Company Name:</StyledLabel>
                      <StyledInput type="text" name="companyName" placeholder="" value={formData.companyName} onChange={handleChange} />
                      <StyledLabel >Business Email:</StyledLabel>
                      <StyledInput type="email" name="businessEmail" placeholder="example@gmail.com" value={formData.businessEmail} onChange={handleChange} />                    
                      <StyledButton type="submit" >Submit</StyledButton>
                </StyledForm>
                
              </FormSpace>
          </Innerdiv>
        </Fulldiv>
    );
}
export default AddManager;