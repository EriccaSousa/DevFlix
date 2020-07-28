import React from 'react';
import { FooterBase } from './styles';

import Img from '../../assets/img/logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Img} alt="DevFilix" height="50px" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura, por Érica Sousa.
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
