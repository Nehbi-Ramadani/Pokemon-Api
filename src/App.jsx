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

//Wir importieren hier unser Globalen-Context (FetchContext)

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [showMenue, setShowMenue] = useState(false);

  //Dieses UseState dient dazu unserem FetchContext ein Getter&Setter-Objekt mitzugeben, um Komponenten übergreifend (global) Änderungen durchführen zu können.
  const [pokemonAPPinfo, setPokemonInfo] = useState([]);

  return (
    <>
      {/* Dem FetchContext.Provider übergeben wir das UseState als Objekt! */}
      <ShowMenueContext.Provider value={{ showMenue, setShowMenue }}>
        <DarkmodeContext.Provider value={{ darkmode, setDarkmode }}>
          <FetchContext.Provider value={{ pokemonAPPinfo, setPokemonInfo }}>
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
