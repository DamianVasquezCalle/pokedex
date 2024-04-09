import { getPokemonDetails } from "../api";
import { setPokemons } from "../slices/dataSlice";

export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(
      setPokemons(pokemonsDetailed.map((x) => ({ ...x, favorite: false })))
    );
  };
