import React, { useState } from 'react';
import image from './Login.png';
import Logo from './TicketEaseLogo.jpg';
import ErrorIcon from './ErrorIcon.svg'



export const Login = () => {
    const [email] = useState('');



    const handleSubmit = (e) => {
        e.PrevnetDefault();
        console.log(email);
    }
    return (

        <div className="Header">

            <div className="auth-form-container">
                <span className="logo-container" ><img src={Logo} alt="" className="TicketLogo" />
                    <span className='logoEase'>TICKET EASE</span></span>
                <h3 className='LoginToYourAccount' >Login to your account</h3>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label className='PassEmailLabel' for="email">Email</label>
                    <input type="email" placeholder="TicketEase@gmail.com" id="email" />
                    <label for="password">Password</label>
                    <input type="password" placeholder="*********" id="epasswordmail" />
                    <h6>
                        <img src={ErrorIcon} alt="" className="ErrorIcon" />
                        <label className="password-warning">
                            Please input the password that was sent to you</label></h6>
                    <button type="submit">Login</button>

                </form>
            </div>
            <div className='LoginImagery frame'>
                <img src={image} alt="" className="image" />
            </div>
        </div>

    )
}
