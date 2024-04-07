import { SET_POKEMONS, SET_LOADING, SET_FAVOURITE } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_FAVOURITE:
      const newPokemonList = [...state.pokemons];
      const currentPokemonIndex = newPokemonList.findIndex(
        (x) => x.id === action.payload.id
      );
      if (currentPokemonIndex >= 0) {
        newPokemonList[currentPokemonIndex].favorite =
          !newPokemonList[currentPokemonIndex].favorite;
      }
      return { ...state, pokemons: newPokemonList };
    default:
      return state;
  }
};
