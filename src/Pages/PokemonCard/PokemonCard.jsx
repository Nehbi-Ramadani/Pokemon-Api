import "./PokemonCard.scss";

const PokemonCard = () => {
  return (
    <>
      <div className="pokemoncard__wrapper smart">
        <header className="pokemoncard-header__wrapper"></header>
        <main className="pokemoncard-main__wrapper">
          <img src="" alt="Pokemon Bild" />
          <h1>#006 Blubasaur</h1>
          <div className="type_box">
            <p>POISON</p>
            <p>GRASS</p>
          </div>
          <div className="movement">
            <h3>ATTACKS AND MOVEMENT</h3>
          </div>
          <section className="moveset">
            <p>Move 1</p>
            <p>Move 2</p>
            <p>Move 3</p>
            <p>Move 4</p>
          </section>
        </main>
      </div>
    </>
  );
};

export default PokemonCard;
