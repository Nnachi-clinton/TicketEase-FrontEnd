import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Fieldset = styled.fieldset`
    border: none;
    width: 80%;
`;
const Field = styled.div`
    position: relative;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column; 
`;
const Holder = styled.input`
    border: 1px solid #ccc;
    height: 36px;
    border-radius: 4px;
`;

const ResetButton = styled.button`
    padding: 12px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: #505F98;
    color: white;
    // text-transform: lowercase;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;

function ForgotPasswordForm() {
    const [email, setEmail] = useState('');
    
    const getIsFormValid = () => {
        return (
            email.length >= 8 
        );
    };
    const clearForm = () => {
        setEmail('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try
        {
            const response = await axios.post(
                "https://localhost:7075/api/Authentication/forgot-password",
                { email }
              );
        
              if (response.status === 200) {
                alert("Password reset email sent successfully!");
              } else {
                alert(`Error: ${response.data.message}`);
              }
            clearForm();
        }
        catch (error)
        {
            console.error('An error occurred:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="ForgotPasswordForm">
          <form onSubmit={handleSubmit}>
                <Fieldset>
                 <Field>
                        <label>
                            Email
                        </label>
                        <Holder
                            value= {email}
                            type= "email"
                            onChange= {(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder= "Email Address"
                        />
                        {<p style={{fontSize: '11px', marginTop: '5px', marginBottom: '5px', color: "#505F98"}}>Enter the Email address associated with your account</p>}
                 </Field>
                    <ResetButton type="submit" disabled={!getIsFormValid()}>Reset Password</ResetButton>     
                </Fieldset>
          </form>
        </div>
    );
}

export default ForgotPasswordForm;