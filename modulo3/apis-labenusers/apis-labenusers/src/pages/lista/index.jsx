import React from 'react';
import {Link} from 'react-router-dom';

 const Lista = () => {
  return (
    <>
      <Link to='/'><button>Trocar de tela</button></Link>
     <li>
        <ul>

        </ul>
     </li>
     <hr />
     <p>Procurar usuário</p>
     <input placeholder='Nome exato para busca'></input>
     <button>Salvar edição</button>
    </>
  )
}

export default Lista;
