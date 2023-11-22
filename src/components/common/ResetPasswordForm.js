import { useState } from "react";
// import styled from "styled-components";
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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Password changed successfully!");
        clearForm();
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