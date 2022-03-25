import React from "react";
import "./App.css";
import Header from "./components/Header";
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
  
      {/* <Router>
        <Switch>
          <Route path="/matches">
            <p>Lista de Matches</p>
          </Route>
          <Route path="/">
            <p>Card Aqui</p>
          </Route>
        </Switch>
  </Router> */}
    </div>
  );
}

export default App;
