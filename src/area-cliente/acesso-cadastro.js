import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AcessoCadastro = ({
}) => {

  const AreaClienteContainerStyled = styled.div`
    position: fixed;
    width: 318px;
    height: 180px;
    position: fixed;
    left: 40px;
    top: 475px;
  `;

  const AreaClienteWrapperStyled = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `;

  const AreaClienteBodyStyled = styled.div`    
    background-color: #354f00;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    border-radius: 20px;
    padding-top: 25px;
  `;

  const AreaClienteLinkStyled = styled(Link)`
    color: #7ae801
  `;

  return (
    <AreaClienteContainerStyled id="area-cadastro-container">
      <AreaClienteWrapperStyled id="area-cadastro-wrapper">
        <AreaClienteBodyStyled id="area-cadastro-body">
          <div style={{color: 'white'}}>
            Não possui uma conta?
          </div>
          <AreaClienteLinkStyled to={"/novo-cliente"}>CADASTRE-SE AQUI</AreaClienteLinkStyled>
        </AreaClienteBodyStyled>
      </AreaClienteWrapperStyled>
    </AreaClienteContainerStyled>
  );
}

export default AcessoCadastro;