import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core/';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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

const Register = ({ auth, history, signup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
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
          variant="contained"
          color="secondary"
          onClick={() => signup(auth, history, email, password)}
        >
          Register
        </Btn>
      </Container>
    </Wrapper>
  );
};

const mapDispatchToProps = {
  signup: Actions.signup,
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withFirebase(Register)));
