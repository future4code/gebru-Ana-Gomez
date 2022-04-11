import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToTripDetails } from "../routes/coordinator";
import axios from "axios";

const GeneralDiv = styled.div`
  background-image: url(https://i.redd.it/ow6unus1l7c71.jpg);
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const StyledInput = styled.input`
  margin-top: 240px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 16px;
  padding: 0.2em;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  :hover {
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.2);
    text-shadow: none;
  }
`;

const Button = styled.button`
  display: flex;
  margin-top: 100px;
  margin-left: 630px;
  background-color: #0d1821;
  padding: 5px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bolder;
  margin-right: 40px;
  margin-top: 100px;
  margin-bottom: 70px;
  &&:hover {
    box-shadow: 2px 2px #b7d7e8;
    background-color: #1f75fe;
    color: black;
  }
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
      password: password,
    };

    axios
      .post(URL, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToTripDetails(navigate);
      })
      .catch((err) => {
        alert("Usuário não encontrado");
      });
  };
  return (
    <GeneralDiv>
      <StyledInput
        placeholder="E-mail"
        value={email}
        onChange={onChangeEmail}
      />
      <StyledInput
        placeholder="Senha"
        value={password}
        onChange={onChangePassword}
      />
      <Button onClick={onSubmitLogin}>Logar</Button>
      <Button onClick={goToHomePage}>Voltar</Button>
    </GeneralDiv>
  );
}

export default LoginPage;
