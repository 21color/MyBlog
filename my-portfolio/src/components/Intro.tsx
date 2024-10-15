import Name from '@/assets/name.png';
import { DevFolio } from '@/shared/constants';
import useHandleClickOutside from '@/shared/hooks/useHandleClickOutside';
import {
  armWorking,
  borderRadius,
  eyeHoleMoving,
  eyeMoving,
  headMoving,
  keyPadNock,
  mouseMoving,
  upDownIcon,
} from '@/styles/keyFrames';
import styled from '@emotion/styled';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { IntroduceProps } from './Introduce';

type TimeRotate = {
  hour: number;
  minute: number;
  second: number;
};

export const Intro = forwardRef<HTMLDivElement, IntroduceProps>((props, ref) => {
  const [activeTab, setActiveTab] = useState(0);
  const { active } = props;
  const [openViewer, setOpenViewer] = useState(false);
  const onClickRef = useRef<HTMLDivElement>(null);
  const [timeRotate, setTimeRotate] = useState<TimeRotate>({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useHandleClickOutside(onClickRef, () => setOpenViewer(false));

  useEffect(() => {
    const interval = setInterval(() => {
      const deg = 6;
      const day = new Date();
      const hh = day.getHours() * 30;
      const mm = day.getMinutes() * deg;
      const ss = day.getSeconds() * deg;

      setTimeRotate({
        hour: hh + mm / 12,
        minute: mm,
        second: ss,
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <IntroContainer active={active} ref={ref}>
      <div>
        {/* mouse start */}
        <MouseChooseInformation isOpenViewer={openViewer}>
          <div className="mouseBody"></div>
          <MouseClickArea>
            <button className="mouseUp" onClick={() => setOpenViewer(true)} />
            <button className="mouseDown" onClick={() => setOpenViewer(true)} />
          </MouseClickArea>
        </MouseChooseInformation>
        <MoreInfo></MoreInfo>
      </div>
      {/* mouse end */}

      {/* myRoom start */}
      <MyRoomOnTop></MyRoomOnTop>
      <BigRoom isOpenViewer={openViewer}>
        {openViewer && (
          <OnClickViewer>
            <InfoBrowser ref={onClickRef}>
              <InfoBrowserHeader>
                <CircleIcon onClick={() => setOpenViewer(false)}></CircleIcon>
                <BrowserHeaderTabs>
                  {DevFolio.map((item, idx) => (
                    <BrowserTab
                      active={activeTab === idx}
                      onClick={() => setActiveTab(idx)}
                      key={idx}>
                      <p>{item.title}</p>
                    </BrowserTab>
                  ))}
                </BrowserHeaderTabs>
              </InfoBrowserHeader>
              <InfoBrowserBody>
                <h1>{DevFolio[activeTab].title}</h1>
                <DescriptionBanner>{DevFolio[activeTab].description}</DescriptionBanner>
                <SkillContainer>
                  {DevFolio[activeTab].skills.map((skill, idx) => (
                    <div key={idx}>
                      <img src={skill.src} />
                    </div>
                  ))}
                </SkillContainer>
                <ExampleImage>
                  <img src={DevFolio[activeTab].img} />
                </ExampleImage>
                <DemoButton
                  onClick={() => {
                    window.open(DevFolio[activeTab].demo);
                  }}>
                  보러가기
                </DemoButton>
              </InfoBrowserBody>
            </InfoBrowser>
          </OnClickViewer>
        )}
        {/* myRoom Left */}
        <MyRoomLeft>
          <MyPictureIntro>
            <LeftDoorMyPictureIntro>
              <ClockBody>
                <InnerClock></InnerClock>
                <div className="hour">
                  <HourHandStyle timeRotate={timeRotate} />
                </div>
                <div className="minute">
                  <MinuteHandStyle timeRotate={timeRotate} />
                </div>
                <div className="second">
                  <SecondHandStyle timeRotate={timeRotate} />
                </div>
              </ClockBody>
            </LeftDoorMyPictureIntro>
          </MyPictureIntro>
        </MyRoomLeft>
        {/* myRoomLeft end */}

        {/* myRoom Front start */}
        <MyRoomFront>
          <BookStreet>
            <Clip />
            <PostIt />
          </BookStreet>

          <MyClosetRoom>
            <MyClosetRoomDoorLeft />
            <MyClosetRoomDoorRight>
              <MyClosetRoomDoorHandle />
            </MyClosetRoomDoorRight>
          </MyClosetRoom>
          {/* hana Character start */}
          <MyNameIsHana>
            <HanaHeader>
              <HeadsetBody></HeadsetBody>

              <Headset>
                <div className="logo">HANA</div>
              </Headset>

              <HeadsetRight></HeadsetRight>
              <HanaHead>
                <Hair />
                {/* 왼쪽 눈 */}
                <EyeHole className="left" />
                <HeadInEye className="left">
                  <WithEye>
                    <div className="circle" />
                  </WithEye>
                </HeadInEye>
                {/* 오른쪽 눈 */}
                <EyeHole className="right" />
                <HeadInEye className="right">
                  <WithEye>
                    <div className="circle" />
                  </WithEye>
                </HeadInEye>
                {/* 눈 아래 점, 입 */}
                <EyeDot>.</EyeDot>
                <HeadLip>3</HeadLip>
                <LipDot>.</LipDot>
                {/* 눈 아래 점, 입 끝 */}
              </HanaHead>

              <TailHair />
            </HanaHeader>
            {/* head end */}

            {/* body start */}
            <HanaBody>
              <BodyTeeShirt>
                <div className="neck" />
              </BodyTeeShirt>
              <BodyArm></BodyArm>
              <BodyArm className="right"></BodyArm>

              <NoteBook>
                <KeyboardInner>
                  {Array.from({ length: 12 }).map((_, idx) => (
                    <KeyPad key={idx} />
                  ))}
                  <KeyPad className="spaceBar" />
                  {Array.from({ length: 13 }).map((_, idx) => (
                    <KeyPad key={idx} />
                  ))}
                  <KeyPad className="hotPink" />
                </KeyboardInner>
              </NoteBook>
            </HanaBody>
            {/* body end */}
          </MyNameIsHana>
        </MyRoomFront>
        {/* myRoom Front end */}
      </BigRoom>
      {/* myRoom end */}
    </IntroContainer>
  );
});

const SkillContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  div {
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div > img {
    width: 100%;
    object-fit: cover;
  }
`;

const ExampleImage = styled.div`
  width: 100%;
  height: 20rem;
  border-radius: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

const DemoButton = styled.div`
  width: 100%;
  height: 5rem;
  background: black;
  border-radius: 1rem;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-family: 'pretendard';
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.25s ease-in-out;

  &:hover {
    background: #e9e9e9;
  }
`;

const BrowserTab = styled.div<{ active?: boolean }>`
  width: fit-content;
  height: 80%;
  padding: 0rem 1rem;
  font-size: 1.1rem;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  font-family: 'pretendard';
  background: ${(props) => (props.active ? '#ffffff8a' : 'transparent')};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-in-out;

  p {
    padding: 0.5rem;
    border-radius: 1rem;
  }

  &:hover > p {
    background: #ffffff8a;
  }
`;

const InfoBrowserHeader = styled.div`
  height: 5rem;
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem 2rem;
`;

const BrowserHeaderTabs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const InfoBrowserBody = styled.div`
  height: 100%;
  background: #ffffff8a;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  position: relative;
  font-family: 'pretendard';

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  p {
    font-size: 1.5rem;
  }
`;

const DescriptionBanner = styled.div`
  background: #9cafff6a;
  padding: 1rem;
  border-radius: 1rem;
  word-break: keep-all;
  color: #447bcf;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-family: 'pretendard';
  line-height: 2rem;
`;

const CircleIcon = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #eb584e;
  border: 0.1rem solid #d3493f;
  &:hover {
    cursor: pointer;
  }
`;

const KeyPad = styled.div`
  width: 2rem;
  box-shadow: 0.1rem 0.3rem 0.3rem #b694e6;
  height: 2rem;
  border-radius: 0.5rem;
  margin: 0.5rem;
  background: white;
  transition: 0.5s;

  &:hover,
  &:active {
    cursor: pointer;
    background: #d4d8ff;
    box-shadow: -0.1rem -0.3rem 0.3rem #b694e6;
  }

  &.spaceBar {
    width: 6rem;
  }

  &.hotPink {
    background: #e99ec4;
    box-shadow: 0rem 0.3rem 0.3rem #b15a97;
  }

  &:nth-child(8) {
    animation: ${keyPadNock} 2s linear infinite;
  }

  &:nth-child(17) {
    animation: ${keyPadNock} 3s ease-in-out infinite reverse;
  }
`;

const MyNameIsHana = styled.div`
  width: 60rem;
  height: 50rem;
  border-radius: 10rem;
  text-align: center;
  transform: translate(10rem, 35rem);
`;

const NoteBook = styled.div`
  width: 35rem;
  height: 12rem;
  z-index: 0;
  background: #c8b7ff;
  border-radius: 2rem;
  transform: translate(-5rem, 23rem) rotate3D(-4, 3, 0, -40deg) rotate(5deg);
  box-shadow: 1rem 1rem 0.1rem #a18ce6;
`;

const KeyboardInner = styled.div`
  transform: translate(2rem, 1rem);
  width: 30rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const HanaBody = styled.div`
  width: 30rem;
  height: 20rem;
  background: #ffe0d8;

  transform: translate(10rem, -7rem) rotate(5deg);
  border-radius: 16rem 13rem 1rem 1rem;
`;

const BodyArm = styled.div`
  width: 8rem;
  z-index: 100;
  height: 6rem;
  position: relative;
  background: #ffe0d8;
  box-shadow:
    inset 0rem 0rem 3rem #ffc6d0,
    0rem 2rem 4rem #302f2f60;
  border-radius: 15rem 10rem 10rem 8rem;
  position: absolute;
  transform: translate(1rem, 18rem) rotate(15deg);
  animation: ${mouseMoving} 2s ease-in-out infinite reverse;

  &.right {
    border-radius: 10rem 15rem 10rem 8rem;
    transform: translate(15rem, 21rem) rotate(30deg);
    animation: ${armWorking} 2s linear infinite reverse;
  }
`;

const BodyTeeShirt = styled.div`
  border-radius: 16rem 13rem 6rem 3rem;
  width: 30rem;
  height: 25rem;

  box-shadow: 0.1rem 0.2rem 5rem #9f5025c5;
  background: #563fff;
  position: absolute;

  &::after {
    content: '1';
    font-size: 3rem;
    color: #fdcabc;

    transform: translate(3rem, 5rem);
    position: absolute;
    font-family: 'YdestreetB';
  }

  .neck {
    width: 7rem;
    height: 4.5rem;
    border-radius: 50%;
    background: #ffe0d8;
    transform: translate(11rem, -0.5rem) rotate(-7deg);
  }
`;

const HanaHeader = styled.div`
  z-index: 10;
  animation: ${headMoving} 3s linear infinite reverse;
  position: relative;
  display: inline-block;
  width: 40rem;
  height: 30rem;
`;

const TailHair = styled.div`
  width: 15rem;
  height: 30rem;
  background: #343241;
  border-radius: 20rem 40rem 10rem 50rem;
  position: absolute;

  transform: translate(20rem, -10rem) rotate(-15deg);
`;

const HeadsetBody = styled.div`
  z-index: 150;
  width: 27rem;
  height: 14rem;
  position: absolute;
  background: transparent;
  border-radius: 10rem 15rem 0rem 0rem;
  transform: translate(0rem, 0rem) rotate(6deg);
  border-top: 3rem solid $headset;
`;

const Headset = styled.div`
  position: absolute;
  width: 9rem;
  z-index: 200;
  box-shadow: 0rem 0rem 1rem rgba(103, 80, 80, 0.528);
  transform: translate(20rem, 8rem) rotate(-5deg);
  height: 10rem;
  background: #dadada;
  border-radius: 40%;

  .logo {
    width: 7.6rem;
    height: 8.6rem;
    text-align: center;
    line-height: 8.5rem;
    font-size: 1.2rem;
    color: #c0c0c0;
    background: #f6f6f6;
    transform: translate(2rem, 1rem);
    border-radius: 40%;
    font-family: 'YdestreetB';
    letter-spacing: 0.2rem;
  }
`;

const HeadsetRight = styled.div`
  position: absolute;
  width: 9rem;
  -webkit-transform: translate(-2rem, 8rem);
  transform: translate(-2rem, 8rem);
  height: 10rem;
  background: #bfc7ca;
  border-radius: 40%;
`;

const HanaHead = styled.div`
  -webkit-box-shadow:
    inset 0rem 0rem 5rem #ffc6d0,
    1rem 1rem 8rem rgba(172, 82, 47, 0.813);
  box-shadow:
    inset 0rem 0rem 5rem #ffc6d0,
    1rem 1rem 8rem rgba(172, 82, 47, 0.813);
  position: absolute;
  z-index: 100;
  width: 28rem;
  height: 26rem;
  background: #ffe0d8;
  border-radius: 10rem 10rem 20rem 14rem;
`;

const Hair = styled.div`
  width: 30rem;
  height: 17rem;
  -webkit-transform: translate(-1rem, -5rem);
  transform: translate(-1rem, -5rem);
  background: #343241;
  border-radius: 14rem 13rem 0rem 1rem;
`;

const EyeHole = styled.div`
  width: 5.5rem;
  height: 3.5rem;
  background: transparent;
  position: absolute;
  z-index: 100;
  border-top: 1rem solid #fbd7c3;
  border-radius: 2rem 3rem 0rem 0rem;
  animation: ${eyeHoleMoving} 2s ease-in-out infinite reverse;

  &.left {
    transform: translate(2.8rem, -4rem);
  }

  &.right {
    transform: translate(10.9rem, -9rem);
  }
`;

const HeadInEye = styled.div`
  -webkit-box-shadow: 0.4rem 0rem 0.1rem #ffe0d8;
  box-shadow: 0.4rem 0rem 0.1rem #ffe0d8;
  width: 5rem;
  height: 5rem;
  border-radius: 15rem 20rem 15rem 20rem;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#d9e7e7),
    color-stop(40%, white)
  );
  background: linear-gradient(#d9e7e7, white 40%);
  transform: translate(3rem, -4rem);

  &.left {
    transform: translate(2.8rem, -4rem);
  }

  &.right {
    transform: translate(10.9rem, -9rem);
  }
`;

const WithEye = styled.div`
  width: 3.5rem;
  -webkit-transition: 1s;
  transition: 1s;
  z-index: 0;
  -webkit-transform: translate(0.5rem, 0.7rem) rotate(-10deg);
  transform: translate(0.5rem, 0.7rem) rotate(-10deg);
  height: 4rem;
  border-radius: 2rem 3rem 2rem 4rem;
  animation: ${eyeMoving} 2s linear infinite reverse;
  background: #343241;

  .circle {
    width: 1rem;
    height: 1rem;
    background: white;
    -webkit-transform: translate(2.8rem, 2rem);
    transform: translate(2.8rem, 2rem);
    border-radius: 50%;
  }
`;

const EyeDot = styled.div`
  position: absolute;
  font-size: 1.5rem;
  color: #2a2932;
  -webkit-transform: translate(15rem, -10rem);
  transform: translate(15rem, -10rem);
  font-family: 'SangSangShinb7';
`;

const HeadLip = styled.div`
  width: 5rem;
  font-size: 5rem;
  height: 2rem;
  color: #fd9376;
  border-radius: 50%;
  font-family: 'SangSangShinb7';
  transform: translate(10rem, -7rem) rotate(105deg);
`;

const LipDot = styled.div`
  position: absolute;
  font-size: 2rem;
  font-family: 'SangSangShinb7';
  color: #2a2932;
  -webkit-transform: translate(8rem, -9rem);
  transform: translate(8rem, -9rem);
`;

const MyClosetRoom = styled.div`
  width: 30rem;
  height: 40rem;
  position: absolute;
  transform: translate(60rem, 40rem);
  border-radius: 1rem 1rem 0.6rem 0.6rem;
  box-shadow: 0rem -1rem 5rem rgb(248, 155, 131);
  background-image: linear-gradient(180deg, #d9b8ff 0, #b99df2 50%, #a591e5 100%);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const MyClosetRoomDoorHandle = styled.div`
  width: 5rem;
  height: 2rem;
  background: rgb(233, 216, 255);
  transform: translate(2rem, 16.5rem);
  border-radius: 1rem;
  box-shadow: 0rem 0rem 2rem rgba(121, 60, 196, 0.467);
  display: inline-block;
`;

const MyClosetRoomDoorRight = styled.div`
  width: 31rem;
  height: 90%;
  transform: translate(-2rem);
  background: rgba(230, 210, 255, 0.826);
  border-radius: 0.5rem;
  -webkit-box-shadow: 0rem 0rem 1rem #a26fe1;
  box-shadow: 0rem 0rem 1rem #a26fe1;
`;

const MyClosetRoomDoorLeft = styled.div`
  width: 30rem;
  height: 88%;
  overflow: hidden;
  transform: translate(2rem);
  background: rgba(252, 221, 149, 0.765);
  border-radius: 0.5rem;
  box-shadow: inset 0rem 0rem 1rem rgb(98, 42, 166);
`;

const PostIt = styled.div`
  width: 5rem;
  height: 6rem;

  position: absolute;
  background: #ecfdbcd1;
  transform: translate(10rem, 24rem) rotate(-5deg);
  border-radius: 0.1rem;
`;

const Clip = styled.div`
  width: 6rem;
  height: 3rem;
  position: absolute;
  background: linear-gradient(10deg, #fdb5b0, #fa9994e2);
  transform: translate(5rem, -2rem) rotate(-5deg);
`;

const MyRoomFront = styled.div`
  background: #ffffff41;
  -webkit-backdrop-filter: blur(0.6rem);
  backdrop-filter: blur(0.6rem);
  border-radius: 0rem 1rem 1rem 0rem;
  width: 110rem;
  height: 80rem;
  -webkit-transform: translate(25rem, -92rem);
  transform: translate(36.5rem, -92rem);
  position: relative;
`;

const BookStreet = styled.div`
  width: 20rem;
  height: 25rem;
  padding: 1rem;
  position: absolute;
  opacity: 0.8;
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgb(150, 251, 199);
  background-image: url(${Name});
  border-radius: 0.5 rem;
  transform: translate(8rem, 30rem) rotate(15deg);
`;

const HourHandStyle = styled.div<{ timeRotate: TimeRotate }>`
  transform: ${(props) => `rotateZ(${props.timeRotate.hour}deg)`};

  width: 15rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  position: absolute;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    width: 0.8rem;
    height: 8rem;
    border-radius: 0.5rem;
    background: #fe7b95;
    box-shadow: -0.25rem -0.25rem 2rem rgb(252, 183, 183);
    z-index: 10;
  }
`;

const MinuteHandStyle = styled.div<{ timeRotate: TimeRotate }>`
  transform: ${(props) => `rotateZ(${props.timeRotate.minute}deg)`};

  width: 19rem;
  height: 19rem;
  display: flex;
  justify-content: center;
  position: absolute;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    width: 0.5rem;
    height: 10rem;
    box-shadow: -0.25rem -0.25rem 2rem rgb(252, 183, 183);
    border-radius: 0.5rem;
    background: rgb(248, 180, 197);
    z-index: 10;
  }
`;

const SecondHandStyle = styled.div<{ timeRotate: TimeRotate }>`
  transform: ${(props) => `rotateZ(${props.timeRotate.second}deg)`};

  width: 23rem;
  height: 23rem;
  display: flex;
  justify-content: center;
  position: absolute;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    width: 0.2rem;
    border-radius: 0.2rem;
    height: 13rem;
    box-shadow: -0.5rem -0.5rem 1rem rgba(191, 191, 191, 0.522);
    background: linear-gradient(#87f2d4, rgb(255, 185, 181));
    z-index: 200;
  }
`;

const InfoBrowser = styled.div`
  position: relative;
  width: 65rem;
  background: #ffffff7a;
  height: 58rem;
  border-radius: 2rem 1rem 2rem 2rem;
  background-position: center;
  box-shadow: -0.5rem 4rem 5rem rgb(128, 109, 109);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 0.25s ease-in-out;
  overflow-y: auto;
  backdrop-filter: blur(0.3rem);

  background-position: center;
  background-size: cover;
`;

const MyRoomOnTop = styled.div`
  width: 90rem;
  height: 60rem;
  position: absolute;
  background: transparent;
  border-radius: 50%;
  transform: translate(15rem, 10rem) rotate(5deg);
`;

const BigRoom = styled.div<{ isOpenViewer: boolean }>`
  perspective: 60rem;
  width: ${(props) => (props.isOpenViewer ? '135rem' : '120rem')};
  overflow: hidden;
  border-radius: 10rem;
  box-shadow: 0rem 2rem 8rem #ffe4baba;
  background: #f6ff4c;
  background: radial-gradient(circle, #ff8a37 0%, #f6ff4c 100%);
  perspective-origin: top right;
  transition: 0.25s ease-in-out;
  transform: ${(props) => (props.isOpenViewer ? 'translate(5rem)' : 'translate(12rem)')};

  animation: ${borderRadius} 3.5s linear infinite reverse;
`;

const OnClickViewer = styled.div`
  width: 140rem;
  height: 100%;
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftDoorMyPictureIntro = styled.div`
  -webkit-transform: translate(3rem);
  transform: translate(3rem);
  padding: 0.5rem;
  text-align: center;
  width: 22rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  height: 22rem;
  background: #ffe0d8;
  border-radius: 40% 41% 46% 61% / 45% 37% 50% 45%;
`;

const ClockBody = styled.div`
  position: absolute;
  width: 20rem;
  height: 20rem;
  background: rgba(255, 255, 240, 0.757);

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 45% 37% 50% 45% / 40% 41% 46% 61%;

  box-shadow: -0.5rem 0.5rem 3rem rgba(233, 113, 89, 0.63);

  &::before {
    content: '';
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: transparent;
    z-index: 1000;
  }

  .hour,
  .minute,
  .second {
    position: absolute;
  }

  .hour {
    width: 15rem;
    height: 15rem;
  }

  .minute {
    width: 19rem;
    height: 19rem;
  }

  .second {
    width: 23rem;
    height: 23rem;
  }
`;

const InnerClock = styled.div``;

const MyPictureIntro = styled.div`
  width: 25rem;
  height: 25rem;
  border-radius: 20rem 20rem 0rem 0rem;
  -webkit-transform: translate(20rem, 25rem);
  transform: translate(20rem, 25rem);
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const MyRoomLeft = styled.div`
  width: 51rem;
  height: 70rem;
  position: relative;
  background: #fc3dd35a;
  z-index: 10;
  -webkit-backdrop-filter: blur(0.5rem);
  backdrop-filter: blur(0.5rem);
  -webkit-transform-origin: 100% 0;
  border-radius: 2rem;
  transform-origin: 100% 0;
  -webkit-transform: translate(-14.5rem, -10rem);
  transform: translate(-14.5rem, -10rem);
`;

const MoreInfo = styled.div`
  position: absolute;
  z-index: 100;
  line-height: 2rem;
  font-size: 2rem;
  -webkit-transform: translate(28rem, 66rem);
  transform: translate(28rem, 66rem);

  p {
    font-size: 1.5rem;
    font-family: 'GowunDodum-Regular';
  }
`;

const IntroContainer = styled.div<{ active: boolean }>`
  display: flex;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  justify-content: center;
  opacity: ${(props) => (props.active ? 1 : 0)};
  width: 100%;
  height: 72rem;
  transition: 0.5s;
  padding-top: 15rem;
  padding-bottom: 15rem;
  position: relative;
  margin-bottom: 5rem;
`;

const MouseChooseInformation = styled.div<{ isOpenViewer: boolean }>`
  z-index: 100;
  width: 30rem;
  overflow: visible;
  visibility: ${(props) => (props.isOpenViewer ? 'hidden' : 'visible')};
  box-shadow:
    inset 0rem 2rem 10rem #b0f8ff,
    -0.5rem 0rem 4rem rgba(174, 234, 240, 0.632);
  height: 25rem;
  background-color: #74ebd5;
  background-image: linear-gradient(90deg, #81f0f3 0%, #b8a3fe 100%);
  border-bottom: 0.1rem solid #b8a3fe;
  position: absolute;
  justify-content: space-between;
  transform: translate(10rem, 47rem) rotate(-40deg);
  border-radius: 30rem 38rem 35rem 30rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  animation: ${upDownIcon} 2s infinite reverse;

  &::after {
    content: 'PROJECT OPEN';
    position: absolute;
    font-size: 2.5rem;
    letter-spacing: 1rem;
    text-align: center;
    background: #fffff081;
    backdrop-filter: blur(0.5rem);
    font-weight: 900;
    border: 0.1rem solid rgba(255, 255, 255, 0.511);
    box-shadow: -0.5rem 0.5rem 4rem #fb90445a;
    color: #fb9044;
    padding: 2rem;

    border-radius: 10rem 10rem 10rem 1rem;
    transform: rotate(40deg) translate(33rem, -8rem);
  }

  .mouseBody {
    width: 40%;
  }
`;

const MouseClickArea = styled.div`
  transform: translate(0rem, -0.5rem);
  border-radius: 3rem 15rem 15rem 3rem;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 90%;
  align-self: center;
  justify-content: center;
  background: transparent;

  button {
    border: none;
    width: 100%;
    padding: 1rem;
    position: relative;
    height: 46%;
    margin-bottom: 0.3rem;
    cursor: pointer;
    font-family: 'GowunDodum-Regular';
    letter-spacing: 0.4rem;
    box-shadow: inset -0.5rem -1rem 3rem rgba(240, 244, 255, 0.664);
    background: rgba(255, 255, 240, 0.459);
    font-size: 2rem;
  }

  button:first-of-type {
    border-radius: 9rem 15rem 0rem 1rem;
  }

  button:last-child {
    &:last-child {
      border-radius: 1rem 0rem 15rem 9rem;
    }
  }

  .mouseUp::after {
    content: '';
    position: absolute;
    width: 30%;
    height: 25%;
    transform: translate(-3rem, 4rem);
    border-radius: 10rem;
    background: ivory;
    z-index: 100;
    box-shadow: -0.5rem 0.2rem 2rem #b8a3fe5d;
  }
`;
