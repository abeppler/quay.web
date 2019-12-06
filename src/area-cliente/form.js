import React from 'react';
import styled from 'styled-components';

const AreaClienteForm = ({
  children
}) => {

  const HeaderStyled = styled.div`
    color: white;
  `;

  const FormStyled = styled.div`
    width: 100%;
    height: 100%;
  `;

  return (
    <div>
      <HeaderStyled>
        Área do Cliente
      </HeaderStyled>
      <FormStyled>
        {children}
      </FormStyled>
    </div>
  );
}

export default AreaClienteForm;