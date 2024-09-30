import { Global } from '@emotion/react';
import Home from './pages/home';
import { globalStyle } from './styles/globalStyle';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Home />
    </>
  );
}

export default App;
