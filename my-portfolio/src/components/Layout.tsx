import styled from '@emotion/styled';
import { forwardRef, PropsWithChildren } from 'react';

const Layout = forwardRef<HTMLDivElement, PropsWithChildren>(({ children }, ref) => {
  return <LayoutStyle ref={ref}>{children}</LayoutStyle>;
});

export default Layout;

const LayoutStyle = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
