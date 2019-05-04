import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header';
import Welcome from '../welcome/Welcome';
import Login from '../Authentication/Login/Login';
import Register from '../Authentication/Register/Register';
import LandingPage from '../landingPage/LandingPage';
import { withFirebase } from '../Firebase';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  width: 100%;
`;

const App = ({ firebase }) => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Content>
          <Route path="/" exact component={firebase.auth.currentUser ? Welcome : LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/landingPage" component={LandingPage} />
        </Content>
      </Wrapper>
    </BrowserRouter>
  );
};

export default withFirebase(App);
