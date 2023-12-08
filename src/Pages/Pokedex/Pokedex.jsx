import "./Pokedex.scss";
import SearchBar from "../../Components/SearchBar/SearchBar";
import pokeball from "./../../assets/img/Poke_Ball_icon.svg.png";
import TypeFilter from "./../../Components/TypeFilter/TypeFilter";

import { FetchContext, DarkmodeContext } from "../../Context/Context";

import { useContext } from "react";

import "./Pokedex.scss";
import { Link } from "react-router-dom";

const Pokedex = () => {
  // const pokemonPOKEDEXinfo = useContext(FetchContext);
  // const pokemonDetail = useContext(PokeInfoContext);
  const pokemonInfo = useContext(FetchContext);

  // console.log("POKEMONINFO", pokemonPOKEDEXinfo);
  // console.log("POKEMONINFO", pokemonPOKEDEXinfo.fetchedData);
  // console.log("Pokemon-Detail", pokemonDetail);
  const darkmodeToggle = useContext(DarkmodeContext);
  console.log(pokemonInfo);

  return (
    <>
      <TypeFilter />
      <div
        className={`pokedex__wrapper smart ${
          darkmodeToggle.darkmode ? "darkmode" : ""
        }`}
      >
        <SearchBar />

        <main className="pokedex-main__wrapper">
          <section className="pokedex-main__layout">
            {pokemonInfo.fetchedData?.map((singlePokemonData) => {
              return (
                <article key={singlePokemonData.id}>
                  <div className="pokedex-main__image-container-design">
                    <img
                      src={
                        singlePokemonData.sprites.other["official-artwork"]
                          .front_default
                      }
                      alt=""
                    />
                  </div>
                  <div className="pokedex-main__pokemonInfo-container-design">
                    <h4>
                      <div>
                        {"#"}
                        {singlePokemonData.id}
                      </div>

                      {singlePokemonData.name}
                    </h4>
                    <Link
                      className="pokeball"
                      to={`/PokemonCard/${singlePokemonData.id}`}
                    >
                      <img src={pokeball} alt="pokeball" />
                    </Link>
                  </div>
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
