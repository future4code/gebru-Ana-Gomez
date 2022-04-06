import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToTripDetails } from "../routes/coordinator";
import axios from "axios";

const GeneralDiv = styled.div`
  background-image: url(https://olhardigital.com.br/wp-content/uploads/2020/12/espaco-sideral-viktorovpro-shutterstock.jpg);
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const onSubmitLogin = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ana-gomez-gebru/login";
    const body = { 
      email: email, 
      password: password
     };

     axios
     .post(URL, body)
     .then((res) =>{
       localStorage.setItem("token", res.data.token)
       goToTripDetails(navigate);
     })
     .catch((err) =>{
       alert("Usuário não encontrado");
     })
  };
  return (
    <GeneralDiv>
      <div>
        <input placeholder="E-mail" value={email} onChange={onChangeEmail} />
        <input
          placeholder="Senha"
          value={password}
          onChange={onChangePassword}
        />
        <button onClick={onSubmitLogin}>Logar</button>
        <button onClick={goToHomePage}>Voltar</button>
      </div>
    </GeneralDiv>
  );
}

export default LoginPage;
