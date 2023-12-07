import { useEffect, useContext } from "react";
import { FetchContext } from "../Context/Context";

const DataFetch = () => {
  const pokeInfo = useContext(FetchContext);

  useEffect(() => {
    const infoArray = [];
    for (let index = 1; index < 152; index++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((res) => res.json())
        .then((json) => {
          infoArray.push(json);
          pokeInfo.setfetchedData(infoArray);
        });
    }
  }, []);
};

export default DataFetch;
