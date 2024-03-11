import { ArrowRight, ArrowLeft } from "@mui/icons-material";
import { Fab } from "@mui/material";

interface ArrowProps {
  direction: "left" | "right";
  handleClick: () => void;
}

export const Arrow: React.FC<ArrowProps> = ({ direction, handleClick }) => {
  return (
    <Fab
      style={{
        backgroundColor: "unset",
        boxShadow: "unset",
        border: "1px solid",
      }}
      size="small"
      onClick={handleClick}
    >
      {direction === "right" ? <ArrowRight /> : <ArrowLeft />}
    </Fab>
  );
};
