import Styled from 'styled-components';
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import footerLogo from '../../assets/footerLogo.svg';
const Footer = () => {
    return(
        <>
        <FooterStyles>
            <Logo>
                <div>
                    <img src={footerLogo} alt='TicketEaseLogo'/>
                </div>
                <div>
                    <h1 id='ease'>TICKET EASE</h1>
                </div>
            </Logo>
            <div><hr className='line' /></div>   
            <Foot>                    
                <div id='all'>
                <h3>© 2023 Ticket Ease. All rights reserved</h3>
            </div>    
            <div id='icons'>
                <IoLogoInstagram /> <FaTwitterSquare /> <CiYoutube />
            </div>
            </Foot>
        </FooterStyles>
        </>
    )
}
export default Footer;

const FooterStyles = Styled.div`
    background: #2D2F48;
    position: static;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    margin-top:-4.5px;

    h1{
       margin-bottom: 50px;
       color: white;
       font-family: Mulish;
       font-size: 24px;
       font-style: normal;
       font-weight: 900;
       line-height: normal;
    }
    
    .line{
        border: none;
       border-top: 2px solid #fff; 
       /* margin: 70px 0; */
       margin: 0px 60px;
       opacity: 0.2;
       
    }
   
`
const Logo = Styled.div`
   display: flex;
   margin: 5px 500px;
   img{
    margin-top: 35px;
   }
   #ease{
    margin-top: 40px;
   }
`
const Foot = Styled.div`
    display: flex;
    color: #FFF;
    align-items: center;
    justify-content: space-evenly;
    /* margin-top: 100px; */

    #all{
        margin-right: 700px;
        color: #FFF;
        font-feature-settings: 'liga' off;
        font-family: 'Mulish';
        font-size: 14px;
       font-style: normal;
       font-weight: 400;
       line-height: 24px; 
    }
    #icons{
        cursor: pointer;
    }


`