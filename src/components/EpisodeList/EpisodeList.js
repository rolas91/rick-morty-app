import React, { useContext } from "react";
import EpisodeContext from "../../context/Episode/EpisodeContext";
import { Container, Loading } from "./style";
import Card from "../Card/Card";
const EpisodeList = () => {
  const { characters } = useContext(EpisodeContext);

  return (
    <Container>
      {characters ? (
        characters.map((character) => {
          return (
            <Card
              key={character.id}
              image={character.image}
              name={character.name}
            ></Card>
          );
        })
      ) : (
        <Loading>Cargando</Loading>
      )}
    </Container>
  );
};

export default EpisodeList;
