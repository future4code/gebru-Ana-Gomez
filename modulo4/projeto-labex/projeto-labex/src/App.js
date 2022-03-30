import React from "react";
import HomePage from "./pages/HomePage";
import AdminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import ListTripPage from "./pages/ListTripPage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <HomePage />
      <ListTripPage />
    </div>
  );
}

export default App;
