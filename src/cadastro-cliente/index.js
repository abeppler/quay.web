import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import styled from 'styled-components';

import './style.css';
import { cadastro } from '../service/cliente.service';

function CadastroCliente() {
  const [form, setValues] = useState({
    email: '',
    senha: '',
    senha2: '',
    nome: '',
    datanascimento: '',
    sexo: '',
    cep: '',
    observacao: '',
    indicacaoContato: '',
  });

  const [tipoIndicacaoSelecionado, setIndicacao] = useState();

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const persistirCliente = () => {
    console.log(form);

    cadastro(form);
  };

  const opcoesIndicacaoContato = [
    { label: 'Amigos', value: 0 },
    { label: 'Facebook', value: 1 },
    { label: 'Google', value: 2 },
    { label: 'Panfletos', value: 3 },
    { label: 'Outros', value: 99 },
  ];

  const ButtonSecundary = styled.button`
    height: 40px;
    color: #999;
    background-color: rgba(255, 255, 255, 1);
    border-color: rgba(153, 153, 153, 1);
    border-width: 2px;
    border-style: solid;
    border-radius: 2px;
  `;

  const ButtonPrimary = styled.button`
    height: 40px;
    background-color: rgba(102, 102, 102, 1);
    color: #fff;
  `;

  const handleIndicacaoContato = selecionado => {
    console.log(selecionado);

    setIndicacao(selecionado);
    setValues({
      ...form,
      indicacaoContato: selecionado.value
    });
  }

  return (
    <div className="form-container">
      <div className="title">Cadastro de Cliente</div>
      <div className="subtitle">Preencha suas informações. Essa ficha contém o endereço de entrega e as suas informações para acessar o sistema.</div>
      <div>
        <Row><Col xs={6}><label>E-mail *</label></Col></Row>
        <Row>
          <Col xs={6}>
            <input type="text" id="cliente-email"
              value={form.email} name="email"
              onChange={updateField} />
          </Col>
        </Row>
        <Row>
          <Col xs={6}><label>Crie uma senha *</label></Col>
          <Col xs={6}><label>Repetir Senha *</label></Col>
        </Row>
        <Row>
          <Col>
            <input type="text" id="cliente-senha-1"
              value={form.senha} name="senha"
              onChange={updateField} />
          </Col>
          <Col>
            <input type="text" id="cliente-senha-2"
              value={form.senha2} name="senha2"
              onChange={updateField} />
          </Col>
        </Row>

        <Row><Col><label>Nome Completo *</label></Col></Row>
        <Row>
          <Col>
            <input type="text" id="cliente-nome-completo"
              value={form.nome} name="nome"
              onChange={updateField} />
          </Col>
        </Row>

        <Row>
          <Col><label>Data de Nascimento</label></Col>
          <Col><label>Sexo</label></Col>
        </Row>

        <Row>
          <Col>
            <input type="text" id="cliente-data-nascimento"
              value={form.datanascimento} name="datanascimento"
              onChange={updateField} />
          </Col>
          <Col>
            <input type="radio" id="sexo-masculino"
              name="sexo" value="1"
              checked={form.sexo == "1"}
              onChange={updateField}
            />
            <label htmlFor="1">Masculino</label>
            <input type="radio" id="sexo-feminino"
              name="sexo" value="0"
              onChange={updateField}
              checked={form.sexo == "0"} />
            <label htmlFor="0">Feminino</label>
          </Col>
        </Row>

        <Row>
          <Col><label>CEP</label></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <input type="text" id="cliente-cep"
              value={form.cep} name="cep"
              onChange={updateField} />
          </Col>
          <Col><ButtonSecundary>Não sei meu CEP</ButtonSecundary></Col>
        </Row>

        <Row>
          <Col><label>Como ficou sabendo?</label></Col>
          <Col><label>Observação</label></Col>
        </Row>
        <Row>
          <Col>
            <Select options={opcoesIndicacaoContato}
            value={tipoIndicacaoSelecionado}
            onChange={handleIndicacaoContato}
            />
          </Col>
          <Col>
            <input type="text" id="cliente-observacao"
              value={form.observacao} name="observacao"
              onChange={updateField} />
          </Col>
        </Row>
        <Row>
          <Col>
            Ao clicar em finalizar cadastro, você concorda com a nossa <u>Política de Privacidade</u>.
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonPrimary onClick={() => persistirCliente()}>
              Finalizar Cadastro
            </ButtonPrimary>
            <ButtonSecundary>Cancelar</ButtonSecundary>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CadastroCliente;