import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons?.map((pokemon) => {
        return <PokemonCard pokemon={pokemon} key={pokemon.name} />;
      })}
    </div>
  );
};

export default PokemonList;
