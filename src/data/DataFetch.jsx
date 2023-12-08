import { useEffect, useContext } from "react";
import { FetchContext } from "../Context/Context";

//Hier wird unser FetchContext importiert, um nach dem Fetchen die Daten abspeichern zu können

const DataFetch = () => {
  //pokeDetails dient nun als Zwischenspeicher für unser FetchContext, und beinhaltet die Daten aus dem Fetch!
  const pokeDetails = useContext(FetchContext);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then((res) => res.json())
      .then((json) => {
        //die Gesamtlänge des Arrays, welches nur namen und URLS erhält wird in totalPokemon abgespeichert!
        const totalPokemon = json.results.length;

        //completedFetches ist eine Counter-Variable
        let completedFetches = 0;

        //Ein leeres Array, um einzelne Objekte (pokemon-detail-informationen) zu pushen!
        const pokemonArray = [];

        //wir nehmen das ergebis aus dem ersten Fetch und iterieren im Objekt zu results, welches ein Array mit den Urls der detaillierten Pokemoninformationen!
        json.results.forEach((pokemoninfo) => {
          //durch das obenstehende foreach, gehen wir durch alle URLS
          fetch(pokemoninfo.url)
            .then((res) => res.json())
            .then((data) => {
              //die erhaltenen Daten aus dem zweiten Fetch, welches nun detaillierte Pokemoninformationen sind, pushen wir in unser vorher leeres Array
              pokemonArray.push(data);

              //der Counter wird nach jedem push hochgezählt
              completedFetches++;
              //hier wird nach jedem Push, dass Array über die Objekt-Ids AUFSTEIGEND sortiert!
              pokemonArray.sort((pokemon1, pokemon2) => {
                return pokemon1.id - pokemon2.id;
              });

              //Unseren Counter vergleichen wir mit der Totalen Länge des Arrays aus unserem ersten Fetch
              //wenn wir wirklich alle 151 Pokemon haben, DANN wird das vollständige und sortierte Array in unser FetchContext über die SetterFunktion abgespeichert
              if (completedFetches === totalPokemon) {
                pokeDetails.setPokemonInfo(pokemonArray);
              }
            });
        });
      });
  }, []);
};

export default DataFetch;
