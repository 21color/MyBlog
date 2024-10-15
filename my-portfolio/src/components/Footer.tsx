import styled from '@emotion/styled';
import {
  faEnvelope,
  faMobileScreenButton,
  faQuoteLeft,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { IntroduceProps } from './Introduce';

const socialList = [
  {
    id: 'github',
    title: 'github',
    url: 'https://github.com/21color',
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    id: 'linkedin',
    title: 'linkedin',
    url: 'https://www.linkedin.com/in/hana-lee-1332aa315/',
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    id: 'phone',
    title: 'phone',
    url: 'tel:01027343498',
    icon: <FontAwesomeIcon icon={faMobileScreenButton} />,
  },
  {
    id: 'email',
    title: 'email',
    url: 'mailto:lehhha0110@gmail.com',
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
];

const contactMeList = [
  {
    title: '010 2734 3498',
  },
  {
    title: 'lehhha0110@gmail.com',
  },
  {
    title: '경기도 남양주시 다산동',
  },
];

export const Footer = forwardRef<HTMLDivElement, IntroduceProps>((props, ref) => {
  const bigRestRoomRef = useRef<HTMLDivElement>(null);
  const [showBigRestRoom, setShowBigRestRoom] = useState(false);
  const [windowHight, setWindowHight] = useState(window.innerHeight);
  const { active } = props;

  useEffect(() => {
    const handleScroll = () => {
      setWindowHight(window.innerHeight);

      if (
        bigRestRoomRef.current &&
        bigRestRoomRef.current.getBoundingClientRect().top < windowHight
      ) {
        setShowBigRestRoom(true);
      } else {
        setShowBigRestRoom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [windowHight]);

  return (
    <Container active={active} ref={ref}>
      <LastComment>
        <FontAwesomeIcon
          color="#DAF489"
          style={{ position: 'absolute', transform: 'translate(-3rem)' }}
          fontSize={'2rem'}
          icon={faQuoteLeft}
        />
        <LastCommentTitle>즐겁게 구경하셨나요?</LastCommentTitle>
        <p>저희가 가까워진 시간이었으면 좋겠습니다.</p>
      </LastComment>

      <BigRestRoom ref={bigRestRoomRef} active={showBigRestRoom}>
        <MyNewDoor>
          <MyNewDoorSub>
            <MyNewDoorSubDoor></MyNewDoorSubDoor>
            <MyNewDoorSubHandle></MyNewDoorSubHandle>
            <MyNewDoorSubDoor></MyNewDoorSubDoor>
          </MyNewDoorSub>
        </MyNewDoor>

        <BigMainBlogPost>
          <MainDoorImage></MainDoorImage>
          <SubDoorImage></SubDoorImage>
          <SubDoorImage></SubDoorImage>
          <SubDoorImage></SubDoorImage>
        </BigMainBlogPost>

        <FooterComment>
          저와 함께 <span>두번째</span> 방을 만들어보실래요?
          <FontAwesomeIcon
            color="#DAF489"
            style={{ position: 'absolute', transform: 'translate(1rem)' }}
            fontSize={'2rem'}
            icon={faQuoteRight}
          />
        </FooterComment>
        <ContactMe>
          <AboutMyLastInformation>
            <h1>이하나</h1>
            <ContactMeUnOderList>
              {contactMeList.map((contact, index) => (
                <li key={index}>{contact.title}</li>
              ))}
            </ContactMeUnOderList>
          </AboutMyLastInformation>
          <SocialContainer>
            {socialList.map((social) => (
              <div
                key={social.id}
                onClick={() => {
                  window.open(social.url, '_blank');
                }}>
                {social.icon}
              </div>
            ))}
          </SocialContainer>
        </ContactMe>
      </BigRestRoom>
    </Container>
  );
});

const SocialContainer = styled.div`
  width: 25%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    cursor: pointer;
    font-size: 3.5rem;
    padding: 1rem;
    display: inline-block;
  }
`;

const ContactMeUnOderList = styled.ul`
  text-transform: lowercase;
  letter-spacing: 0.2rem;

  li {
    font-size: 1.5rem;
    margin: 0.5rem;
    display: inline-flex;
    text-indent: 1rem;
  }
`;

const AboutMyLastInformation = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 3rem;
    letter-spacing: 0.5rem;
    text-indent: 1rem;
  }
`;

const ContactMe = styled.div`
  width: 49rem;
  transition: 1s;
  border: 0.1rem solid white;
  box-shadow: -1rem 1rem 4rem #c4c4ba96;
  background: #ffffff6e;
  height: 29rem;
  border-radius: 2rem 0.5rem 2rem 2rem;
  backdrop-filter: blur(0.7rem);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  &:hover {
    margin-bottom: 1rem;
  }
`;

const FooterComment = styled.h1`
  position: absolute;
  letter-spacing: 0.5rem;
  font-size: 2.5rem;
  transform: translateY(-30rem);

  span {
    background: #ffe28d;
    padding-left: 0.5rem;
  }
`;

const SubDoorImage = styled.div`
  position: relative;
  width: 10rem;
  height: 15rem;
  display: flex;
  text-align: center;
  border-radius: 8rem 8rem 1rem 1rem;
  background: linear-gradient(10deg, #5943ff, #685bcd);

  &:nth-of-type(2) {
    width: 13rem;
    height: 10rem;
    border-radius: 60rem 40rem 40rem 30rem;
    background: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114));
  }

  &:nth-of-type(3) {
    border-radius: 15rem 25rem 20rem 30rem;
    width: 14rem;
    height: 12rem;
    background: radial-gradient(circle, #fc9e5b 0%, #ffff8c 100%);
  }

  &:nth-of-type(4) {
    border-radius: 30rem 40rem 50rem 20rem;
    background-image: linear-gradient(40deg, #fce795 10%, #91f4fd 100%);
    width: 14rem;
    height: 14rem;
  }
`;

const MainDoorImage = styled.div`
  position: relative;
  width: 10rem;
  height: 15rem;
  display: flex;
  text-align: center;
  border-radius: 8rem 8rem 1rem 1rem;
  background: linear-gradient(10deg, #5943ff, #685bcd);

  &::before {
    position: absolute;
    content: '';
    height: 40%;
    width: 75%;
    display: inline-block;
    background: #6957ed;
    left: 12%;
    top: 47%;
    border-radius: 0.5rem 0.5rem 10rem 0.5rem;
    box-shadow: 0rem 0rem 1rem #4935e7;
  }

  &::after {
    position: absolute;
    content: '';
    height: 30%;
    width: 70%;
    display: inline-block;
    left: 15%;
    box-shadow: inset 0rem 0rem 1rem #5943ff;
    top: 10%;
    border-radius: 7rem 7rem 0rem 0rem;
    background: rgba(255, 255, 240, 0.483);
  }
`;

const MyNewDoorSubHandle = styled.div`
  width: 12%;
  height: 10%;
  box-shadow: -0.5rem 0.5rem 2rem #98d97a;
  position: absolute;
  background: ivory;
  border-radius: 3rem 1rem 1rem 3rem;
  transform: translate(8rem);
`;

const MyNewDoorSubDoor = styled.div`
  box-shadow: -0.5rem 0.5rem 3rem #98d97a;
  width: 75%;
  height: 37%;
  border-radius: 0.5rem 10rem 0.5rem 0.5rem;
  background: mix(#a4f49c, #fef483);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  &:nth-of-type(1) {
    border-radius: 0.5rem 0.5rem 10rem 0.5rem;
  }
`;

const BigMainBlogPost = styled.div`
  transform: translate(3rem, 5rem);
  width: 30rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-end;
`;

const MyNewDoorSub = styled.div`
  width: 24rem;
  height: 37rem;
  border-radius: 1rem 4rem 1rem 1rem;
  box-shadow: 0rem 3rem 8rem #66a25fbd;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  align-items: center;
  background: linear-gradient(30deg, #adf787, #d2f489);
`;

const MyNewDoor = styled.div`
  position: relative;
  width: 28rem;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem 5rem 1rem 1rem;
  background: linear-gradient(10deg, #a0ec9d, #d2f593);
`;

const BigRestRoom = styled.div<{ active: boolean }>`
  padding-top: 10rem;
  height: 55rem;
  transition: 1s;
  transform: ${(props) => (props.active ? 'translate(0rem)' : 'translateY(15rem)')};
  opacity: ${(props) => (props.active ? 1 : 0)};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const LastCommentTitle = styled.h1`
  font-size: 2rem;
  margin: 0.5rem;
`;

const LastComment = styled.div`
  width: 50rem;
  height: 12rem;
  position: relative;
  transform: translateY(-12rem);
  letter-spacing: 0.5rem;
  text-align: left;

  &::before {
    font-size: 2rem;
    content: '\f10d';
    color: #daf489;
    transform: translate(-3rem);
    position: absolute;

    font-family: 'font Awesome 6 free';
    font-weight: 900;
  }

  p {
    font-size: 1.8rem;
    transform: translate(2rem, 3rem);
    margin: 0.5rem;
    text-indent: 2rem;
  }
`;

const Container = styled.div<{ active: boolean }>`
  display: flex;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  transition: 0.5s;
  opacity: ${(props) => (props.active ? 1 : 0)};
  width: 144rem;
  height: 80rem;
  align-content: space-evenly;
  align-items: center;
  margin: 0;
  flex-direction: column;
  padding-top: 15rem;
  padding-bottom: 15rem;
  margin-bottom: 5rem;
`;
