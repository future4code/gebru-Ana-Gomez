import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import TinderCard from "react-tinder-card";

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
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
  object-fit: contain;
`;

const Button = styled.button`
  text-decoration: none;
  margin-top: 5px;
  margin-left: 68vh;
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
const TinderCards = () => {
  const [peoples, setPeoples] = useState({});

  const getProfileToChoose = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ana/person`
      )
      .then((res) => {
        document.title = `Astromatch`;
        setPeoples(res.data.profile);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

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
      <Button>X</Button>
      <Button>♥</Button>
    </div>
  );
};

export default TinderCards;
