import "./App.css";

import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import getPokemon from "./api";

import { useEffect } from "react";
import { Col } from "antd";
import { connect } from "react-redux";
import { setPokemonsActions } from "./actions";

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonList = await getPokemon();
      setPokemons(pokemonList);
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
