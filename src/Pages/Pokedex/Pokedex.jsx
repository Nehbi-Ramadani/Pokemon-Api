import "./Pokedex.scss";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { FetchContext } from "../../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "../PokemonCard/PokemonCard";

const Pokedex = () => {
  const pokemonInfo = useContext(FetchContext);
  console.log(pokemonInfo);

  return (
    <>
      <div className="pokedex__wrapper smart">
        <header className="pokedex-header__wrapper">
          <SearchBar />
          <section>
            {pokemonInfo.fetchedData?.map((singlePokemonData) => {
              return (
                <article key={singlePokemonData.id}>
                  <h2>{singlePokemonData.name}</h2>
                  <img src={singlePokemonData.sprites.back_default} alt="" />
                  <p>
                    {"Base Experience: " + singlePokemonData.base_experience}
                  </p>
                  <Link to={`/PokemonCard/${singlePokemonData.id}`}>Details</Link>
                  <p>{"Weight: " + singlePokemonData.weight}</p>
                </article>
              );
            })}
          </section>
        </header>
        <main className="pokedex-main__wrapper"></main>
      </div>
    </>
  );
};

export default Pokedex;
