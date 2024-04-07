import { Button } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const StarButton = ({ isFavorite, onClick }) => {
  return (
    <Button
      icon={isFavorite ? <StarFilled /> : <StarOutlined />}
      onClick={onClick}
    />
  );
};

export default StarButton;
