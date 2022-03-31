import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerGeneral = styled.div`
  width: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 458px;
`;
const ContainerList = styled.div`
  width: 140%;
  min-height: 63vh;
  max-height: 300vh;
  display: flex;
  justify-content: center;
`;

const MatchList = styled.li`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-around;
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 30px;
  padding: 10px;
  border: 2px solid salmon;

  img {
    
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-top: 10px;
    object-fit: cover;
  }

  p {
    font-size: 18px;
    font-weight: bold;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;

const Button = styled.button`
 margin-top: 30px;
 border: none;
 padding: 5px 10px 5px 10px;
 background-color: #FA8072;
 color: #8B0000;
 cursor: pointer;
 :hover{
   border: 1px solid #8B0000;
   border-radius: 10px;
   transition: 0.5s;
 }

 
`

const Matches = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches(props.matches);
  }, [props.matches]);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ana-gomez-gebru/matches"
      )
      .then((res) => setMatches(res.data.matches))
      .catch((err) => console.log(err));
  };

  const clear = () => {
    axios

      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ana-gomez-gebru/clear"
      )
      .then(() => getMatches())

      .catch((err) => console.log(err));
  };

  const showMatches = matches.map((peoples) => {
    return (
      <div>
        <img src={peoples.photo} alt={peoples.name} />
        <p>{peoples.name}</p>
      </div>
    );
  });

  return (
    <div>
      <ContainerGeneral>
        <ContainerList>
          <MatchList>{showMatches}</MatchList>
        </ContainerList>
        <div>
          <Button onClick={clear}>Apagar Matches</Button>
        </div>
      </ContainerGeneral>
    </div>
  );
};

export default Matches;
