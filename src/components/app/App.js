/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Welcome from '../welcome/Welcome';
import Login from '../Authentication/Login/Login';
import Register from '../Authentication/register/Register';
import LandingPage from '../landingPage/LandingPage';
import { withFirebase } from '../Firebase';
import Actions from '../Authentication/redux';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = ({ auth, history, setUser, user }) => {
  useEffect(() => {
    const listener = auth.onAuthStateChanged(updatedUser => {
      setUser(updatedUser);
      history.push('/');
    });
    return () => {
      listener();
    };
  }, []);
  return (
    <Wrapper>
      <Header />
      <Content>
        <Route path="/" exact component={user ? LandingPage : Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/landingPage" component={LandingPage} />
      </Content>
    </Wrapper>
  );
};

App.propTypes = {
  auth: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

const mapDispatchToProps = {
  setUser: Actions.setUser,
};

export default withFirebase(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(App)
  )
);
