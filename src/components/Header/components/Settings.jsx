import React, { useState } from "react";
import styled from "styled-components";
import Setting from '../../../assets/Settings.svg';


const SettingsContainer = styled.div`
    background-color: #f6f6f6;
    border-radius: 19px;
    height: 38px;
    overflow: hidden;
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


export const Settings = (props) => {
    const [Settings] = useState("");

    const handleNotification = () => {

        console.log("Searching for:", Settings);
      };
  return (
    <SettingsContainer>
        <Icon 
        className="Settings"
        alt="Settings Icon"
        src={Setting}
        onClick={handleNotification}
        />
    </SettingsContainer>
  )
}
