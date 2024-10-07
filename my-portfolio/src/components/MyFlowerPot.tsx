import styled from '@emotion/styled';
import { forwardRef } from 'react';
import { IntroduceProps } from './Introduce';

export const MyFlowerPot = forwardRef<HTMLDivElement, IntroduceProps>((props, ref) => {
  const { active } = props;

  return (
    <FlowerPot active={active} ref={ref}>
      <MyNoteInner />
      <MyNoteInner />
    </FlowerPot>
  );
});

const MyNoteInner = styled.div`
  width: 6rem;
  height: 13rem;
  margin: 0.5rem;
  -webkit-transition: 1s;
  transition: 1s;
  border-radius: 10rem;
  background-image: radial-gradient(circle, #fdc8ba 0%, #fff29d 100%);
  display: inline-block;
  position: relative;

  &:first-of-type {
    transform: rotate(5deg);
  }
  &:nth-of-type(2) {
    transform: rotate(-5deg);
  }

  ::before {
    content: '';
    width: 6.5rem;
    height: 6rem;
    border-radius: 0rem 0rem 7rem 7rem;
    position: absolute;
    transform: translate(-0.25rem, 7.5rem);
    background-image: -webkit-gradient(linear, left top, left bottom, from(#ffef8e), to(#ffdeb2));
    background-image: linear-gradient(180deg, #ffef8e 0%, #ffdeb2 100%);
    box-shadow: 0rem -1rem 2rem #efafa572;
  }
`;

const FlowerPot = styled.div<{ active: boolean }>`
  width: 30rem;
  height: 30rem;
  transition: 3s;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transform: ${(props) =>
    props.active ? 'translate(20rem, 35rem)' : 'perspective(60rem) rotateX(40deg)'};
  font-size: 3rem;
`;
