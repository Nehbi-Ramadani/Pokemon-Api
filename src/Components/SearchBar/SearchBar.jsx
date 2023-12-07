import "./SearchBar.scss";
import PokemonLogo from "./../../assets/img/Pokemon-Logo.png";
import { useState } from "react";
import DarkmodeButton from "./../../assets/img/lightIcon.svg"

const SearchBar = () => {

  const [searchInput, setSearchInput] = useState("");
  const [darkmode, setDarkmode] = useState(false)

console.log(searchInput);

  return (
    <header className={darkmode ? "darkmode" : ""}>
      <div className="logo__wrapper" onClick={() => setDarkmode(!darkmode)}>
        <img src={PokemonLogo} alt="" />
      </div>
      <nav className="searchbar__wrapper">
        <div className="backIcon">
        </div>
        <form>
          <input type="text" onChange={(event) => setSearchInput(event.target.value)}/>
        </form>
        <div className="darkmodeButton">
          <img src={DarkmodeButton} alt="button to switch darkmode on" />
        </div> 
      </nav>
    </header>
  );
};

export default SearchBar;
