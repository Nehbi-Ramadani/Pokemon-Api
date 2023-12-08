import "./SearchBar.scss";
import PokemonLogo from "./../../assets/img/Pokemon-Logo.png";
import { useContext, useEffect, useState } from "react";
import DarkmodeButton from "./../../assets/img/lightIcon.svg";
import BackButton from "./../../assets/img/backIcon.svg";
import {
  FetchContext,
  DarkmodeContext,
  ShowMenueContext,
} from "../../Context/Context";
import { Link, useLocation } from "react-router-dom";
import MenuButton from "./../../assets/img/menuIcon.svg";

const SearchBar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [searchInput, setSearchInput] = useState("");
  const [displayButton, setDisplayButton] = useState(false);
  // const [darkmode, setDarkmode] = useState(false);
  let Arr = []; // Array zum zwischenspeichern meiner Suchanfrage Ergebnisse

  const searchData = useContext(FetchContext);
  const darkmodeToggle = useContext(DarkmodeContext);
  const location = useLocation(); //um zu checken, wann der zurückButton angezeigt werden soll, wird die url kontrolliert.
  const showMenue = useContext(ShowMenueContext);

  // hier wird die Eingabe kontrolliert und der initiale fetch in echtzeit gefiltert
  useEffect(() => {
    const filteredArray = searchData?.pokemonAPPinfo.filter((elem) => {
      if (elem.name.includes(searchInput.toLowerCase())) {
        Arr.push(elem.name);
        return Arr;
      } else if (searchInput == "") {
        // if Abfrage um bei einem leeren Suchfeld den initialen fetch anzuzeigen. quasi ein reset der Suche
        console.log("suchfeld ist leer");
      }
    });
    searchData.setPokemonInfo(filteredArray);
  }, [searchInput]);

  //Abfrage, ob aktuelle url / ist oder nicht. Bei nein, wird der zurück Button angezeigt.
  useEffect(() => {
    if (location.pathname === "/") {
      return setDisplayButton(false);
    } else {
      return setDisplayButton(true);
    }
  }, []);

  return (
    <header
      className={
        darkmodeToggle.darkmode
          ? "darkmode header_searchbar"
          : "header_searchbar"
      }
    >
      <div className="logo__wrapper">
        <img src={PokemonLogo} alt="" />
      </div>
      <nav className="searchbar__wrapper">
        <div className="containerMenuBackbutton">
          <img
            src={MenuButton}
            alt="menu button"
            className={`menuIcon ${displayButton ? "hide" : ""}`}
            onClick={() => showMenue.setShowMenue(true)}
          />
          <Link to="/" className={`backIcon ${displayButton ? "" : "hide"}`}>
            <img src={BackButton} alt="button to navigate a page back" />
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search for your Pokemon..."
            type="text"
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </form>
        <div
          className="darkmodeButton"
          onClick={() => darkmodeToggle.setDarkmode(!darkmodeToggle.darkmode)}
        >
          <img src={DarkmodeButton} alt="button to switch darkmode on" />
        </div>
      </nav>
    </header>
  );
};

export default SearchBar;
