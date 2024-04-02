import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({ pokemon }) => {
  return (
    <Card
      style={{ width: 250 }}
      tittle={pokemon.name}
      cover={<img src={pokemon.url} alt={pokemon.name} />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
