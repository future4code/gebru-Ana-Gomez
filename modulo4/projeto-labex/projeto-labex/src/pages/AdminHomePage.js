import axios from "axios";
import React, { useEffect } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";

function AdminHomePage() {


  useProtectedPage();

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
  return (
    <div>
      <button>Criar Viagem</button>
      <button>Voltar</button>
      <button>Logout</button>
    </div>
  );
}

export default AdminHomePage;
