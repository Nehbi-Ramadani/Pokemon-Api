import "./Pokedex.scss";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { FetchContext, DarkmodeContext } from "../../Context/Context";
import { useContext } from "react";
const Pokedex = () => {
  const pokemonInfo = useContext(FetchContext);
  const darkmodeToggle = useContext(DarkmodeContext);
  console.log(pokemonInfo);

  return (
    <>
      <div className={`pokedex__wrapper smart ${darkmodeToggle.darkmode ? "darkmode" : ""}`}>
          <SearchBar />
        <main className="pokedex-main__wrapper">
          <section>
            {pokemonInfo.fetchedData?.map((singlePokemonData) => {
              return (
                <article key={singlePokemonData.id}>
                  <h2>{singlePokemonData.name}</h2>
                  <img src={singlePokemonData.sprites.back_default} alt="" />
                  <p>
                    {"Base Experience: " + singlePokemonData.base_experience}
                  </p>
                  <p>{"Weight: " + singlePokemonData.weight}</p>
                </article>
              );
            })}
          </section>
        </main>
      </div>
    </>
  );
};

export default Pokedex;
