import { useDispatch } from "react-redux";
import { Card } from "antd";
import { setFavorite } from "../actions";

import Meta from "antd/lib/card/Meta";
import StarButton from "./StarButton";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  const typesStr = pokemon.types.map((x) => x.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ id: pokemon.id }));
  };

  return (
    <Card
      style={{ width: 150 }}
      tittle={pokemon.name}
      cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
      extra={
        <StarButton isFavorite={pokemon.favorite} onClick={handleOnFavorite} />
      }
    >
      <Meta description={typesStr} />
    </Card>
  );
};

export default PokemonCard;
