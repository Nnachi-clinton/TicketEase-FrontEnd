import React, { useState } from "react";
import styled from "styled-components";
import Bell from '../../../assets/NotificationBell.svg';


const NotificationContainer = styled.div`
    background-color: #f6f6f6;
    overflow: hidden;
    border-radius: 19px;
    height: 38px;
    position: relative;
    width: 38px;
`;
const Icon = styled.img`
    height: 24px;
    left: 7px;
    position: absolute;
    top: 7px;
    width: 24px;
    cursor: pointer;

`;


export const NotificationBell = (props) => {
    const [Notify] = useState("");

    const handleNotification = () => {

        console.log("Searching for:", Notify);
      };
  return (
    <NotificationContainer>
        <Icon 
        className="NotificationBell"
        alt="Notification Bell"
        src={Bell}
        onClick={handleNotification}
        />
    </NotificationContainer>
  )
}
