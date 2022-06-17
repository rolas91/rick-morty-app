import { useReducer } from "react";
import EpisodeReducer from "./EpisodeReducer";
import EpisodeContext from "./EpisodeContext";
import requestApi from "../../api/requestsApi";

const EpisodeState = (props) => {
  const initialState = {
    episodes: [],
    getCharacters: [],
  };

  const [state, dispatch] = useReducer(EpisodeReducer, initialState);

  const getEpisodes = async () => {
    const res = await requestApi.get("/episode");
    dispatch({
      type: "GET_EPISODES",
      payload: res.data.results,
    });
  };

  const getCharacters = async (characters) => {
    console.log(typeof characters);
    let tamporalArray = new Array();
    let characterArray = new Array();
    if (typeof characters === "string") {
      characterArray = JSON.parse(
        JSON.stringify(characters.replace(/['"]+/g, ""))
      ).split(",");
    } else {
      characterArray = characters;
    }

    for (let url of characterArray) {
      let response = await requestApi.get(`/character/${url.split("/")[5]}`);
      tamporalArray.push(response.data);
    }
    dispatch({
      type: "GET_CHARACTER",
      payload: tamporalArray,
    });
  };

  return (
    <EpisodeContext.Provider
      value={{
        episodes: state.episodes,
        getEpisodes,
        getCharacters,
        characters: state.characters,
      }}
    >
      {props.children}
    </EpisodeContext.Provider>
  );
};

export default EpisodeState;
