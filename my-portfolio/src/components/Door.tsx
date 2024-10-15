import { borderRadius, dutationBall, focusDoor, scrollPlz } from '@/styles/keyFrames';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const selectMenuList = [
  {
    id: 'Project List',
    title: 'Project List',
    scrollTarget: 0,
  },
  {
    id: 'mySkills',
    title: 'My Skills',
    scrollTarget: 1,
  },
  {
    id: 'contact',
    title: 'Contact Me',
    scrollTarget: 2,
  },
];

interface DoorProps {
  sectionRefs: React.MutableRefObject<HTMLDivElement[]>;
}

export const Door = ({ sectionRefs }: DoorProps) => {
  const [visibleTitle, setVisibleTitle] = useState(false);
  const [visibleDoor, setVisibleDoor] = useState(true);
  const [visibleSelectMenu, setVisibleSelectMenu] = useState(false);
  const [openDoor, setOpenDoor] = useState(false);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenDoor = () => {
    setOpenDoor(true);
    setTimeout(() => {
      setVisibleDoor(false);
      setVisibleSelectMenu(true);
    }, 1000);
  };

  // title visible
  useEffect(() => {
    setTimeout(() => {
      setVisibleTitle(true);
    }, 800);
  }, []);

  return (
    <DoorContainer>
      {/* title */}
      <Title visible={visibleTitle}>
        HANA's
        <br />
        Room
      </Title>
      {/* select menu */}
      <SelectMenuBox visible={visibleSelectMenu}>
        {selectMenuList.map((menu) => (
          <SelectMenuContent
            onClick={() => {
              scrollToSection(menu.scrollTarget);
            }}
            key={menu.id}>
            {menu.title}
          </SelectMenuContent>
        ))}
        <p>해당 페이지는 데스크탑 환경에 최적화되어 있습니다.</p>
        <ArrowDown className="fa-solid fa-angles-down first"></ArrowDown>
      </SelectMenuBox>

      <OpenRoom>
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <MyDoor visible={visibleDoor}>
          <MyDoorIn>
            <NameCard>
              <div className="handleOfDoor"></div>
              <div className="handleOfDoor"></div>
            </NameCard>
            <MyDoorHandle>
              <MyDoorHandleButton openDoor={openDoor}>
                <div className="key" onClick={handleOpenDoor}></div>
              </MyDoorHandleButton>
            </MyDoorHandle>
          </MyDoorIn>
        </MyDoor>
      </OpenRoom>
    </DoorContainer>
  );
};

const ArrowDown = styled.i`
  position: absolute;
  display: inline-block;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 4rem;

  animation: ${scrollPlz} 3s linear infinite reverse;
  color: #c980ab;
`;

const SelectMenuContent = styled.span`
  background: linear-gradient(30deg, #6563f6, #f4d36f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-transition: 1s;
  transition: 1s;
  padding: 1rem;
  font-size: 3rem;
  text-align: left;
  z-index: 100;
  margin: 1rem;
  letter-spacing: 0.5rem;
  border: none;
  cursor: pointer;
  color: transparent;
  font-family: 'GmarketSansBold';
  position: relative;
`;

const MyDoorHandleButton = styled.div<{ openDoor: boolean }>`
  border: none;
  transition: 0.5s;
  width: 7rem;
  left: 10%;
  top: 10%;
  box-shadow: 1rem -1rem 4rem rgba(119, 181, 181, 0.856);
  border-radius: 1rem;
  background: rgb(234, 234, 210);
  height: 7rem;
  position: relative;
  text-align: center;
  cursor: pointer;

  .key {
    position: absolute;
    width: 10rem;
    transition: 1s;
    top: 50%;
    left: 100%;
    transform: ${({ openDoor }) =>
      openDoor ? 'translate(-50%, -30%)  rotate(15deg)' : 'translate(-50%, -50%)'};
    border-radius: 2rem;
    box-shadow: -0.5rem -1rem 3rem #546989c1;
    height: 3rem;
    background: ivory;
    display: inline-block;
    animation: ${focusDoor} 2s infinite reverse;
  }
`;

const MyDoorHandle = styled.div`
  background: #6957ed;
  width: 32rem;
  -webkit-transition: 1s;
  transition: 1s;
  height: 30rem;
  position: relative;
  border-radius: 1rem 1rem 15rem 1rem;
  -webkit-box-shadow: 0rem 0rem 4rem #422eda;
  box-shadow: 0rem 0rem 4rem #422eda;
  text-align: center;
`;

