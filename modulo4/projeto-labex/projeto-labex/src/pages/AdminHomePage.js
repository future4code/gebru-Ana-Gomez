import axios from "axios";
import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const GeneralDiv = styled.div`
  background-image: url(https://ejeamb.com.br/wp-content/uploads/2019/08/planeta-terra_585359906.jpg);
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
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

const Button1 = styled.button`
  padding: 5px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bolder;
  margin-right: 40px;
  margin-left: 20px;
  margin-top: 100px;
  margin-bottom: 70px;
  &&:hover {
    box-shadow: 2px 2px #b7d7e8;
    background-color: #1f75fe;
    color: black;
  }
`;

const Button2 = styled.button`
  padding: 5px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bolder;
  margin-right: 40px;
  margin-left: 20px;
  margin-top: 100px;
  margin-bottom: 70px;
  &&:hover {
    box-shadow: 2px 2px #b7d7e8;
    background-color: #ff0022;
    color: black;
  }
`;

const Button3 = styled.button`
  padding: 5px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bolder;
  margin-right: 40px;
  margin-left: 20px;
  margin-top: 100px;
  margin-bottom: 70px;
  &&:hover {
    box-shadow: 2px 2px #b7d7e8;
    background-color: #fb6107;
    color: black;
  }
`;



function AdminHomePage() {
  const navigate = useNavigate();

  const [listTrips, setListTrips] = useState([]);

  useProtectedPage();

  const logout = () => {
    navigate("/login");
    localStorage.setItem("token", "");
  };

  const goToCreateTrip = () => {
    navigate("/admin/trips/create");
  };

  const goToTripDetail = (id) => {
    navigate(`/admin/trips/${id}`);
  };

  const goToHomePage = () => {
    navigate("/");
  };

  useEffect(() => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ana-gomez-gebru/trip/8PDQXklJMm6Q0eHNZ7ny";
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    axios
      .get(URL, headers)
      .then((res) => {
        console.log(res.data.trip);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const deleteTrip = (id, name) => {
    const token = localStorage.getItem(`token`);
    const axiosConfig = { headers: { auth: token } };
    const confirmDel = window.confirm(
      `Tem certeza que deseja deletar a viagem para ${name}`
    );
    if (confirmDel) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labeX/ana-gomez-gebru/trips/${id}`,
          axiosConfig
        )
        .then((res) => {
          alert(`Viagem deletada!`);
          setListTrips();
        })
        .catch((err) => {
          alert(`Erro ao deletar viagem`);
        });
    }
  };

  const renderedTrips = listTrips.map((trip) => {
    return (
      <ListTripContainer>
        <StyledH3 key={trip.id}>Viagem: {trip.name}</StyledH3>
        <div  onClick={()=> goToTripDetail(trip.id)}></div>
        <buttoon onClick={()=> deleteTrip(trip.id, trip.name)}>X</buttoon>
      </ListTripContainer>
    );
  });

  return (
    <GeneralDiv>
      <StyledH2>Painel de Gerenciamento</StyledH2>
      <Button1 onClick={goToHomePage}>Voltar</Button1>
      <Button3 onClick={goToCreateTrip}>Criar Viagem</Button3>
      <Button2 onClick={logout}>Logout</Button2>
      {renderedTrips}
      
    
    </GeneralDiv>
  );
}

export default AdminHomePage;
