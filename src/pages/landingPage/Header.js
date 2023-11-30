import Styled from 'styled-components';
import headerLogo from '../../assets/headerLogo.svg';
import Footer from './Footer';
import LandingPageBody from '../LandingPageBody/LandingPageBody';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Nav>
        <Div>
          <div>
            <img src={headerLogo} alt="TicketEaseLogo" />
          </div>
          <div>
            <h1>TICKET EASE</h1>
          </div>
        </Div>
        <NavList>
          <a href="/" id="part">
            Partners
          </a>
          <NavLink to="/Regularlogin" id="log">
            Login
          </NavLink>
          <NavLink to="/contactUs" id="apply">
            Apply as a business
          </NavLink>
        </NavList>
      </Nav>
      <LandingPageBody style={{ alignItems: 'center' }} />
      <Footer />
    </>
  );
};

export default Header;

const Nav = Styled.div`   
   background-color: rgba(255, 253, 253, 0.92);
   border: 4px;
   display: flex;
   position: fixed;
   align-items: center;
   width: 100%;
   top: 0;
   right: 0;
   justify-content: space-between;
   height: 80px;
   border: 1px;
   padding: 7px;
   box-shadow: 3px 10px #fcf9f9;
`;
const Div = Styled.div`
   display: flex;
   img{
      margin-left: 50px;
   }
   h1{
      padding: 10px 0px;
      color: #21334F;
      font-family: Mulish;
      font-size: 24px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
   }
`;
const NavList = Styled.div`
    display: flex;
    text-decoration: none;
    gap: 20px;
    padding-right: 60px;
   a{
      color: white;
      text-decoration: none;
      gap: 20px;
   }
   #part{
      margin: 15px;
      color: #505F98;
   }
   #log{
      color: #031839;
      margin-top: 15px;
   }
   #apply{
      display: inline-flex;
        padding: 14px 28px;
        justify-content: center;
        align-items: center;
        color: #FFF;
        border-radius: 4px;
        background: #505F98;
   }
`;
