import React from "react"
import Input from '../../components/Input';

import './styles.scss';

export default function Login() {
  return (
    <div className="login-container">

      <section className="login-content">
        <h1>
          <strong>ioasys</strong> Books
        </h1>

        <form>
          <Input name="email" type="text" label="E-mail" />
          <Input name="password" type="password" label="Senha">
            <button type="submit">Entrar</button>
          </Input>
        </form>
      </section>
    </div>
  )
}
