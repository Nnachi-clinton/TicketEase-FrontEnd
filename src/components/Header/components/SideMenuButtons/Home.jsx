import React from 'react';
import styled from 'styled-components';
import { matchPath, NavLink, useLocation } from 'react-router-dom';

const NavIconContainer = styled.div`
  width: 59px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export default function Navlink({ label, icon, activeIcon, url, collapsed, path, setShow }) {
  let location = useLocation();
 
  const isActive = matchPath(path, location.pathname)
 
  const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    border-radius: 4px;
    text-decoration: none;
    &:hover {
      background-color: rgba(20, 168, 0, 0.05);
      color: #000000;
    }
    &.active {
      color: #ffffff;
      background-color: #505F98;
    }
    color: ${isActive ? '#FFFFFF' : '#1D2125'};
}
  `;

  const NavLabel = styled.div`
    white-space: nowrap;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    display: ${collapsed ? 'none' : 'block'};
  `;

  return (
    <Link onClick={() => setShow(false)} className={isActive ? "active" : ""} to={url}>
      <NavIconContainer>
        <img src={isActive ? activeIcon : icon} alt={label} />
      </NavIconContainer>
      <NavLabel>{label}</NavLabel>
    </Link>
  );
}