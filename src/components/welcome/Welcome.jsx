import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../Firebase/firebase';

const Wrapper = styled.section`
  width: 300px;
  height: 200px;
  display: flex;
  border: 1px solid grey;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
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

function Welcome(props) {
  return (
    <Wrapper>
      <h1>Welcome to Yo Puedo!</h1>
      <LinkTo to="/login">
        <Btn variant="contained" color="secondary">
          Login
        </Btn>
      </LinkTo>
      <LinkTo to="/register">
        <Btn variant="contained" color="secondary">
          Register
        </Btn>
      </LinkTo>
      <Btn variant="contained" color="secondary" onClick={signInWithGoogle}>
        Login with Google
      </Btn>
    </Wrapper>
  );

  async function signInWithGoogle() {
    try {
      await firebase.googleSignIn();
      props.history.replace('/firstpage');
    } catch (error) {
      alert(error.message);
    }
  }
}
export default withRouter(Welcome);
