import { GET_EPISODES, GET_CHARACTER } from "../types";

const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_EPISODES:
      return {
        ...state,
        episodes: payload,
      };
    case GET_CHARACTER:
      return {
        ...state,
        characters: payload,
      };
    default:
      return state;
  }
};

export default reducer;
