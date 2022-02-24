import React from 'react';
import Cadastro from './pages/cadastro';
import Lista from './pages/lista';
import {Routes, Route, Link} from 'react-router-dom';


 const App = () => {
  return (
    <>
     <Routes>
      <Route path='./' element={<Cadastro/>} />
      <Route path='/lista' element={<Lista/>} />
     </Routes>
     <header>
       <nav>
       <Link to='/'>Cadastro</Link>
       </nav>
     </header>
    
    </>
  )
}


export default App;
