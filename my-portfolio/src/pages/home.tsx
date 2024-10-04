import { Door } from '@/components/Door';
import { Introduce } from '@/components/Introduce';
import Layout from '@/components/Layout';
import { MyCircleSection } from '@/components/MyCircle';
import { MyFlowerPot } from '@/components/MyFlowerPot';
import SvgGraphic from '@/components/SvgGraphic';
import { useActiveSection } from '@/entries/hooks/useActiveSection';
import { calcDashOffset } from '@/entries/utils/calcDashOffset';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);

  const [scrollY, setScrollY] = useState(0);
  const { myCircleRefs, sectionRefs, bigRestRoomRef, showBigRestRoom, showMyCircle, showSection } =
    useActiveSection();

  // 스크롤 할때마다 stroke-dashoffset을 계산하여 path를 그리는 효과를 준다.

  useEffect(() => {
    setScrollY(window.scrollY);

    if (!svgPathRef.current || !layoutRef.current) return;

    const pathLength = svgPathRef.current?.getTotalLength();

    svgPathRef.current.style.strokeDasharray = pathLength?.toString() || '0';
    svgPathRef.current.style.strokeDashoffset = calcDashOffset(
      window.innerHeight * 0.8,
      layoutRef.current,
      pathLength,
    ).toString();

    const scrollingPath = () => {
      if (!svgPathRef.current || !layoutRef.current) return;
      const scrollYY = window.scrollY + window.innerHeight * 0.8;
      const dashOffset = calcDashOffset(scrollYY, layoutRef.current!, pathLength);
      svgPathRef.current.style.strokeDashoffset = dashOffset.toString();
    };

    window.addEventListener('scroll', scrollingPath);

    return () => {
      window.removeEventListener('scroll', scrollingPath);
    };
  }, [scrollY]);

  return (
    <Layout ref={layoutRef}>
      <SvgGraphic ref={svgPathRef} />
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
