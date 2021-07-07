import React from "react"
import Input from '../../components/Input';

import './styles.css';

export default function Login() {
  return (
    <div className="container">
      <h1>
        <strong>ioasys</strong> Books
      </h1>

      <Input name="email" type="text" />
      <Input name="password" type="password" />
    </div>
  )
}
