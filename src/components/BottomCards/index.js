import React from "react";
import DescriptionCards from "../DescriptionCards";
import { CardWrapper, Wrapper } from "./styles";

export default function BottomCards() {
  return (
    <Wrapper>
      <CardWrapper>
        <DescriptionCards
          Title="Ache uma loja próximo a você"
          SquareImg="Square1"
          Texto="Saber mais"
        />
        <DescriptionCards
          Title="Tenha o seu próprio estilo"
          SquareImg="Square2"
          Texto="Escolher seu estilo"
        />
        <DescriptionCards
          Title="Explore as diversas opções"
          SquareImg="Square3"
          Texto="Explorar lentes"
        />
      </CardWrapper>
    </Wrapper>
  );
}
