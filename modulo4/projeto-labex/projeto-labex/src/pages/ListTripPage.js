import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const GeneralDiv = styled.div`
  background-image: url(https://olhardigital.com.br/wp-content/uploads/2020/12/espaco-sideral-viktorovpro-shutterstock.jpg);
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;
const Button = styled.button`
  padding: 5px;
  font-size: 15px;
  font-family: "PT Sans", sans-serif;
  border: none;
  border-radius: 10px;
  background-color: white;
  color: blue;
  cursor: pointer;
`;

const StyledH2 = styled.h2`
  font: 500 3em/1 "ST Sans", sans-serif;
  padding: 50px;
  display: flex;
  justify-content: center;
  text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
  background-color: white;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function ListTripPage() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <GeneralDiv>
      <StyledH2>Lista de Viagens Disponíveis</StyledH2>
      <Button onClick={goToHomePage}>Voltar</Button>
      <button>Inscreva-se</button>
      <br />
    </GeneralDiv>
  );
}

export default ListTripPage;
