import React from "react";
import { Info, InfoWrapper, Wrapper } from "./styles";

export default function SubOptions() {
  return (
    <Wrapper>
      <InfoWrapper>
        <Info>Home</Info>
        <Info>Sobre nós</Info>
      </InfoWrapper>
      <InfoWrapper>
        <Info>Armações</Info>
        <Info>Lentes</Info>
      </InfoWrapper>
      <InfoWrapper>
        <Info>Dúvidas</Info>
        <Info>Avaliações</Info>
      </InfoWrapper>
      <InfoWrapper>
        <Info>Localização</Info>
        <Info>Lentes</Info>
      </InfoWrapper>
      <InfoWrapper>
        <Info>FAQs</Info>
        <Info>Contate-nos</Info>
      </InfoWrapper>
    </Wrapper>
  );
}
