import React, { useContext } from 'react';
import { FetchContext } from '../../Context/Context';
import { useParams } from 'react-router-dom';
import "./PokemonCard.scss"
import SearchBar from '../../Components/SearchBar/SearchBar';


const typeColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
};

const PokemonCard = () => {
  const { fetchedData } = useContext(FetchContext);
  const { pokemonId } = useParams();

  const selectedPokemon = fetchedData.find((pokemon) => pokemon.id === parseInt(pokemonId));

  const getTypeColor = (type) => {
    return typeColors[type] || '#000000';
  };


  const getMoveColor = (moveType) => {
    return typeColors[moveType] || '#000000';
  };

  return (
    <div className="pokemoncard__wrapper">
      {selectedPokemon && (
        <>
        <SearchBar/>
          <div className='sprites'>
            <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
          </div>
          <h1 className='pokemoncard-main__wrapper'>
  {`#${selectedPokemon.id} ${selectedPokemon.name.charAt(0).toUpperCase()}${selectedPokemon.name.slice(1)}`}
</h1>
          <div className="type_box">
            {selectedPokemon.types.map((type) => (
              <p
                key={type.slot}
                style={{ backgroundColor: getTypeColor(type.type.name), color: '#ffffff' }}
              >
                {type.type.name.toUpperCase()}
              </p>
            ))}
          </div>
          <div className="movement">
            <h3>ATTACKS FROM LvL.1 - LvL.100</h3>
          </div>
          <section className="moveset">
  {selectedPokemon.moves.map((move, index) => {
    const capitalizedMoveName = move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1);

    return (
      <div key={index}>
        <p>{capitalizedMoveName}</p>
      </div>
    );
  })}
</section>
        </>
      )}
    </div>
  );
};


export default PokemonCard;