import "./SearchBar.scss";
import PokemonLogo from "./../../assets/img/Pokemon-Logo.png";

const SearchBar = () => {
  return (
    <>
      <div className="logo__wrapper">
        <img src={PokemonLogo} alt="" />
      </div>
      <nav className="searchbar__wrapper"></nav>
    </>
  );
};

export default SearchBar;
