import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import TinderCard from "react-tinder-card";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { green, red } from "@material-ui/core/colors";
import CloseIcon from "@material-ui/icons/Close";

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  flex-direction: column;
`;

const StyledImg = styled.img`
  position: relative;
  width: 400px;
  padding: 5px;
  max-width: 85vw;
  height: 50vh;
  border-radius: 20px;
  background-position: center;
  box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3);
  object-fit: contain;
`;

const StyledH3 = styled.h3`
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
`;
const StyledH4 = styled.h4`
  padding: 5px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const TinderCards = (props) => {
  const [peoples, setPeoples] = useState({});

  useEffect(() => {
    getProfileToChoose(props.peoples);
  }, [props.peoples]);

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ana-gomez-gebru/person"
      )
      .then((res) => {
        document.title = `Astromatch`;
        setPeoples(res.data.profile);
      })
      .catch((err) => console.log(err));
  };

  const choosePerson = (choices) => {
    const body = {
      id: peoples.id,
      choice: choices,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ana-gomez-gebru/choose-person",
        body
      )
      .then((res) => {{
        document.title = `Astromatch`;
      }
        getProfileToChoose();
        if (res.data.isMatch === true) {
          alert(`Deu match! rsrs`);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <TinderCard key={peoples.id} preventSwipe={["up", "down"]}>
        <StyledCard>
          <StyledImg src={peoples.photo} />
          <StyledH3>
            {peoples.name && peoples.name}, {peoples.age}
          </StyledH3>
          <StyledH4>{peoples.bio}</StyledH4>
        </StyledCard>
      </TinderCard>
      <CloseIcon
        style={{
          color: "red",
          cursor: "pointer",
          marginLeft: "470px",
          marginTop: "20px",
          border: "2px solid Crimson",
          borderRadius: "10px",
          fontSize: "30px",
          backgroundColor: "white",
          boxShadow: "0px 10px 60px 0px red"
        }}
        onClick={() => choosePerson(false)}
      >
        {" "}
      </CloseIcon>
      <FavoriteIcon
        style={{
          color: "green",
          cursor: "pointer",
          marginLeft: "300px",
          marginTop: "20px",
          border: "2px solid LimeGreen",
          borderRadius: "10px",
          fontSize: "30px",
          backgroundColor: "white",
          boxShadow: "0px 10px 53px 0px green"
        }}
        onClick={() => choosePerson(true)}
      >
        {" "}
      </FavoriteIcon>
    </div>
  );
};

export default TinderCards;
