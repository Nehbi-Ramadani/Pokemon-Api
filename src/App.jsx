import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Pokedex from "./Pages/Pokedex/Pokedex";
import PokemonCard from "./Pages/PokemonCard/PokemonCard";
import { useState } from "react";
import {
  FetchContext,
  DarkmodeContext,
  ShowMenueContext,
} from "./Context/Context";
import DataFetch from "./data/DataFetch";
function App() {
  const [fetchedData, setfetchedData] = useState([]);
  const [darkmode, setDarkmode] = useState(false);
  const [showMenue, setShowMenue] = useState(false);

  return (
    <>
      <ShowMenueContext.Provider value={{ showMenue, setShowMenue }}>
        <DarkmodeContext.Provider value={{ darkmode, setDarkmode }}>
          <FetchContext.Provider value={{ fetchedData, setfetchedData }}>
            <DataFetch />
            <Routes>
              <Route path="/" element={<Pokedex />} />
              <Route path="/PokemonCard/:pokemonId" element={<PokemonCard />} />
            </Routes>
          </FetchContext.Provider>
        </DarkmodeContext.Provider>
      </ShowMenueContext.Provider>
    </>
  );
}

export default App;
