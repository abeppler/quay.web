import React from 'react';

import './App.css';
import Menu from './menu';
import AreaCliente from './area-cliente/index';
import AreaClienteForm from './area-cliente/form';
import AreaClienteFormBody from './area-cliente/form.body';
import AreaCadastro from './area-cliente/acesso-cadastro';

import SeloOrganico from './assets/images/selo-produto-organico.png';

function App() {
  return (

    <div className="App">
      <Menu />

      <div className="App-header"></div>

      <AreaCliente>
        <AreaClienteForm>
          <AreaClienteFormBody />
        </AreaClienteForm>
      </AreaCliente>

      <div className="mensagem-central"></div>
      <div className="selo-produto-organico">
        <img height='80px' width='170px' src={SeloOrganico} />
      </div>

      <AreaCadastro />


    </div>
  );
}

export default App;
