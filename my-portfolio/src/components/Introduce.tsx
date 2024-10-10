import PortfolioImage from '@/assets/portfolio.png';
import { scrollPlz2, slame } from '@/styles/keyFrames';
import styled from '@emotion/styled';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef } from 'react';
export interface IntroduceProps {
  active: boolean;
}

export const Introduce = forwardRef<HTMLDivElement, IntroduceProps>((props, ref) => {
  const { active } = props;

  return (
    <>
      <MyHightCircle ref={ref} active={active}>
        <MyPicture />
        <InfoBox>
          <FontAwesomeIcon
            color="#b15a97"
            style={{ transform: 'translate(-0.5rem)' }}
            fontSize={'2rem'}
            icon={faQuoteLeft}
          />
          <p>어제보다 더 나은 오늘을 만들어가는</p>
          <p>
            병아리 개발자
            <Markers>이하나</Markers>
            입니다.
          </p>
          <p>
            저의 <Markers>첫번째</Markers> 방에 놀러와주셔서 고맙습니다.
          </p>
        </InfoBox>
      </MyHightCircle>
      <ArrowDown className="fa-solid fa-angles-down second"></ArrowDown>
    </>
  );
});

const ArrowDown = styled.i`
  position: absolute;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 4rem;
  color: #f1a3af;

  animation: ${scrollPlz2} 3s linear infinite alternate;
`;

const Markers = styled.span`
  background: #b69df692;
  padding-left: 0.3rem;
  display: inline-block;
  border-radius: 0.5rem;
  padding: 0.5rem;

  &:nth-of-type(2) {
    background: #e99ec4;
  }
`;

const InfoBox = styled.div`
  font-family: 'GowunDodum-Regular';
  line-height: 2rem;
  -webkit-transform: translate(-8rem, 4rem);
  transform: translate(-8rem, 4rem);
  padding: 2rem;

  &::before {
    font-size: 2rem;
    content: '\f10d';
    color: #b15a97;
    position: absolute;
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    transform: translate(-0.5rem);
  }

  p {
    display: inline-block;
    font-size: 1.8rem;
    letter-spacing: 0.3rem;
    margin: 0.5rem;
  }
`;

const MyPicture = styled.div`
  animation: ${slame} 2s linear infinite reverse;
  width: 40rem;
  height: 40rem;
  background-image: url(${PortfolioImage});
  background-size: 130%;
  background-position: calc(5%);

  box-shadow: -0.5rem 1.5rem 4rem rgba(164, 139, 139, 0.337);
`;

const MyHightCircle = styled.div<{ active: boolean }>`
  @media (max-width: 768px) {
    width: 70rem;
  }

  opacity: ${({ active }) => (active ? 1 : 0)};
  transform: ${({ active }) => (active ? 'translate(4rem, -15rem)' : 'translate(10rem, -15rem)')};
  position: absolute;
  width: 50rem;
  height: 50rem;
  border-radius: 0.5rem;
  display: flex;
  padding: 1rem;
  color: #4e4846;
  transition: 1s;
  letter-spacing: 0.3rem;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 200;
`;
