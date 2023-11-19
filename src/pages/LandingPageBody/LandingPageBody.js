import * as S from '../../components/LandingPageBody/StyledComponentsBody';
import Button from '../../components/LandingPageBody/ButtonBody';
import Button1 from '../../components/LandingPageBody/ButtonBody1';
import Frame7778 from '../../assets/images/Frame 7778.svg'
import Group4 from '../../assets/images/Group 4.svg';
import Frame from '../../assets/images/Frame.svg';
import Frame1 from '../../assets/images/Frame-1.svg';
import Frame2 from '../../assets/images/Frame-2.svg';
import Frame3 from '../../assets/images/Frame-3.svg';
import Image2 from '../../assets/images/image 2.svg';
import Image9 from '../../assets/images/image 9.svg';
import Image8 from '../../assets/images/image 8.svg';
import Image10 from '../../assets/images/image 10.svg';
import UnsplashSVh18EWSBeQ from '../../assets/images/unsplash_SVh18EWSBeQ.svg';
import UnsplashD60MVuUqkOs from '../../assets/images/unsplash_d60MVuUqkOs.svg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const LandingPageBody = () => {
  return (
    <>
      <S.MainContainer>
        <S.Main>
          <S.Top>
            <S.Content>Streamline Your Workflow with Ticket Ease – The Ultimate Ticket Management Solution!</S.Content>
            <S.Content1>Boost Productivity, Resolve Issues Faster – Discover the Power of TicketEase!</S.Content1>
            <Button />
          </S.Top>
          <S.MainImage src={Frame7778} />
        </S.Main>

        <S.SponsorsContainer>
          <S.SponsorsLine>
            <div>
              <S.SponsorsText>Companies that trust us</S.SponsorsText>
            </div>
            <div>
              <S.Line />
            </div>
          </S.SponsorsLine>
          <S.Sponsors>
            <img src={Frame} alt='' />
            <img src={Group4} alt=''/>
            <img src={Frame1} alt='' />
            <img src={Frame2}  alt=''/>
            <img src={Frame3} alt='' />
          </S.Sponsors>
        </S.SponsorsContainer>

        <S.TaskContainer>
          <S.TaskImage src={Image9}  />
          <S.Pad2Container>
            <S.Pad2Heading>Manage Tasks</S.Pad2Heading>
            <S.Pad2Paragraph>Revolutionize Your Workflow – TicketEase: Where Every Ticket Tells a Success Story.</S.Pad2Paragraph>
          </S.Pad2Container>
        </S.TaskContainer>

          <S.TaskContainer>
            <S.Pad2Container>
              <S.Pad2Heading className='sub'>Statistics Analysis</S.Pad2Heading>
              <S.Pad2Paragraph className='sub1'>Get useful insights and analysis that will guide the entire task process from start to finish.</S.Pad2Paragraph>
            </S.Pad2Container>
            <S.TaskImage src={Image8}  />
          </S.TaskContainer>

        <S.TaskContainer>
          <S.TaskImage src={Image10}  />
          <S.Pad2Container>
            <S.Pad2Heading>Manage Multiple Boards</S.Pad2Heading>
            <S.Pad2Paragraph>Whether its a group of 10 boards or more, you have the ability to track work activities for multiple boards.</S.Pad2Paragraph>
          </S.Pad2Container>
        </S.TaskContainer>

        <S.Content5Container>
            <S.ContContainer>
              <S.Content5Heading>Testimonials <br /> <S.Content5Span>Hear What Users of Ticket Ease are Saying</S.Content5Span></S.Content5Heading>
            </S.ContContainer>
          <S.TestimonialsContainer>
            <div style={{ marginTop: 180}}>
            <IoIosArrowBack />
            </div>
            <S.Image11>
              <img style={{width:600}}  src={UnsplashSVh18EWSBeQ} alt='' />
              <S.Txt>
                <S.Name style={{ marginRight: 200}}>Ikechukwu Stonecold <S.Status>CEO Innovat8 Technology</S.Status></S.Name>
                <S.TestimonialContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra dis tempor, lacus orci at. Massa velit mi pharetra faucibus bibendum. Leo sit diam aliquam arcu, gravida habitasse.
                </S.TestimonialContent>
              </S.Txt>
            </S.Image11>

            <S.Image11>
              <img style={{width:600}} src={UnsplashD60MVuUqkOs} alt=''/>
              <S.Txt>
                <S.Name1 >Mark Collins <S.Status>CEO Arab Money</S.Status></S.Name1>
                <S.TestimonialContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra dis tempor, lacus orci at. Massa velit mi pharetra faucibus bibendum. Leo sit diam aliquam arcu, gravida habitasse.
                </S.TestimonialContent>
              </S.Txt>
            </S.Image11>

                <div style={{marginTop: 180}}>
                  <IoIosArrowForward />
                </div>

          </S.TestimonialsContainer>
        </S.Content5Container>
        
      </S.MainContainer>

      <S.EaseContainer>
          <S.Box2Container>
            <S.Content6Heading>What is Ticket Ease?</S.Content6Heading>
            <S.Box2Paragraph>
              TicketEase is a web-based application that streamlines and optimizes the management of task projects. Users can effortlessly create, review, and organize tickets for efficient task tracking. The integrated admin dashboard empowers managers with extensive control over various features, ensuring seamless oversight of the Ticket Management System.
            </S.Box2Paragraph>
            <Button1 />
          </S.Box2Container>

          <S.EaseImage src={Image2}  />
        </S.EaseContainer>
    </>
  );
}

export default LandingPageBody;
