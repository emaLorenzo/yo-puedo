import React from 'react';
import styled from 'styled-components';
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core/';
import { Link, withRouter } from 'react-router-dom';

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

const Header = () => {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Title variant="h6" color="inherit">
            Google
          </Title>
          <LinkTo to="/login">
            <Button color="inherit">Login</Button>
          </LinkTo>
          <LinkTo to="/register">
            <Button color="inherit">Register</Button>
          </LinkTo>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default withRouter(Header);
