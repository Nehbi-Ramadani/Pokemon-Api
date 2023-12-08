import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Pokedex from "./Pages/Pokedex/Pokedex";
import PokemonCard from "./Pages/PokemonCard/PokemonCard";
import { useState } from "react";
import { FetchContext } from "./Context/Context";
import DataFetch from "./data/DataFetch";

//Wir importieren hier unser Globalen-Context (FetchContext)

function App() {
  //Dieses UseState dient dazu unserem FetchContext ein Getter&Setter-Objekt mitzugeben, um Komponenten übergreifend (global) Änderungen durchführen zu können.
  const [pokemonAPPinfo, setPokemonInfo] = useState([]);

  return (
    <>
      {/* Dem FetchContext.Provider übergeben wir das UseState als Objekt! */}
      <FetchContext.Provider value={{ pokemonAPPinfo, setPokemonInfo }}>
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
