import { fromJS } from "immutable";
import { SET_POKEMONS, SET_LOADING, SET_FAVOURITE } from "../actions/types";

const initialState = fromJS({
  pokemons: [],
  loading: false,
});

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return state.setIn(["pokemons"], fromJS(action.payload));
    case SET_LOADING:
      return state.setIn(["loading"], action.payload);
    case SET_FAVOURITE:
      const currentPokemonIndex = state
        .get("pokemons")
        .findIndex((pokemon) => pokemon.get("id") === action.payload.id);

      if (currentPokemonIndex < 0) {
        return state;
      }

      const isFavourite = state.getIn([
        "pokemons",
        currentPokemonIndex,
        "favorite",
      ]);

      return state.setIn(
        ["pokemons", currentPokemonIndex, "favorite"],
        !isFavourite
      );
    default:
      return state;
  }
};
