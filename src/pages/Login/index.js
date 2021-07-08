import { useState } from "react"
import { useAuth } from "../../hooks/AuthContext";

import Input from '../../components/Input';

import whiteLogoImg from '../../assets/white-logo.png';

import api from '../../services/api';

import './styles.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const { signIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    setErrorMessage('');

    api.post('auth/sign-in', { email, password }).then(response => {
      console.log(response);
      signIn(response.data, response.headers.authorization, response.headers['refresh-token']);
    }).catch(err => {
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
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
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
  )
}
