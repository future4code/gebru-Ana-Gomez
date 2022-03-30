import React from 'react';
import styled from 'styled-components';

const GeneralDiv = styled.div`
 background-image: url(https://olhardigital.com.br/wp-content/uploads/2020/12/espaco-sideral-viktorovpro-shutterstock.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`
const Button = styled.button`
padding: 5px;
font-size: 15px;
font-family: 'PT Sans', sans-serif;
border: none;
border-radius: 10px;
background-color: white;
color: blue;
`

const StyledH2 = styled.h2`
display: flex;
text-decoration: none;
justify-content: center;
align-items: center;
`

function ListTripPage() {
  return (
    <GeneralDiv>
        <Button>Voltar</Button>
        <button>Inscreva-se</button>
        <br />

        <StyledH2>Lista de Viagens Disponíveis</StyledH2>
    </GeneralDiv>
  )
}

export default ListTripPage