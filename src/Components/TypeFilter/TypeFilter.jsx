import "./TypeFilter.scss";
import PokeLogo from "./../../assets/img/Pokemon-Logo.png";
import XBtn from "./../../assets/img/x.png";
import { Link } from "react-router-dom";

const TypeFilter = () => {
  return (
    <>
      <section className="typefilter__wrapper">
        <header>
          <nav className="typefilter_nav">
            <img src={PokeLogo} alt="Pokemon-Logo" />
            <img src={XBtn} alt="X-Button" />
          </nav>
        </header>
        <main className="typefilter_main">
          <h3 className="menu_title">Type</h3>
          <div className="btn_list">
            <div className="btn_column">
              <button>Bug</button>
              <button>Dragon</button>
              <button>Fairy</button>
              <button>Fire</button>
              <button>Ghost</button>
              <button>Ground</button>
              <button>Normal</button>
              <button>Poison</button>
              <button>Rock</button>
              <button>Water</button>
            </div>
            <div className="btn_column">
              <button>Dark</button>
              <button>Electric</button>
              <button>Fighting</button>
              <button>Flying</button>
              <button>Grass</button>
              <button>Ice</button>
              <button>Plant</button>
              <button>Psychic</button>
              <button>Steel</button>
            </div>
          </div>
        </main>
        <footer>
          <div className="btn__wrapper">
            <button className="btn_search">Search</button>
          </div>
        </footer>
      </section>
    </>
  );
};

export default TypeFilter;
