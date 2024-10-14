import { Door } from '@/components/Door';
import { Intro } from '@/components/Intro';
import { Introduce } from '@/components/Introduce';
import Layout from '@/components/Layout';
import { MyCircleSection } from '@/components/MyCircle';
import { MyFlowerPot } from '@/components/MyFlowerPot';
import { MySkills } from '@/components/MySkills';
import SvgGraphic from '@/components/SvgGraphic';
import { useActiveSection } from '@/shared/hooks/useActiveSection';
import { useScrollingPath } from '@/shared/hooks/useScrollingPath';
import styled from '@emotion/styled';
import React from 'react';

const Home = () => {
  const { layoutRef, svgPathRef, strokeDashArray, strokeDashOffset } = useScrollingPath();
  const { myCircleRefs, sectionRefs, showMyCircle, showSection } = useActiveSection();

  // 공통 로직을 처리하는 함수
  const renderComponentWithRef = (
    Component: React.ElementType,
    ref: React.MutableRefObject<HTMLDivElement[]>,
    index: number,
    active: boolean,
  ) => {
    return (
      <Component active={active} ref={(ele: HTMLDivElement) => ele && (ref.current[index] = ele)} />
    );
  };
  return (
    <Layout ref={layoutRef}>
      <SvgGraphic
        strokeDashArray={strokeDashArray}
        strokeDashOffset={strokeDashOffset}
        ref={svgPathRef}
      />
      <Door />
      <IntroduceContainer>
        {renderComponentWithRef(Introduce, myCircleRefs, 0, showMyCircle[0].show)}
        {renderComponentWithRef(MyCircleSection, myCircleRefs, 1, showMyCircle[1].show)}
        {renderComponentWithRef(MyFlowerPot, myCircleRefs, 2, showMyCircle[2].show)}
      </IntroduceContainer>
      {renderComponentWithRef(Intro, sectionRefs, 0, showSection[0].show)}
      {renderComponentWithRef(MySkills, sectionRefs, 1, showSection[1].show)}
    </Layout>
  );
};

export default Home;

const IntroduceContainer = styled.div`
  width: 100%;
  height: 80rem;
  display: flex;
  padding-top: 5rem;
  padding-bottom: 10rem;

  align-items: center;

  justify-content: center;
`;
