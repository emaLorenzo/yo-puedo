import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from '../welcome/Welcome';
import Login from '../Authentication/login/Login';
import Register from '../Authentication/register/Register';
import LandingPage from '../landingPage/LandingPage';
import { withFirebase } from '../Firebase';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = ({ firebase }) => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Route path="/" exact component={firebase.auth.currentUser ? Welcome : LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/landingPage" component={LandingPage} />
      </BrowserRouter>
    </Wrapper>
  );
};

export default withFirebase(App);
