import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const PasswordErrorMessage = styled.p`
  position: absolute;
  bottom: -6px;
  color: red;
  font-size: 12px;
`;

const PasswordFieldset = styled.fieldset`
  display: flex;
  width: 80%;
  padding: 16px;
  border: none;
  border-radius: 4px;
  flex-direction: column;
  padding-bottom: 0%;
  margin-left: 0% !important;
  margin-right: auto !important;
`;

const PasswordLabel = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  text-align: left;
`;

const PasswordInput = styled.input`
  border-radius: 4px;
  border: 1px solid #ccc;
  height: 48px;
  padding: 0 10px;

  &::placeholder {
    font-size: 12px;
  }
`;

const PasswordField = styled.div`
  position: relative;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  padding: 20px !important;
  width: auto;
  border-radius: 4px;
  border: 1px solid #ccc !important;
  background-color: #505f98;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #505f98;
    color: white;
    cursor: not-allowed;
  }
`;

function PasswordForm() {
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [confirmPassword, setConfirmPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        setEmail(searchParams.get("email") || "");
        setToken(searchParams.get("token") || "");
    }, []);

    const getIsFormValid = () => {
        return (
            password.value.length >= 8 &&
            confirmPassword.value.length >= 8
        );
    };

    const clearForm = () => {
        setPassword({
            value: "",
            isTouched: false,
        });
        setConfirmPassword({
            value: "",
            isTouched: false,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!getIsFormValid()) {
            return;
        }

        try 
        {
            const response = await axios.post('https://localhost:7075/api/Authentication/reset-password', {
                email,
                token,
                newPassword: password.value,
                confirmPassword: confirmPassword.value
            });

            if (response.status === 200) 
            {
                alert('Password changed successfully!');
                clearForm();
            } 
            else 
            {
                console.error("Error:", response.data);

                if (response.data.errors && response.data.errors.ConfirmPassword) 
                {
                    const confirmPasswordErrors = response.data.errors.ConfirmPassword;
                    console.error("ConfirmPassword errors:", confirmPasswordErrors);
                } 
                else 
                {
                    alert(`Error: ${response.data.message}`);
                }
            }
        } 
        catch (error) 
        {
            console.error('An error occurred:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="ChangePasswordForm">
            <form onSubmit={handleSubmit}>
                <PasswordFieldset className="password-fieldset">
                    <PasswordField className="password-field">
                        <PasswordLabel>
                            Password
                        </PasswordLabel>
                        <PasswordInput
                            className="password-input"
                            value= {password.value}
                            type= "password"
                            onChange= {(e) => {
                                setPassword({...password, value: e.target.value});
                            }}
                            onBlur= {() => {
                                setPassword({...password, isTouched: true});
                            }}
                            placeholder= "Password"
                        />
                        {password.isTouched && password.value.length < 8 ? (
                            <PasswordErrorMessage>
                                Must be at least 8 characters
                            </PasswordErrorMessage>
                        ) : null}
                    </PasswordField>

                    <PasswordField className="password-field">
                        <PasswordLabel>
                            Confirm Password
                        </PasswordLabel>
                        <PasswordInput
                            className="password-input"
                            value= {confirmPassword.value}
                            type= "password"
                            onChange= {(e) => {
                                setConfirmPassword({...confirmPassword, value: e.target.value});
                            }}
                            onBlur= {() => {
                                setConfirmPassword({...confirmPassword, isTouched: true});
                            }}
                            placeholder= "Confirm password"
                        />
                        {confirmPassword.isTouched && confirmPassword.value.length < 8 ? (
                            <PasswordErrorMessage>
                                Must be at least 8 characters
                            </PasswordErrorMessage>
                        ) : null}
                    </PasswordField>

                    <StyledButton type="submit" disabled={!getIsFormValid()}>Reset Password</StyledButton>
                </PasswordFieldset>
            </form>
        </div>
    );
}

export default PasswordForm;