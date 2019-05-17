import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';

const Wrapper = styled.section`
  width: 800px;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 3px;
`;
const ButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Btn = styled(Button)`
  width: 256px;
  height: 64px;
  font-size: 20px !important;
  border-radius: 400px !important;
  border: 3px solid white !important;
  background: transparent !important;

  &:hover {
    background: white !important;
    color: black;
  }
`;
const LinkTo = styled(Link)`
  text-decoration: none;
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 90px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  word-spacing: 50px;
  color: white;
`;

// para el banner agregar background-color: rgba(0, 0, 0, .25); para que sea gris

const Welcome = () => {
  return (
    <Wrapper>
      <Title>MAKE IT REAL</Title>
      <ButtonsContainer>
        <LinkTo to="/login">
          <Btn variant="contained" color="secondary">
            Votar
          </Btn>
        </LinkTo>
        <LinkTo to="/register">
          <Btn variant="contained" color="secondary">
            Entrenar
          </Btn>
        </LinkTo>
      </ButtonsContainer>
    </Wrapper>
  );
};
export default withRouter(withFirebase(Welcome));
