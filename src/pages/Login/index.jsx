import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';

import Input from '../../components/Input';

import whiteLogoImg from '../../assets/white-logo.png';

import api from '../../services/api';

import './styles.scss';

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    setErrorMessage('');

    api
      .post('auth/sign-in', { email, password })
      .then(response => {
        const { data, headers } = response;

        login(data, headers.authorization, headers['refresh-token']);
        setEmail('');
        setPassword('');

        history.push('/books');
      })
      .catch(err => {
        setErrorMessage(err.response.data.errors.message);
      });
  }

  return (
    <div className="login-container">
      <section className="login-content">
        <h1>
          <img src={whiteLogoImg} alt="Logo" /> Books
        </h1>

        <form onSubmit={handleSubmit}>
          <Input
            name="email"
            type="text"
            label="E-mail"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          >
            <button type="submit">Entrar</button>
          </Input>
        </form>
        {!!errorMessage && (
          <div className="error-container">
            <span>{errorMessage}</span>
          </div>
        )}
      </section>
    </div>
  );
}
