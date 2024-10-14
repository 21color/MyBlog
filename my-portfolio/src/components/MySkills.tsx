
import { borderRadius } from '@/styles/keyFrames';
import styled from '@emotion/styled';
import { forwardRef, useState } from 'react';
import { IntroduceProps } from './Introduce';

import { mySkillDescriptionList, keyBoardKeyList } from '@/shared/constants';



export const MySkills = forwardRef<HTMLDivElement, IntroduceProps>((props, ref) => {
  const [activeSkill, setActiveSkill] = useState('');

  const isShowSkill = activeSkill !== '';

  const { active } = props;

  return (
    <Container active={active} ref={ref}>
      <IntroSkills>
        <h1>키보드의 키를 눌러보세요.</h1>
        <p>저는 이런것들을 할 수 있답니다.</p>
      </IntroSkills>

      <MySkillItem></MySkillItem>

      <Desk openSkill={isShowSkill}>
        {mySkillDescriptionList.map((skill, index) => {
          if (activeSkill !== skill.title) return null;
          return (
            <SkillDescription key={index}>
              <h1>{skill.title}</h1>
              <p>{skill.description}</p>
            </SkillDescription>
          );
        })}
      </Desk>
      <MySkillKeyBoard openSkill={isShowSkill}>
        <MySkillKeyBoardInner>
          <LineTop>
            <LineTopKey className="esc">
              <span className="fa-solid fa-arrow-right"></span>
            </LineTopKey>

            {keyBoardKeyList.lineTop.map((key, index) => (
              <LineTopKey className={key === '' ? 'hidden' : ''} key={index}>
                <span>{key}</span>
              </LineTopKey>
            ))}
          </LineTop>
          <LineMain>
            {keyBoardKeyList.lineMain.map((key, index) => (
              <LineMainKey
                active={activeSkill !== '' && activeSkill === key.key}
                key={index}
                className={
                  key.key === 'CLICK SKILL KEY' ? 'spaceBar' : key.key === 'RESET' ? 'enter' : ''
                }
                onClick={() => {
                  if (!key.event) return;
                  if (key.key === 'RESET') {
                    setActiveSkill('');
                  } else {
                    setActiveSkill(key.key);
                  }
                }}>
                {key.src ? <img src={key.src} alt={key.key} /> : <span>{key.key}</span>}
              </LineMainKey>
            ))}
          </LineMain>
        </MySkillKeyBoardInner>
      </MySkillKeyBoard>
    </Container>
  );
});

const Container = styled.div<{ active: boolean }>`
  display: flex;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.5s;
  opacity: ${(props) => (props.active ? 1 : 0)};
  width: 144rem;
  height: 72rem;
  padding-top: 15rem;
  padding-bottom: 15rem;
  position: relative;
  margin-bottom: 5rem;
`;

const Desk = styled.div<{ openSkill: boolean }>`
  position: absolute;

  transition: 0.5s;
  width: ${(props) => (props.openSkill ? '43rem' : '90rem')};
  transform: ${(props) => (props.openSkill ? 'translate(44rem, -9rem)' : 'translate(-9rem)')};
  height: ${(props) => (props.openSkill ? '43rem' : '60rem;')};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #fc9e5b 0%, #ffff8c 100%);
  animation: ${borderRadius} 5s linear infinite reverse;
`;

const MySkillKeyBoard = styled.div<{ openSkill: boolean }>`
  transition: 0.5s;
  width: 60%;
  height: 70%;

  transform: ${(props) =>
    props.openSkill
      ? 'translate(-20rem, -2.3rem) rotate(0deg)'
      : 'translate(0rem, -2.3rem) rotate(7deg);'};

  border-radius: 2rem;
  border-bottom: 0.1rem solid #c5b4fb;

  box-shadow: 0rem 3rem 8rem #c681738f;
  background-image: linear-gradient(135deg, #c8b7ff 10%, #caa7a2 100%);
`;

const MySkillKeyBoardInner = styled.div`
  padding: 1rem;
  align-items: center;
  width: 90%;
  border-radius: 1rem;
  display: flex;

  flex-direction: column;

  justify-content: space-between;

  box-shadow: 0rem 2rem 6rem #736abb;
  position: relative;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  height: 85%;
  background-image: linear-gradient(120deg, #c8b7ff 10%, #9d8bdd 100%);
`;

