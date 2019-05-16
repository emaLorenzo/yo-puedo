import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withFirebase } from '../../Firebase';
import Actions from '../redux';

const Wrapper = styled.section`
  width: 300px;
  height: 300px;
  display: flex;
  border: 1px solid grey;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 3px;
  padding: 20px;
`;
const Btn = styled(Button, Link)`
  width: 120px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
const LinkTo = styled(Link)`
  text-decoration: none;
  color: white;
  width: 120px;
`;

const Login = ({ auth, signin, signinLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return signinLoading ? (
    <CircularProgress color="secondary" />
  ) : (
    <Wrapper>
      <React.Fragment>
        <h1>Login</h1>
        <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Container>
          <LinkTo to="/">
            <Btn variant="contained" color="primary">
              Back
            </Btn>
          </LinkTo>
          <Btn variant="contained" color="secondary" onClick={() => signin(auth, email, password)}>
            Login
          </Btn>
        </Container>
      </React.Fragment>
    </Wrapper>
  );
};

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  signin: PropTypes.func.isRequired,
  signinLoading: PropTypes.bool,
};

// the same of user.auth.state
const mapStateToProps = ({ auth: { signinLoading } }) => ({
  signinLoading,
});

const mapDispatchToProps = {
  signin: Actions.signin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFirebase(Login));
