import { useState } from "react";
// import styled from "styled-components";
import '../common/PasswordForm.css';

const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Must be at least 8 characters</p>
    );
};

function PasswordForm() {
    const [currentPassword, setCurrentPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [newPassword, setNewPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [confirmNewPassword, setConfirmNewPassword] = useState({
        value: "",
        isTouched: false,
    });

    const getIsFormValid = () => {
        return (
            currentPassword.value.length >= 8 &&
            newPassword.value.length >= 8 &&
            confirmNewPassword.value.length >= 8
        );
    };

    const clearForm = () => {
        setCurrentPassword({
            value: "",
            isTouched: false,
        });
        setNewPassword({
            value: "",
            isTouched: false,
        });
        setConfirmNewPassword({
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
                            Current Password
                        </label>
                        <input className="password-input"
                            value= {currentPassword.value}
                            type= "password"
                            onChange= {(e) => {
                                setCurrentPassword({...currentPassword, value: e.target.value});
                            }}
                            onBlur= {() => {
                                setCurrentPassword({...currentPassword, isTouched: true});
                            }}
                            placeholder= "Current Password"
                        />
                        {currentPassword.isTouched && currentPassword.value.length < 8 ? (
                            <PasswordErrorMessage />
                        ) : null}
                    </div>

                    <div className="password-field">
                        <label>
                            New Password
                        </label>
                        <input
                            className="password-input"
                            value= {newPassword.value}
                            type= "password"
                            onChange= {(e) => {
                                setNewPassword({...newPassword, value: e.target.value});
                            }}
                            onBlur= {() => {
                                setNewPassword({...newPassword, isTouched: true});
                            }}
                            placeholder= "New password"
                        />
                        {newPassword.isTouched && newPassword.value.length < 8 ? (
                            <PasswordErrorMessage />
                        ) : null}
                    </div>

                    <div className="password-field">
                        <label>
                            Confirm New Password
                        </label>
                        <input
                            className="password-input"
                            value= {confirmNewPassword.value}
                            type= "password"
                            onChange= {(e) => {
                                setConfirmNewPassword({...confirmNewPassword, value: e.target.value});
                            }}
                            onBlur= {() => {
                                setConfirmNewPassword({...confirmNewPassword, isTouched: true});
                            }}
                            placeholder= "Confirm new password"
                        />
                        {confirmNewPassword.isTouched && confirmNewPassword.value.length < 8 ? (
                            <PasswordErrorMessage />
                        ) : null}
                    </div>

                    <button type="submit" disabled={!getIsFormValid()}>Update Password</button>
                </fieldset>
            </form>
        </div>
    );
}

export default PasswordForm;