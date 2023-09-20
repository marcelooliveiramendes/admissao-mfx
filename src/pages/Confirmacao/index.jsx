import React from 'react';
import checked from '../../img/checked.gif'
import './Confirmacao.scss'
import { Link } from 'react-router-dom';

function Confirmacao() {
  return(
    <div id='confirmacaoContainer'>
        <img src={checked} alt="" />
        <h2>A solicitação foi enviada com sucesso!</h2>

        <Link to='/' id="btnVoltarConfirmacao">
            <button>Voltar ao início</button>
        </Link>
    </div>
  );
}

export default Confirmacao;