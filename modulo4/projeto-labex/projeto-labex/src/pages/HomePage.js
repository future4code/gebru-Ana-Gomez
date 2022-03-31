import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const GeneralStyled = styled.div`
  background-image: url(https://olhardigital.com.br/wp-content/uploads/2020/12/espaco-sideral-viktorovpro-shutterstock.jpg);
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const StyledParagraph = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.5em;
  display: inline-block;
  border: 4px double rgba(255, 255, 255, 0.25);
  border-width: 4px 0;
  padding: 1.5em 0em;
  position: absolute;
  top: 18%;
  left: 50%;
  width: 40em;
  margin: 0 0 0 -20em;
`;

const StyledSpan = styled.span`
  font: 700 4em/1 "Oswald", sans-serif;
  letter-spacing: 0;
  padding: 0.25em 0 0.325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
  background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: aitf 80s linear infinite;
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  @-webkit-keyframes aitf {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;

const Button1 = styled.button`
  margin-right: 30px;
  font-size: 18px;
  padding: 10px 20px;
  background-color: #1e90ff;
  border-radius: 50px;
  color: white;
  border: none;
  cursor: pointer;
  :hover{
    background-color: #1f75fe;
  }
`;
const Button2 = styled.button`
  margin-left: 30px;
  width: 150px;
  font-size: 18px;
  padding: 10px;
  background-color: #ffff;
  border-radius: 50px;
  color: #000000;
  border: none;
  cursor: pointer;
  :hover{
   background-color: #d3d3d3;
  }
`;

function HomePage() {

  const navigate = useNavigate()

  const goToListTripPage = () =>{
    navigate("/trips/list")
  }

  const goToLoginPage = () =>{
    navigate("/login")
  }
  return (
    <GeneralStyled>
      <StyledParagraph>
        Um mundo de possibilidades te aguardam em
        <StyledSpan>LabeX</StyledSpan>
        <br />
        Confira as viagens disponíveis
        <br />
        <br />
        <Button1 onClick={goToListTripPage}>
         Lista de Viagens
        </Button1>
        <Button2 onClick={goToLoginPage}>Login</Button2>
      </StyledParagraph>
    </GeneralStyled>
  );
}

export default HomePage;
