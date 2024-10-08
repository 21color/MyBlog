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

const Home = () => {
  const { layoutRef, svgPathRef, strokeDashArray, strokeDashOffset } = useScrollingPath();
  const { myCircleRefs, sectionRefs, bigRestRoomRef, showBigRestRoom, showMyCircle, showSection } =
    useActiveSection();

  // 스크롤 할때마다 stroke-dashoffset을 계산하여 path를 그리는 효과를 준다.

  return (
    <Layout ref={layoutRef}>
      <SvgGraphic
        strokeDashArray={strokeDashArray}
        strokeDashOffset={strokeDashOffset}
        ref={svgPathRef}
      />
      <Door />
      <IntroduceContainer>
        <Introduce
          active={showMyCircle[0].show}
          ref={(ele) => (myCircleRefs.current[0] = ele as HTMLDivElement)}
        />
        <MyCircleSection
          active={showMyCircle[1].show}
          ref={(ele) => (myCircleRefs.current[1] = ele as HTMLDivElement)}
        />
        <MyFlowerPot
          active={showMyCircle[2].show}
          ref={(ele) => (myCircleRefs.current[2] = ele as HTMLDivElement)}
        />
      </IntroduceContainer>
      <Intro
        active={showSection[0].show}
        ref={(ele) => (sectionRefs.current[0] = ele as HTMLDivElement)}
      />
      <MySkills
        active={showSection[1].show}
        ref={(ele) => (sectionRefs.current[1] = ele as HTMLDivElement)}
      />
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
