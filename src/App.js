import "./App.css";

import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import getPokemon from "./api";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col } from "antd";
import { setPokemonsActions } from "./actions";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const distpach = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonList = await getPokemon();
      distpach(setPokemonsActions(pokemonList));
    };

    fetchPokemons();
  }, []); // empty array is only for onMount event

  return (
    <div className="App">
      <h1>pokedux</h1>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <Col span={16} offset={2}>
        <PokemonList pokemons={pokemons} />
      </Col>
    </div>
  );
}

export default App;
