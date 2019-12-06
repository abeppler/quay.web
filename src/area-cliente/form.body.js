import React, { useState } from 'react';

import {login} from '../service/cliente.service';

function AreaClienteFormBody({

}) {
  const [form, setValues] = useState({
    email: '',
    senha: ''
  });

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const efetuarLogin = e => {
    e.preventDefault();
    login(form);
  };

  return (
    <form onSubmit={efetuarLogin}>
      <label>
        E-Mail:
        <input id='form-email'
          value={form.email}
          name="email"
          onChange={updateField}
        />
      </label>
      <br />
      <label>
        Senha:
        <input id='form-senha'
          value={form.senha}
          name="senha"
          type="password"
          onChange={updateField}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}

export default AreaClienteFormBody;