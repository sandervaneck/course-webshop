import { Card, CardMedia } from "@mui/material";

interface CarrousselProps {
  img: string;
}

export const Carroussel: React.FC<CarrousselProps> = ({ img }) => {
  return (
    <Card
      style={{
        minWidth: 200,
        position: "relative",
      }}
    >
      <CardMedia className="w-full h-auto" component="img" src={img} />
    </Card>
  );
};
