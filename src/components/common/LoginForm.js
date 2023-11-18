import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import styled from "styled-components";
import { validateEmail } from "../../utils/validateEmail";
import { VscWhitespace } from "react-icons/vsc";

const Fieldset = styled.fieldset`
    border: none;
    width: 80%;
`;
const PasswordErrorMessage = () => {
    return (
        <p className="FieldError"> Password incorrect. If you don't remember your password. Reset it </p>
    );
};

const EmailErrorMessage = () => {
    return (
        <p className="FieldError">Please provide a valid Email address </p>
    );
};

function LoginForm() {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const getIsFormValid = () => {
        return (
        validateEmail(email) &&
        Password.value.length >= 8
        );
    };
    const clearForm = () => {
        setEmail('');
        setPassword('');
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Login successful!');
        clearForm();
    };

    return (
        <div className="LoginForm">
          <form onSubmit={handleSubmit}>
                <Fieldset>
                    <Input
                        type="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => {}}
                        errorMessage={
                        email.isTouched && !validateEmail(email) ? (
                            <EmailErrorMessage/>
                        ): ''
                        }
                        style={{
                            height: '16px',
                            width: '90%',
                            background: 'white'

                        }}
                    />
                    <Input
                        type="password"
                        label="Password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => {}}
                        errorMessage={
                        Password.isTouched && Password.value.length < 8 ? (
                            <PasswordErrorMessage/>
                        ) : ''
                        }
                        style={{
                            height: '16px',  
                            width: '90%',
                            background: "white"                   
                        }}
                    />
                    {<p style={{fontSize: "small", marginTop: '-7px', marginBottom: '25px', color: "#505F98"}}>Forgot Password?</p>}
                    <Button 
                        style={{
                            background: '#505F98',
                            height : '40px',
                            width: '100%',
                        }}
                        type="submit" disabled={!getIsFormValid()}>
                        Login
                    </Button>  
                </Fieldset>
          </form>
        </div>
    );
}

export default LoginForm;
