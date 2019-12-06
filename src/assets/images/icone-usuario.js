import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const IconeUsuario = ({}) => {

  const Icon = styled.svg`
    width: 65px;
    height: 65px;
  `;

  return (
    <Icon viewBox="400 200 560 760" x="0px" y="0px" enable-background="new 0 0 960 560">
      <g>
        <path d="M479.5,277.9c2.9,0,5.3-2.5,5.3-5.7c0-3.1-2.4-5.7-5.3-5.7c-2.9,0-5.3,2.5-5.3,5.7C474.2,275.3,476.6,277.9,479.5,277.9z
          M487,282.8c-1.1-0.9-2.6-1.9-4.8-2.4h-5.4c-2.2,0.5-3.7,1.5-4.8,2.4c-1.2,1.1-2,2.7-2,4.4v3.3h19v-3.3
          C489,285.5,488.3,283.9,487,282.8z"/>
      </g>
    </Icon>
  );
}

export default IconeUsuario;