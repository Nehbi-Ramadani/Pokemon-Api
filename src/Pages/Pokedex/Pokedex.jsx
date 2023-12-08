import "./Pokedex.scss";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { FetchContext } from "../../Context/Context";
import { useContext } from "react";
import "./Pokedex.scss";
import { Link } from "react-router-dom";

//Auch hier wird unser FetchContext importiert um die Daten zu rendern!
const Pokedex = () => {
  //Unser FetchContext wird hier über useContext in die Komponente eingebunden und in pokemonDetails abgespeichert!
  //in pokemonDetails sind die gefetchten Daten aus DataFetch enthalten!
  const pokemonDetails = useContext(FetchContext);
  console.log(pokemonDetails);
  return (
    <>
      <div className="pokedex__wrapper smart">
        <header className="pokedex-header__wrapper">
          <SearchBar />
        </header>
        <main className="pokedex-main__wrapper">
          <section className="pokedex-main__layout">
            {pokemonDetails.pokemonAPPinfo?.map((singleData) => {
              return (
                <article key={singleData.id}>
                  <div className="pokedex-main__image-container-design">
                    <img
                      src={
                        singleData.sprites.other["official-artwork"]
                          .front_default
                      }
                      alt=""
                    />
                  </div>
                  <div className="pokedex-main__pokemonInfo-container-design">
                    <h4>
                      <div>
                        {"#"}
                        {singleData.id}
                      </div>

                      {singleData.name}
                    </h4>
                    <Link
                      className="pokeball"
                      to={`/PokemonCard/${singleData.id}`}
                    >
                      <img
                        src="src\assets\img\Poke_Ball_icon.svg.png"
                        alt="pokeball"
                      />
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
