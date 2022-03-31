import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminHomePage from "../pages/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import ListTripPage from "../pages/ListTripPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/trips/list" element={<ListTripPage />} />
          <Route path="/trips/application" element={<ApplicationFormPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/trips/list" element={<AdminHomePage />} />
          <Route path="/admin/trips/create" element={<CreateTripPage />} />
          <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
