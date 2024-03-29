import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const AreaCliente = ({
  children
}) => {

  const AreaClienteContainerStyled = styled.div`
    position: fixed;
    width: 318px;
    height: 180px;
    position: fixed;
    left: 40px;
    top: 225px;
  `;

  const AreaClienteWrapperStyled = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `;

  const LogoClienteStyled = styled.div`
    border-radius: 25px;
    width: 50px;
    height: 50px;
    background-color: #677647;
    color: white;
    
    z-index: 10;
    position: absolute;
    top:0px;
    left: 140px;
  `;

  const AreaClienteBodyStyled = styled.div`    
    background-color: #839a1a;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 25px;
    left: 0px;
    border-radius: 20px;
    padding-top: 25px;
  `;

  const Icon = styled.svg`
    color: white;
    width: 65px;
    height: 65px;
    fill: white;
  `;

  return (
    <AreaClienteContainerStyled id="area-cliente-container">
      <AreaClienteWrapperStyled id="area-cliente-wrapper">
        <LogoClienteStyled id="logo-cliente">
          <Icon viewBox="150 130 860 560">
            <g>
              <path d="M477.3,272.3c27.1,0,50.6-9.7,69.8-28.9c19.2-19.2,28.9-42.6,28.9-69.8c0-27.1-9.7-50.6-28.9-69.8
                C527.9,84.7,504.4,75,477.3,75c-27.1,0-50.6,9.7-69.8,28.9c-19.2,19.2-28.9,42.6-28.9,69.8c0,27.1,9.7,50.6,28.9,69.8
                C426.7,262.6,450.2,272.3,477.3,272.3L477.3,272.3z M424.5,120.9c14.7-14.7,32-21.9,52.8-21.9c20.8,0,38.1,7.2,52.8,21.9
                c14.7,14.7,21.9,32,21.9,52.8c0,20.8-7.2,38.1-21.9,52.8c-14.7,14.7-32,21.9-52.8,21.9s-38.1-7.2-52.8-21.9
                c-14.7-14.7-21.9-32-21.9-52.8C402.6,152.9,409.8,135.6,424.5,120.9L424.5,120.9z M424.5,120.9"/>
              <path d="M649.9,390c-0.6-8-1.7-16.7-3.3-25.9c-1.7-9.3-3.8-18-6.4-26c-2.7-8.3-6.3-16.4-10.7-24.3c-4.6-8.1-10-15.2-16.1-21
                c-6.4-6.1-14.2-11-23.2-14.6c-9-3.6-18.9-5.4-29.6-5.4c-4.2,0-8.2,1.7-16,6.8c-4.8,3.1-10.4,6.8-16.7,10.8
                c-5.4,3.4-12.6,6.6-21.6,9.5c-8.8,2.8-17.7,4.3-26.4,4.3c-8.8,0-17.7-1.4-26.4-4.3c-9-2.9-16.2-6.1-21.6-9.5
                c-6.2-4-11.8-7.6-16.7-10.8c-7.8-5.1-11.8-6.8-16-6.8c-10.7,0-20.6,1.8-29.6,5.4c-9,3.6-16.8,8.5-23.2,14.6
                c-6.1,5.8-11.5,12.9-16.1,21c-4.4,7.8-8,16-10.7,24.3c-2.6,8-4.7,16.8-6.4,26c-1.7,9.2-2.8,17.9-3.3,25.9c-0.5,7.8-0.8,16-0.8,24.2
                c0,21.4,6.8,38.7,20.2,51.5c13.2,12.6,30.8,19,52.1,19h197.2c21.3,0,38.8-6.4,52.1-19c13.4-12.8,20.2-30.1,20.2-51.5
                C650.7,405.9,650.4,397.8,649.9,390L649.9,390z M614,448.2c-8.7,8.3-20.4,12.4-35.5,12.4H381.3c-15.1,0-26.8-4-35.5-12.4
                c-8.6-8.2-12.8-19.3-12.8-34.1c0-7.7,0.3-15.3,0.8-22.5c0.5-7.1,1.5-15,3-23.3c1.5-8.2,3.4-15.9,5.6-22.9
                c2.1-6.7,5.1-13.3,8.7-19.7c3.5-6.1,7.5-11.3,11.9-15.5c4.1-3.9,9.3-7.2,15.4-9.6c5.7-2.2,12-3.5,18.9-3.6c0.8,0.4,2.3,1.3,4.8,2.9
                c4.9,3.2,10.6,6.9,16.9,10.9c7.1,4.5,16.2,8.6,27.1,12.1c11.2,3.6,22.5,5.4,33.8,5.4c11.3,0,22.7-1.8,33.8-5.4
                c10.9-3.5,20-7.6,27.1-12.1c6.4-4.1,12-7.7,16.9-10.9c2.4-1.6,3.9-2.4,4.8-2.9c6.9,0.2,13.3,1.4,18.9,3.6
                c6.1,2.4,11.3,5.6,15.4,9.6c4.4,4.2,8.4,9.4,11.9,15.5c3.6,6.4,6.6,13,8.7,19.7c2.2,7,4.1,14.7,5.6,22.9c1.5,8.3,2.5,16.2,3,23.3v0
                c0.5,7.2,0.8,14.8,0.8,22.5C626.7,428.9,622.6,440.1,614,448.2L614,448.2z M614,448.2"/>
            </g>
          </Icon>
        </LogoClienteStyled>
        <AreaClienteBodyStyled id="area-cliente-body">
          {children}
        </AreaClienteBodyStyled>
      </AreaClienteWrapperStyled>
    </AreaClienteContainerStyled>
  );
}

export default AreaCliente;