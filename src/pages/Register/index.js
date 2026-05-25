import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register(props) {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const { history } = props;

  const [formData, setFormData] = useState({
    nome: id ? nomeStored : '',
    email: id ? emailStored : '',
    password: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (formData.nome.length < 3 || formData.nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }

    if (!isEmail(formData.email)) {
      formErrors = true;
      toast.error('E-mail inválido.');
    }

    if (
      !id &&
      (formData.password.length < 6 || formData.password.length > 50)
    ) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    dispatch(
      actions.registerRequest({
        nome: formData.nome,
        email: formData.email,
        password: formData.password,
        id,
        history,
      }),
    );
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={formData.nome}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, nome: e.target.value }))
            }
            placeholder="Seu nome"
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="Seu e-mail"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
            placeholder="Sua senha"
          />
        </label>

        <button type="submit">{id ? 'Salvar' : 'Criar conta'}</button>
      </Form>
    </Container>
  );
}

Register.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
