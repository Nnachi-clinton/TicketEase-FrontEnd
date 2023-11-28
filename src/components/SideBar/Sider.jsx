import React, { useState } from 'react';
import styled from 'styled-components';
import DoubleRight from '../../assets/double_right.svg';
import DoubleLeft from '../../assets/doubleleft.svg';
import { Logo } from '../../components/Header/components/Logo';

const menuItems = [
  { name: 'Home', icon: require('../../assets/Polygon.svg').default },
  { name: 'Add Member', icon: require('../../assets/User.svg').default },
  { name: 'Create Board', icon: require('../../assets/Group.svg').default },
  { name: 'Contact Admin', icon: require('../../assets/Credit-card.svg').default },
  { name: 'Settings', icon: require('../../assets/Settings.svg').default },
  { name: 'Logout', icon: require('../../assets/Sign-out.svg').default },
];


const SidebarContainer = styled.div`
 width: ${({ collapsed }) => (collapsed ? '117px' : '288px')};
  height: 100vh;
  position: fixed;
  transition: width 0.2s;
  z-index: 999;
  background: #fff;
  top:0;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
   display:none;
`;

const BottomNavs = styled.div`
  position: absolute;
  bottom: 29px;
  width: ${({ collapsed }) => (collapsed ? '65px' : '236px')};
`;
const MenuItemsArea = styled.div`
  padding: 0 ${({ collapsed }) => (collapsed ? '29px' : '26px')};
  padding-bottom: 10px;
  margin: 29px 0;
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #505f98;
    color: #fff;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const ToggleIcon = styled.div`
  width: 24px;
  height: 24px;
  top: 88px;
  left: 102px;
`;


const ItemName = styled.div`
  color: #1d2125;
  font: 400 14px/18px Mulish, sans-serif;
  white-space: nowrap;
`;

export default function SideBar(props) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };


  const handleItemClick = (itemName) => {
    console.log(`Clicked on ${itemName}`);
    setSelectedItem(itemName);
  };

  return (
    <SidebarContainer >
    <Logo />
    <ToggleIcon onClick={() => toggle()}>
        <img src={collapsed ? DoubleRight : DoubleLeft} alt="" />
      </ToggleIcon>
      <MenuItemsArea>
      {menuItems.map(({ name, icon }, index) => (
        <MenuItem
          key={index}
          onClick={() => handleItemClick(name)}
          style={{
            top: name === 'Settings' ? '500px' : name === 'Logout' ? '505px' : 'auto',
          }}
        >
          <Icon loading="lazy" src={icon} />
          {collapsed ? null : <ItemName>{name}</ItemName>}
        </MenuItem>
      ))}
      </MenuItemsArea>
    </SidebarContainer>
  );
}
