import {
  AppBar,
  Badge,
  Button,
  Collapse,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { ShopName, MyFont } from "../Constants";
import Menu from "./Menu";

interface AppBarContainerProps {
  numberOfItems?: number;
  openCart: boolean;
  setOpenCart: (b: boolean) => void;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "#fff",
  textDecoration: "none",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
  maxWidth: "120px", // Adjust the maximum width as needed
  width: "100%", // Set width to 100% initially
  [theme.breakpoints.up("md")]: {
    marginRight: theme.spacing(2),
    maxWidth: "none", // Reset maxWidth for larger screens
    width: "auto", // Allow button to grow to its content width
  },
}));

const AppBarContainer: React.FC<AppBarContainerProps> = ({
  numberOfItems,
  openCart,
  setOpenCart,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar id="back-to-top-anchor">
          <Grid container alignItems="center">
            <Grid item>{isMenuOpen ? <CloseIcon /> : <MenuIcon />}</Grid>
            <Grid item>
              <Link href="/">
                <StyledTypography
                  variant="h4"
                  translate="no"
                  style={{ fontFamily: { MyFont }, color: "black" }}
                >
                  {ShopName}
                </StyledTypography>
              </Link>
            </Grid>
            <Grid item>
              <Button onClick={() => setOpenCart && setOpenCart(!openCart)}>
                <Badge badgeContent={numberOfItems} color="secondary">
                  <ShoppingCartIcon sx={{ color: "#000" }} />
                </Badge>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {isMenuOpen && (
        <Collapse in={isMenuOpen}>
          <Menu setMenuOpen={setMenuOpen} />
        </Collapse>
      )}
    </>
  );
};

export default AppBarContainer;
