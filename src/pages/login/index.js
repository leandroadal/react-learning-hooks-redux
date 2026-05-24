import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';
import { useDispatch } from 'react-redux';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(dispatch(exampleActions.clicaBotaoRequest()));
  }
  return (
    <Container>
      <Title>
        Login
        <small>oi</small>
      </Title>
      <Paragrafo>Lorem</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
