import Input from "./Input";
import { useState } from "react";
import styled from "styled-components";

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
    height: 6px;
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
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Password changed successfully!');
        clearForm();
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
                            placeholder= ""
                        />
                        {<p style={{fontSize: '11px', marginTop: '-7px', marginBottom: '5px', color: "#505F98"}}>Enter the Email address associated with your account</p>}
                 </Field>
                    <ResetButton type="submit" disabled={!getIsFormValid()}>Reset Password</ResetButton>     
                </Fieldset>
          </form>
        </div>
    );
}

export default ForgotPasswordForm;