import { useState, useEffect } from "react";
import styled from "styled-components";
import '../common/PasswordForm.css';
import axios from "axios";

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

    const validateAuthToken = async () => {
        try {
            const authToken = localStorage.getItem('authToken');

            if (!authToken) {
                // Redirect or handle unauthenticated user as needed
                return false;
            }

            const response = await axios.post('https://localhost:7075/api/Authentication/validate-token', {
                token: authToken,
            });

            return response.status === 200;
        } catch (error) {
            console.error('Token validation error:', error);
            return false;
        }
    };

    useEffect(() => {
        const validateToken = async () => {
            const isValidToken = await validateAuthToken();

            if (!isValidToken) {
                console.log("Token is not valid. Redirecting to login page...");
                // Example: Redirect to the login page
                window.location.href = '/Regularlogin';
            }
        };

        validateToken();
    }, []);
    
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
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!getIsFormValid()) {
            return;
        }

        try {
            const authToken = localStorage.getItem('authToken');

            if (!(await validateAuthToken())) {
                // Redirect or handle unauthenticated user as needed
                return;
            }

            const response = await axios.post('https://localhost:7075/api/Authentication/update-password', {
                currentPassword: currentPassword.value,
                newPassword: newPassword.value,
                confirmNewPassword: confirmNewPassword.value,
            }, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });

            if (response.status === 200) {
                alert("Password changed successfully!");
                clearForm();
            } else {
                alert(`Error: ${response.data.message}`);
                console.error("Error:", response.data);
            }
        } catch (error) {
            if (error.response) {
                console.error('Server Error:', error.response.status);
                console.error('Error Message:', error.response.data.message);
                alert(`Error: ${error.response.data.message}`);
            } else if (error.request) {
                console.error('No Response from Server');
                alert('No response from the server. Please try again.');
            } else {
                console.error('Unexpected Error:', error.message);
                alert('An unexpected error occurred while changing the password.');
            }
        }    
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