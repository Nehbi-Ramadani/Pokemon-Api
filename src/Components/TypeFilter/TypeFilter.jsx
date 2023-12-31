import "./TypeFilter.scss";
import PokeLogo from "./../../assets/img/Pokemon-Logo.png";
import XBtn from "./../../assets/img/x.png";
import { FetchContext, ShowMenueContext } from "../../Context/Context";
import { useContext, useState } from "react";

const TypeFilter = () => {
  const [search, setSearch] = useState("grass");
  const pokemonInfo = useContext(FetchContext);

  // const [showMenue, setShowMenue] = useState(false);
  const showMenue = useContext(ShowMenueContext);

  // function filter type
  const order = () => {
    // pokemonInfo.setfetchedData(pokemonInfo.fetchedData);
    const newArr = [];

    pokemonInfo.pokemonAPPinfo?.map((singlePokemonData) => {
      singlePokemonData.types.map((dataDetails) => {
        if (dataDetails.type.name == search) {
          newArr.push(singlePokemonData);
        }
      });
    });

    pokemonInfo.setPokemonInfo(newArr);
    console.log(pokemonInfo.pokemonAPPinfo);
  };

  return (
    <>
      <section
        className={`typefilter__wrapper ${showMenue.showMenue ? "" : "hide"}`}
      >
        <header>
          <nav className="typefilter_nav">
            <img src={PokeLogo} alt="Pokemon-Logo" />
            <img
              src={XBtn}
              alt="X-Button"
              onClick={() => {
                showMenue.setShowMenue(false);
                console.log(showMenue.showMenue);
                console.log(showMenue);
              }}
            />
          </nav>
        </header>
        <main className="typefilter_main">
          <h3 className="menu_title">Type</h3>
          <div className="btn_list">
            <div className="btn_column">
              <button
                value={"bug"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Bug
              </button>
              <button
                value={"dragon"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Dragon
              </button>
              <button
                value={"fairy"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Fairy
              </button>
              <button
                value={"fire"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Fire
              </button>
              <button
                value={"ghost"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Ghost
              </button>
              <button
                value={"ground"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Ground
              </button>
              <button
                value={"normal"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Normal
              </button>
              <button
                value={"poison"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Poison
              </button>
              <button
                value={"rock"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Rock
              </button>
              <button
                value={"water"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Water
              </button>
            </div>
            <div className="btn_column">
              <button
                value={"dark"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Dark
              </button>
              <button
                value={"electric"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Electric
              </button>
              <button
                value={"fighting"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Fighting
              </button>
              <button
                value={"flying"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Flying
              </button>
              <button
                value={"grass"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Grass
              </button>
              <button
                value={"ice"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Ice
              </button>
              <button
                value={"plant"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Plant
              </button>
              <button
                value={"psychic"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Psychic
              </button>
              <button
                value={"steel"}
                onClick={(e) => {
                  setSearch(e.target.value);
                }}
              >
                Steel
              </button>
            </div>
          </div>
        </main>
        <footer>
          <div className="btn__wrapper">
            <button
              className="btn_search"
              onClick={() => {
                order();
                showMenue.setShowMenue(false);
              }}
            >
              Search
            </button>
          </div>
        </footer>
      </section>
    </>
  );
};

export default TypeFilter;
