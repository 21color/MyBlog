import { borderRadius } from '@/styles/keyFrames';
import styled from '@emotion/styled';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef } from 'react';
import { IntroduceProps } from './Introduce';

export const MyCircleSection = forwardRef<HTMLDivElement, IntroduceProps>((props, ref) => {
  const { active } = props;

  return (
    <MyCircle active={active} ref={ref}>
      <Information>
        <p>제 방을 구경하시면</p>
        <p>저와 조금씩 조금씩</p>
        <p>가까워지실거에요</p>
        <FontAwesomeIcon
          color="#b15a5a"
          style={{ position: 'absolute', transform: 'translate(0.5rem)' }}
          size="2x"
          icon={faQuoteRight}
        />
      </Information>
    </MyCircle>
  );
});

const Information = styled.div`
  padding: 2rem;
  width: 100%;
  line-height: 2rem;

  transform: translate(1rem);
  position: absolute;

  p {
    display: inline-block;
    font-size: 1.8rem;
    margin: 0.5rem;
    letter-spacing: 0.5rem;
  }

  p:first-of-type {
    text-indent: 1rem;
  }
`;

const MyCircle = styled.div<{ active: boolean }>`
  position: absolute;
  opacity: ${(props) => (props.active ? 1 : 0)};
  display: flex;

  animation: ${borderRadius} 3.5s linear infinite alternate;

  align-items: center;
  transform: ${(props) => (props.active ? 'translate(-28rem, 35rem)' : 'translate(0, 0)')};
  -webkit-transition: 2s;
  transition: 2s;
  width: 24rem;
  height: 22rem;
  align-items: center;

  justify-content: center;
  padding: 2rem;
`;
