import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GeneralDiv = styled.div`
  background-image: url(https://baixarpapeldeparede.com/web/wallpapers/wallpaper-hd-espaco-26/1280x720.jpg);
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const Button = styled.button`
  padding: 5px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bolder;
  margin-right: 40px;
  margin-top: 100px;
  margin-bottom: 70px;
  &&:hover{
    box-shadow: 2px 2px #b7d7e8;
    background-color: #1f75fe;
    color: black;
  }
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
  text-shadow: black 0.1em 0.1em 0.2em;
`;


function ApplicationFormPage() {
  const navigate = useNavigate();

  const goToListTripPage = () => {
    navigate("/trips/list");
  };

  return (
    <GeneralDiv>
      <StyledH2>Inscreva-se em uma viagem!</StyledH2>
    
      <Button onClick={goToListTripPage}>Voltar</Button>
    </GeneralDiv>
  );
}

export default ApplicationFormPage;
