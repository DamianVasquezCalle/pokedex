import "./App.css";

import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";

import { getPokemon } from "./api";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Spin } from "antd";
import { getPokemonsWithDetails, setLoading } from "./actions";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);

  const distpach = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      distpach(setLoading(true));
      const pokemonList = await getPokemon();
      distpach(getPokemonsWithDetails(pokemonList));
      distpach(setLoading(false));
    };

    fetchPokemons();
  }, []); // empty array is only for onMount event

  return (
    <div className="App">
      <h1>pokedux</h1>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning={true} size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
