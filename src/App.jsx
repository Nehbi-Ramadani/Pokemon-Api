import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Pokedex from "./Pages/Pokedex/Pokedex";
import PokemonCard from "./Pages/PokemonCard/PokemonCard";
import { useState } from "react";
import { FetchContext } from "./Context/Context";
import DataFetch from "./data/DataFetch";
function App() {
  const [fetchedData, setfetchedData] = useState([]);
  return (
    <>
      <FetchContext.Provider value={{ fetchedData, setfetchedData }}>
        <DataFetch />
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/pokemoncard/:id" element={<PokemonCard />} />
        </Routes>
      </FetchContext.Provider>
    </>
  );
}

export default App;
