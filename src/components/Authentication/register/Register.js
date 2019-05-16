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
  height: 400px;
  display: flex;
  border: 1px solid grey;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 3px;
  padding: 20px;
`;
const Btn = styled(Button)`
  width: 120px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LinkTo = styled(Link)`
  text-decoration: none;
  color: white;
  width: 120px;
`;

const Register = ({ auth, signup, signupLoading }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return signupLoading ? (
    <CircularProgress color="secondary" />
  ) : (
    <Wrapper>
      <h1>Register Account</h1>
      <TextField label="Name" value={name} onChange={e => setName(e.target.value)} />
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
        <Btn
          type="submit"
          variant="contained"
          color="secondary"
          onClick={() => signup(auth, email, password)}
        >
          Register
        </Btn>
      </Container>
    </Wrapper>
  );
};

Register.propTypes = {
  auth: PropTypes.object.isRequired,
  signup: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  signupLoading: PropTypes.bool,
};

// the same of user.auth.state
const mapStateToProps = ({ auth: { signupLoading } }) => ({
  signupLoading,
});
const mapDispatchToProps = {
  signup: Actions.signup,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFirebase(Register));
