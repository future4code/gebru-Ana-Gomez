import React from 'react';
import {Link} from 'react-router-dom';

 const Cadastro = () => {
  return (
    <>
     <div>
        <Link to='./lista'><button>Trocar de tela</button></Link>
        <br />
        <input placeholder='Nome'></input>
        <input placeholder='E-mail'></input>
        <button>Criar Usuario</button>
     </div>
    </>
  )
}

export default Cadastro;