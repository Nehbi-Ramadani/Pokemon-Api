import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Pokedex from "./Pages/Pokedex/Pokedex";
import PokemonCard from "./Pages/PokemonCard/PokemonCard";
import { useState } from "react";
import { FetchContext, DarkmodeContext } from "./Context/Context";
import DataFetch from "./data/DataFetch";
function App() {
  const [fetchedData, setfetchedData] = useState([]);
  const [darkmode, setDarkmode] = useState(false)

  return (
    <>
    <DarkmodeContext.Provider value={{ darkmode, setDarkmode }}>
      <FetchContext.Provider value={{ fetchedData, setfetchedData }}>
        <DataFetch />
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/PokemonCard/:pokemonId" element={<PokemonCard/>} />
        </Routes>
      </FetchContext.Provider>
    </DarkmodeContext.Provider>
    </>
  );
}

export default App;
