import React, { useEffect } from 'react';
import styled from 'styled-components';

import Login from '../login/Login';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('anda');
  }, []);

  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
}

export default App;
