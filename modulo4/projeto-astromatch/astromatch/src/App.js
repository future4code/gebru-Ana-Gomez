import React from "react";
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/tindercards/TinderCards";
import Matches from './components/Matches';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      
        <Routes>
          <Route path="/matches" element={<Matches />}>
          </Route>
          <Route path="/" element={<TinderCards />}>
          </Route>
        </Routes>
      
    </div>
  );
}

export default App;
