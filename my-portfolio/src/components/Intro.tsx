import { borderRadius, upDownIcon } from '@/styles/keyFrames';
import styled from '@emotion/styled';
import { forwardRef, useEffect, useState } from 'react';
import { IntroduceProps } from './Introduce';

type TimeRotate = {
  hour: number;
  minute: number;
  second: number;
};

export const Intro = forwardRef<HTMLDivElement, IntroduceProps>((props, ref) => {
  const { active } = props;
  const [timeRotate, setTimeRotate] = useState<TimeRotate>({
    hour: 0,
    minute: 0,
    second: 0,
  });

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
    <IntroContainer active={active} data-sa-target="intro" ref={ref}>
      <div>
        {/* mouse start */}
        <MouseChooseInformation>
          <div className="mouseBody"></div>
          <MouseClickArea>
            <button className="mouseUp" />
            <button className="mouseDown" />
          </MouseClickArea>
        </MouseChooseInformation>
        <MoreInfo></MoreInfo>
      </div>
      {/* mouse end */}

      {/* myRoom start */}
      <MyRoomOnTop></MyRoomOnTop>
      <BigRoom>
        <OnClickViewer>
          <HanaInfo>
            <span className="fa-solid fa-xmark"></span>
          </HanaInfo>
        </OnClickViewer>
        {/* character start */}
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
        {/* character end */}
      </BigRoom>
      {/* myRoom end */}
    </IntroContainer>
  );
});

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

const HanaInfo = styled.div`
  position: relative;
  width: 80rem;
  height: 58rem;
  border-radius: 2rem 1rem 2rem 2rem;
  transform: translate(24rem, 6rem);
  background-position: center;
  box-shadow: -0.5rem 4rem 5rem rgb(128, 109, 109);
  display: flex;
  padding: 1rem;
  overflow: hidden;
  transition: 0.5s;
  justify-content: space-evenly;

  background-position: center;
  background-size: cover;

  .span {
    transform: translate(38rem, 0rem);
    text-shadow: none;
    color: #6d83f7;
    animation: none;
  }
`;

const MyRoomOnTop = styled.div`
  width: 90rem;
  height: 60rem;
  position: absolute;
  background: transparent;
  border-radius: 50%;
  transform: translate(15rem, 10rem) rotate(5deg);
`;

const BigRoom = styled.div`
  perspective: 60rem;
  width: 120rem;
  overflow: hidden;
  border-radius: 10rem;
  box-shadow: 0rem 2rem 8rem #ffe4baba;
  background: #f6ff4c;
  background: radial-gradient(circle, #ff8a37 0%, #f6ff4c 100%);
  perspective-origin: top right;
  transition: 0.5s;
  transform: translate(12rem, 2rem);

  animation: ${borderRadius} 3.5s linear infinite reverse;
`;

const OnClickViewer = styled.div`
  width: 140rem;
  height: 100%;
  visibility: hidden;
  position: fixed;
  z-index: 1000;
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
  padding-top: 15rem;
  padding-bottom: 15rem;
  position: relative;
  margin-bottom: 5rem;
`;

const MouseChooseInformation = styled.div`
  z-index: 100;
  width: 30rem;
  overflow: visible;
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
    content: 'CLICK ME';
    position: absolute;
    font-size: 1.5rem;
    letter-spacing: 1rem;
    background: #fffff081;
    backdrop-filter: blur(0.5rem);
    font-weight: 900;
    border: 0.1rem solid rgba(255, 255, 255, 0.511);
    box-shadow: -0.5rem 0.5rem 4rem #fb90445a;
    color: #fb9044;
    padding: 2rem;

    border-radius: 1rem 10rem 10rem 10rem;
    transform: rotate(40deg) translate(34rem, 11rem);
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
