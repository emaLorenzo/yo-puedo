import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';
import Actions from '../Authentication/redux';

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

function LandingPage({ firebase, signout }) {
  return (
    <Wrapper>
      <h2>Hi {firebase.auth.currentUser && firebase.auth.currentUser.displayName}</h2>
      <h1>You are loggued in.</h1>
      <LinkTo to="/">
        <Btn variant="contained" color="secondary" onClick={() => signout(firebase)}>
          Logout
        </Btn>
      </LinkTo>
    </Wrapper>
  );
}

const mapDispatchToProps = {
  signout: Actions.signout,
};

export default connect(
  null,
  mapDispatchToProps
)(withFirebase(LandingPage));
