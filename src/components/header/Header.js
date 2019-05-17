import React from 'react';
import styled from 'styled-components';
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFirebase } from '../Firebase';
import Actions from '../Authentication/redux';

const Container = styled.div`
  height: 64px;
  display: flex;
`;
const Title = styled(Typography)`
  display: flex;
  flex-grow: 1;
`;
const LinkTo = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 40px;
  letter-spacing: 4px;
  font-family: 'Bangers', cursive;
`;
const Btn = styled(Button)`
  border-radius: 400px !important;
  margin: 0 0 0 10px !important;
  font-size: 15px !important;
  letter-spacing: 2px !important;
  font-family: 'Montserrat', sans-serif !important;

  &:hover {
    background: white !important;
    color: black !important;
  }
`;
const Header = ({ auth, user, signout }) => {
  return (
    <Container>
      <AppBar position="static" style={{ background: 'black' }}>
        <Toolbar>
          <Title variant="h6" color="inherit">
            <LinkTo to="/">RAPPERS</LinkTo>
          </Title>
          {user ? (
            <LinkTo to="/login">
              <Btn color="inherit" variant="outlined" onClick={() => signout(auth)}>
                Salir
              </Btn>
            </LinkTo>
          ) : (
            <React.Fragment>
              <LinkTo to="/login">
                <Btn color="inherit">Ingresa</Btn>
              </LinkTo>
              <LinkTo to="/register">
                <Btn color="inherit">Registrate</Btn>
              </LinkTo>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  signout: PropTypes.func.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

const mapDispatchToProps = {
  signout: Actions.signout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFirebase(Header));
