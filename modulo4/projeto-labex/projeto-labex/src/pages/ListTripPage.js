import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  font-weight: bolder;
  margin-right: 30px;
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

function ListTripPage() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const [trips, setTrips] = useState("");



  const getTrips = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ana-gomez-gebru/trips";
    axios
      .get(URL)
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getTrips();
  }, []);

  const listTrips = trips.map((trip) => {
      return (
      <div>
        <h3>{trip.name}</h3>
        <p>{trip.description}</p>
      </div>
      );
    });

  return (
    <GeneralDiv>
      <StyledH2>Lista de Viagens Disponíveis</StyledH2>
      <div>{listTrips}</div>

      <Button onClick={goToHomePage}>Voltar</Button>
      <button>Inscreva-se</button>
      <br />
    </GeneralDiv>
  );
}

export default ListTripPage;