const LineMain = styled.div`
  width: 100%;
  display: flex;
  transform: translateY(-1rem);
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  height: 65%;
`;

const LineTop = styled.div`
  width: 95%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const LineTopKey = styled.div`
  transition: 0.5s;
  box-shadow:
    inset -1rem 1rem 3rem white,
    0.5rem 1rem 3rem #836ba1cb;
  border-radius: 1rem;
  width: 8rem;
  height: 8rem;
  margin: 0.5rem;
  background: whitesmoke;
  text-align: center;
  line-height: 8rem;

  span {
    font-family: 'Pretendard-Regular';
    font-size: 2rem;
    color: #6c65a0;
  }

  &.esc {
    background: #fbacd3;
    width: 10rem;
    box-shadow: 0.5rem 1rem 3rem #836ba1cb;
    font-size: 2rem;
    color: #6c65a0;
  }

  &.hidden {
    visibility: hidden;
    width: 2rem;
  }
`;

const LineMainKey = styled.div<{ active: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  text-align: center;
  width: 8rem;
  height: 8rem;
  background: whitesmoke;
  border-radius: 1rem;
  margin: 0.5rem;
  box-shadow: ${(props) =>
    props.active
      ? '0.5rem 1rem 3rem #baf0e4cb'
      : 'inset -1rem 1rem 3rem white, 0.5rem 1rem 3rem #836ba1cb'};

  font-size: 2rem;
  font-family: 'Pretendard-Regular';
  color: #6c65a0;

  img {
    width: 6rem;
  }

  &:hover {
    box-shadow: 0.5rem 1rem 3rem #baf0e4cb;
  }

  &.spaceBar {
    width: 35rem;
    height: 8rem;
    background: whitesmoke;
    box-shadow: 0.5rem 1rem 3rem #836ba1cb;
  }

  &.enter {
    width: 20rem;
    background: #ffd452;
    -webkit-box-shadow: 0.5rem 1rem 3rem #836ba1cb;
    box-shadow: 0.5rem 1rem 3rem #836ba1cb;
    letter-spacing: 1rem;
    color: white;
    text-shadow: 0rem 0rem 2rem #f0ab65;
  }
`;

const SkillDescription = styled.div`
  width: 30rem;
  height: 30rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  letter-spacing: 0.7rem;
  overflow-wrap: wrap;
  justify-content: space-evenly;
  text-align: left;

  h1 {
    display: inline-block;
    font-size: 3.5rem;
    color: white;
    font-family: 'GowunDodum-Regular';
    letter-spacing: 0.7rem;
  }
  p {
    font-size: 1.8rem;
    text-shadow: -1rem 1rem 3rem #e38b4c;
    color: white;
    font-family: 'GowunDodum-Regular';
  }
`;

const MySkillItem = styled.div`
  width: 15rem;
  position: absolute;
  height: 15rem;
  -webkit-transform: translate(50rem, -30rem) rotate(-30deg);
  transform: translate(50rem, -30rem) rotate(-30deg);
  background: #4cf9df;
  background: radial-gradient(circle, #b8ff99 0%, #83fee1 100%);
  border-radius: 5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const IntroSkills = styled.div`
  position: absolute;
  opacity: 1;

  transform: translate(-22rem, -45rem);
  transition: 1s;
  line-height: 2rem;
  padding: 2rem;
  letter-spacing: 0.5rem;

  h1 {
    margin: 0.5rem;
    text-indent: 2rem;
    font-size: 2.5rem;
    padding: 1rem;
  }

  p {
    display: inline-block;
    font-size: 1.8rem;
    letter-spacing: 0.3rem;
    margin: 0.5rem;
  }

  &::before {
    font-size: 2rem;
    content: '\f10d';
    color: #ffbe92;
    position: absolute;
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
  }

  &::after {
    font-size: 2rem;
    content: '\f10e';
    color: #ffbe92;
    position: absolute;
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
  }
`;
