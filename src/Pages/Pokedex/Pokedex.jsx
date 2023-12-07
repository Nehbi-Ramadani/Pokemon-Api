import { useEffect, useState } from "react";
import "./Pokedex.scss";
import SearchBar from "../../Components/SearchBar/SearchBar";

const Pokedex = () => {
  const [pokeData, setPokeData] = useState([]);
  const [pokeDetail, setPokeDetail] = useState([]);

  // initial fetch of data and save them in pokeData state
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((fetchedData) => {
        setPokeData(fetchedData.results);

        // pokeData.results.map((pokemon)=> {
        //   fetch(pokemon.)
        // })
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(pokeData);
  // console.log(pokeData[0].name);

  return (
    <>
      <div className="pokedex__wrapper smart">
        <header className="pokedex-header__wrapper">
          <SearchBar />
        </header>
        <main className="pokedex-main__wrapper"></main>
      </div>
    </>
  );
};

export default Pokedex;
