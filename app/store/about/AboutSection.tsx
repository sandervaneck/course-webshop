import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store | About",
};

import React from "react";
import { Container, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import AppBarContainer from "@/app/components/appbar";
import { brand, aboutText } from "@/app/components/Constants";

const ContainerStyled = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh", // Ensure the container takes full viewport height
});

const PaperStyled = styled(Paper)(({ theme }) => ({
  marginTop: 10,
  minHeight: "25vh", // Full screen
  minWidth: "50vh", // Full screen
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: theme.spacing(2),
}));

const MainText = styled(Typography)({
  fontFamily: "Meow Script, cursive",
  marginBottom: 2,
  maxWidth: 375,
  marginLeft: 30,
  fontSize: "2rem",
});
interface AboutSectionProps {
  openCart: boolean;
  numberOfItems: number;
  setOpenCart: (b: boolean) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  openCart,
  numberOfItems,
  setOpenCart,
}) => {
  return (
    <ContainerStyled>
      <AppBarContainer
        numberOfItems={numberOfItems}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      <Stack style={{ marginTop: 50 }} direction="column">
        <MainText>About {brand}</MainText>
        <MainText>{aboutText()}</MainText>
      </Stack>
    </ContainerStyled>
  );
};
