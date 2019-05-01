import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 400px;
  height: 400px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 100px;
  height: 70px;
`;

function Login() {
  return (
    <Wrapper>
      <Button>Proba Redux</Button>
    </Wrapper>
  );
}

export default Login;
