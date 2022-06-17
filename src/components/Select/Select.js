import React, { useEffect, useContext } from "react";
import { Select } from "./style";
import EpisodeContext from "../../context/Episode/EpisodeContext";

export default ({ data }) => {
  const { getCharacters } = useContext(EpisodeContext);
  useEffect(() => {
    if (data.length > 0) {
      getCharacters(data[0].characters);
    }
  }, [data]);
  return (
    <Select
      name="cars"
      id="cars"
      onChange={(e) => getCharacters(e.target.value)}
    >
      {data &&
        data.map((select) => {
          return (
            <option key={select.id} value={select.characters}>
              {select.name}
            </option>
          );
        })}
    </Select>
  );
};
