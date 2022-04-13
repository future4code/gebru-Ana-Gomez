import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GeneralDiv = styled.div`
  background-image: url(https://cdn.pixabay.com/photo/2016/07/01/09/05/space-1490668_1280.png);
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
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

const ListTripContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4040a1;
  border-radius: 50px;
  margin-top: 20px;
  margin-left: 250px;
  flex-direction: column;
  padding: 15px;
  width: 60vw;
  box-shadow: 10px 10px #736CED;
  &&:hover p{
    color: #D5C7BC;
  }
`;

const StyledH3 = styled.h3`
 color: #783F8E;
 &&:hover{
   color: #6F9CEB;
 }
`

function ListTripPage() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const goToApplicationFormPage = () => {
    navigate("/trips/application");
  };
  const [trips, setTrips] = useState([]);

  const getTrips = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ana-gomez-gebru/trips";
    axios
      .get(URL)
      .then((res) => {
        setTrips(res.data.trips);
        console.log(res.data);
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
      <ListTripContainer>
        <StyledH3 key={trip.id}>Viagem: {trip.name}</StyledH3>
        <p>Data: {trip.date}</p>
        <p>Duração em dias: {trip.durationInDays}</p>
        <p>Descrição: {trip.description}</p>
      </ListTripContainer>
    );
  });

  return (
    <GeneralDiv>
      <StyledH2>Lista de Viagens Disponíveis</StyledH2>
      {listTrips}
      <Button onClick={goToHomePage}>Voltar</Button>
      <Button onClick={goToApplicationFormPage}>Inscreva-se</Button>
    </GeneralDiv>
  );
}

export default ListTripPage;
