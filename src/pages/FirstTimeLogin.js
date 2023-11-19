import React, { useState } from 'react'
// import logo from './logo.svg';
import '../components/FirstTimeLogin/Login.css';
import { Login } from "../components/FirstTimeLogin/Login";
import '../App.css';



function AppLogin() {
    // const [currentForm, setcurrentForm] = useState('login')
    const [setcurrentForm] = useState('login')
    const toggleForm = (formName) => {
        setcurrentForm(formName)
    }

    return (
        <>
            <div className="AppLogin">
                <Login onFormSwitch={toggleForm} />
            </div>
        </>
    );
}

export default AppLogin




