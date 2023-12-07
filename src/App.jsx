import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Pokedex from "./Pages/Pokedex/Pokedex";
import PokemonCard from "./Pages/PokemonCard/PokemonCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemoncard/:id" element={<PokemonCard />} />
      </Routes>
    </>
  );
}

export default App;
