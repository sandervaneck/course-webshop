import { MyProduct } from "@/app/components/Types";
import { Box, Grid, Slide, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { Carroussel } from "./components/Carroussel";
import { Arrow } from "./components/Arrow";
import { Dots } from "./components/Dots";

interface ImageSliderProps {
  item: MyProduct;
}

const ImageGrid = styled(Grid)({
  justifyContent: "flex-start",
  width: "100%",
  minWidth: "200px",
  overflow: "hidden",
});

const GridItem = styled(Grid)({
  position: "relative",
});

const ImgContainer = styled(Box)(() => ({
  width: "100%",
  height: "auto",
}));

const StackContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  justifyContent: "center",
  marginTop: theme.spacing(2),
}));

export const ImageSlider: React.FC<ImageSliderProps> = ({ item }) => {
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );

  const [index, setIndex] = useState(0);
  const content = item.img[index];
  const numSlides = item.img.length;

  const onArrowClick = (direction: "left" | "right") => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };
  return (
    <ImageGrid container>
      <GridItem item width="100%">
        <Slide in={slideIn} direction={slideDirection}>
          <ImgContainer>
            <Carroussel img={content} />
          </ImgContainer>
        </Slide>
        <StackContainer direction="row">
          <Arrow direction="left" handleClick={() => onArrowClick("left")} />
          <Dots mates={item.img} index={index} />
          <Arrow direction="right" handleClick={() => onArrowClick("right")} />
        </StackContainer>
      </GridItem>
    </ImageGrid>
  );
};
