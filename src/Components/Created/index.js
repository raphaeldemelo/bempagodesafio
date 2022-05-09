import React from 'react';

import Perfil from '../../assets/perfil.jpg';
import './styles.css';

export default function Created() {
  return (
    <div className="container">
      <div className="user-detail">
        <div className="image">
          <img src={Perfil} />
        </div>

        <div className="text">
          <p>Criado por</p>
          <strong>@raphaeldemelo</strong>
        </div>

      </div>

    </div>
  );
}