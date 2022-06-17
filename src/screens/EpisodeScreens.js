import React, { useEffect, useContext } from "react";
import EpisodeContext from "../context/Episode/EpisodeContext";
import { Container, Title } from "./style";
import EpisodeList from "../components/EpisodeList/EpisodeList";
import Select from "../components/Select/Select";
const EpisodeScreens = () => {
  const { episodes, getEpisodes, characters } = useContext(EpisodeContext);
  useEffect(() => {
    getEpisodes();
  }, []);
  return (
    <Container>
      <Title>Episodios</Title>
      <Select data={episodes} />
      <EpisodeList />
    </Container>
  );
};

export default EpisodeScreens;
