import { useEffect, useRef, useState } from 'react';
import { calcDashOffset } from '../utils/calcDashOffset';

export function useScrollingPath() {
  const layoutRef = useRef<HTMLDivElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const [strokeDashOffset, setStrokeDashOffset] = useState(0);
  const [strokeDashArray, setStrokeDashArray] = useState(0);

  useEffect(() => {
    setScrollY(window.scrollY);

    if (!svgPathRef.current || !layoutRef.current) return;

    const pathLength = svgPathRef.current?.getTotalLength();

    setStrokeDashArray(pathLength || 0);
    setStrokeDashOffset(calcDashOffset(window.innerHeight * 0.8, layoutRef.current, pathLength));

    // svgPathRef.current.style.strokeDasharray = pathLength?.toString() || '0';
    // svgPathRef.current.style.strokeDashoffset = calcDashOffset(
    //   window.innerHeight * 0.8,
    //   layoutRef.current,
    //   pathLength,
    // ).toString();

    const scrollingPath = () => {
      if (!svgPathRef.current || !layoutRef.current) return;
      const scrollYY = window.scrollY + window.innerHeight * 0.8;
      const dashOffset = calcDashOffset(scrollYY, layoutRef.current!, pathLength);

      setStrokeDashOffset(dashOffset);
      // svgPathRef.current.style.strokeDashoffset = dashOffset.toString();
    };

    window.addEventListener('scroll', scrollingPath);

    return () => {
      window.removeEventListener('scroll', scrollingPath);
    };
  }, [scrollY]);

  return { layoutRef, svgPathRef, strokeDashOffset, strokeDashArray };
}
