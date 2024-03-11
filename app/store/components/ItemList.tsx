import { sneakers, running, products } from "@/app/components/Products";
import { Cart, MyProduct } from "@/app/components/Types";
import {
  Button,
  styled,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { SingleItem } from "./SingleItem";

interface ItemListProps {
  cart: Cart;
  setCart: (c: Cart) => void;
  category: string;
  setProduct: (a: MyProduct | null) => void;
}

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(20),
  marginBottom: theme.spacing(10),
}));

const StyledProgressContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(5),
}));

const returnCategory = (category: string) => {
  let result: MyProduct[];
  switch (true) {
    case category === "Sneakers":
      result = sneakers;
      break;
    case category === "Running":
      result = running;
      break;
    default:
      result = products;
  }
  return result;
};

export const ItemList: React.FC<ItemListProps> = ({
  cart,
  setCart,
  category,
  setProduct,
}) => {
  const items = returnCategory(category);

  const mapThroughItems = (
    cart: Cart,
    items: MyProduct[],
    setCart: (c: Cart) => void,
    setProduct: (a: MyProduct | null) => void
  ) => {
    return items.map((item: MyProduct, idx) => {
      return (
        <SingleItem
          cart={cart}
          setCart={setCart}
          item={item}
          setProduct={setProduct}
        />
      );
    });
  };

  return (
    <Root>
      {items.length > 0 ? (
        <StyledGridContainer
          container
          spacing={{ xs: 1, md: 4 }}
          xs={10}
          sm={4}
          lg={10}
        >
          {mapThroughItems(cart, items, setCart, setProduct)}
        </StyledGridContainer>
      ) : items.length === 0 ? (
        <Grid container direction="column" alignItems="center">
          <Typography variant="h4" color="initial">
            No Items Found
          </Typography>
          <Link href="/store">
            <StyledButton color="primary" variant="contained">
              Back to home
            </StyledButton>
          </Link>
        </Grid>
      ) : (
        <StyledProgressContainer container>
          <CircularProgress size="5rem" />
        </StyledProgressContainer>
      )}
    </Root>
  );
};
