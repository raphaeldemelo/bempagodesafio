import React from 'react';

import Perfil from '../../assets/perfil.jpg';
import {
  Container,
  Detalhes,
  AreaImagem,
  Imagem,
  Texto,
  Titulo,
  AreaTexto
} from './styles';

import './styles.css';

export default function Created() {
  return (
    <div className="container">
      <div className="user-detail">
        <div className="image">
          <img src={Perfil} />
        </div>

        <div>
          <p>Criado por</p>
          <p>@raphaeldemelo</p>
        </div>
        
      </div>

    </div>
  );
}