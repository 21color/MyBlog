interface CalcDashOffset {
  (scrollY: number, element: HTMLElement, length: number): number;
}

export const calcDashOffset: CalcDashOffset = (scrollY, element, length) => {
  if (!element) return 0;
  const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
  const myValue = length - length * ratio;
  return Math.max(0, Math.min(myValue, length));
};
