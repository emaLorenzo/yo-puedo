import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from '../welcome/Welcome';
import Login from '../login/Login';
import Register from '../register/Register';
import FirstPage from '../firstPage/FirstPage';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/firstpage" component={FirstPage} />
      </BrowserRouter>
    </Wrapper>
  );
}
