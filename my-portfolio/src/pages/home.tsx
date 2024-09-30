import { Door } from '@/components/Door';
import Layout from '@/components/Layout';
import SvgGraphic from '@/components/SvgGraphic';
import { useEffect, useRef } from 'react';

const calcDashOffset = (scrollY: number, element: HTMLElement, length: number) => {
  if (!element) return 0;
  const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
  const myValue = length - length * ratio;
  return Math.max(0, Math.min(myValue, length));
};

const Home = () => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);
  // 스크롤 할때마다 stroke-dashoffset을 계산하여 path를 그리는 효과를 준다.

  useEffect(() => {
    if (!svgPathRef.current || !layoutRef.current) return;

    const pathLength = svgPathRef.current?.getTotalLength();

    svgPathRef.current.setAttribute('stroke-dasharray', pathLength.toString());
    svgPathRef.current.setAttribute(
      'stroke-dashoffset',
      calcDashOffset(window.innerHeight * 0.8, layoutRef.current, pathLength).toString(),
    );

    const scrollingPath = () => {
      const scrollYY = window.scrollY + window.innerHeight * 0.8;
      const dashOffset = calcDashOffset(scrollYY, layoutRef.current!, pathLength);
      svgPathRef.current?.setAttribute('stroke-dashoffset', dashOffset.toString());
    };

    window.addEventListener('scroll', scrollingPath);

    return () => {
      window.removeEventListener('scroll', scrollingPath);
    };
  }, []);

  return (
    <Layout ref={layoutRef}>
      <SvgGraphic ref={svgPathRef} />
      <Door />
    </Layout>
  );
};

export default Home;
