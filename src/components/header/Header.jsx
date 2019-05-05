import React from 'react';
import styled from 'styled-components';
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withFirebase } from '../Firebase';
import Actions from '../Authentication/redux';

const Container = styled.div`
  height: 64px;
  display: flex;
`;
const Title = styled(Typography)`
  display: flex;
  flex-grow: 1;
  font-family: 'Product Sans';
`;
const LinkTo = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Header = ({ auth, user, signout }) => (
  <Container>
    <AppBar position="static">
      <Toolbar>
        <Title variant="h6" color="inherit">
          <LinkTo to="/">Yo Puedo</LinkTo>
        </Title>
        {user ? (
          <LinkTo to="/login">
            <Button color="inherit" onClick={() => signout(auth)}>
              Logout
            </Button>
          </LinkTo>
        ) : (
          <React.Fragment>
            <LinkTo to="/login">
              <Button color="inherit">Login</Button>
            </LinkTo>
            <LinkTo to="/register">
              <Button color="inherit">Register</Button>
            </LinkTo>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  </Container>
);

const mapStateToProps = ({ auth: { user } }) => ({ user });

const mapDispatchToProps = {
  signout: Actions.signout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFirebase(Header));
