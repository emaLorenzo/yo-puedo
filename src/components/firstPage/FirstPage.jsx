import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core/';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../firebase';

const Wrapper = styled.section`
  width: 300px;
  display: flex;
  border: 1px solid grey;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 3px;
`;
const Btn = styled(Button)`
  width: 100%;
`;
const LinkTo = styled(Link)`
  text-decoration: none;
  color: white;
  width: 100%;
`;

function FirstPage(props) {
  if (!firebase.getCurrentUserName()) {
    // not loggued in
    props.history.replace('/login');
    return null;
  }

  return (
    <Wrapper>
      <h2>Hi {firebase.getCurrentUserName()}</h2>
      <h1>You are loggued in.</h1>
      <LinkTo to="/">
        <Btn variant="contained" color="secondary" onClick={logout}>
          Logout
        </Btn>
      </LinkTo>
    </Wrapper>
  );

  async function logout() {
    await firebase.logout();
    props.history.push('/');
  }
}
export default withRouter(FirstPage);