const MyDoor = styled.div<{ visible: boolean }>`
  z-index: 100;
  background: linear-gradient(10deg, #5943ff, #685bcd);
  width: 45rem;
  border-radius: 15rem 15rem 1rem 1rem;
  height: 65rem;
  transition: 1s;
  display: flex;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  align-items: center;
  justify-content: center;
  box-shadow: 0rem 3rem 8rem rgb(158, 158, 125);
`;

const MyDoorIn = styled.div`
  width: 85%;
  flex-direction: column;
  height: 90%;
  background: linear-gradient(30deg, #5943ff, #685bcd);
  box-shadow: 1rem 0rem 4rem #422eda;
  border-radius: 14rem 14rem 1rem 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NameCard = styled.div`
  background: ivory;
  box-shadow: 0rem 0rem 5rem rgba(164, 232, 225, 0.659);
  width: 30rem;
  height: 17rem;
  border-radius: 11rem 11rem 1rem 1rem;
  transform: translateY(0rem);
  justify-self: flex-start;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;

  .handleOfDoor:nth-of-type(1) {
    position: absolute;
    width: 37rem;
    height: 50rem;
    filter: blur(0.5rem);
    opacity: 0.5;
    transform: translate(-8rem, 5rem) rotate(5deg);
    background: linear-gradient(90deg, salmon, yellow);
    animation: ${borderRadius} 3s linear infinite reverse;
  }

  .handleOfDoor:nth-of-type(2) {
    position: absolute;
    width: 15rem;
    border-radius: 2rem;
    transform: translate(24rem) rotate(50deg);
    height: 15rem;
    filter: blur(0.5rem);
    background-image: linear-gradient(135deg, #6dffaf 10%, #58cffb 100%);
  }
`;

const OpenRoom = styled.div`
  width: 100%;
  height: 72rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  .bubble {
    width: 30rem;
    height: 30rem;
    position: absolute;
  }

  .bubble:nth-of-type(1) {
    background: linear-gradient(salmon, yellow);
    animation: ${borderRadius} 3s linear infinite reverse;
    transform: translate(-20rem);
    box-shadow: 0rem 0rem 10rem rgba(255, 144, 104, 0.525);
  }

  .bubble:nth-of-type(2) {
    background: radial-gradient(circle, violet, rgb(157, 252, 255));
    width: 60rem;
    height: 10rem;
    transform: translate(-10rem, 15rem) rotate(-15deg);
    border-radius: 2rem;
    box-shadow: 0rem 0rem 10rem rgb(155, 246, 249);
  }

  .bubble:nth-of-type(3) {
    box-shadow: 0rem 2rem 4rem #c9ffb4;
    background-image: linear-gradient(135deg, #fff720 10%, #3cd500 100%);
    height: 8rem;
    width: 8rem;
    border-radius: 2rem;
    transition: 1s;
    animation: ${dutationBall} 4s ease-in infinite reverse;
  }

  .bubble:nth-of-type(4) {
    font-size: 10rem;
    width: 30rem;
    transform: translate(-50rem, 35rem) rotate(60deg);
    background-image: linear-gradient(90deg, #f5b4ff 10%, #f067b4 100%);
    text-shadow: 0rem 1rem 3rem #efb4ff85;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const SelectMenuBox = styled.div<{ visible: boolean }>`
  transition: 0.5s;
  position: absolute;
  align-self: center;
  width: 60rem;
  height: 60rem;
  align-items: center;
  display: flex;
  border-radius: 50%;
  z-index: 10;
  padding: 1rem;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  background: rgba(255, 255, 255, 0.206);
  backdrop-filter: blur(1rem);
  opacity: ${(props) => (props.visible ? 1 : 0)};
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  border: 0.1rem solid white;

  p {
    font-size: 1.5rem;
    color: #a495c2;

    letter-spacing: 0.5rem;
  }
`;

const Title = styled.h1<{ visible: boolean }>`
  background: linear-gradient(80deg, #ff7f43 0%, #fcdb7b 100%);
  letter-spacing: 1rem;
  font-family: 'GmarketSansMedium';
  background-clip: text;
  color: transparent;
  transform: ${({ visible }) => (visible ? 'translate(-40rem)' : 'translate(0rem)')};
  padding: 5%;
  font-size: 5rem;
  transition: 1s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  align-self: stretch;
  position: absolute;
`;

const DoorContainer = styled.div`
  width: 100%;
  height: 72rem;
  padding-bottom: 20rem;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;
