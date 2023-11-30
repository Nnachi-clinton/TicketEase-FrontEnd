import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import '../common/PasswordForm.css';

const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Must be at least 8 characters</p>
    );
};

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
                <fieldset className="password-fieldset">
                    <div className="password-field">
                        <label>
                            Password
                        </label>
                        <input
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
                            <PasswordErrorMessage />
                        ) : null}
                    </div>

                    <div className="password-field">
                        <label>
                            Confirm Password
                        </label>
                        <input
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
                            <PasswordErrorMessage />
                        ) : null}
                    </div>

                    <button type="submit" disabled={!getIsFormValid()}>Reset Password</button>
                </fieldset>
            </form>
        </div>
    );
}

export default PasswordForm;