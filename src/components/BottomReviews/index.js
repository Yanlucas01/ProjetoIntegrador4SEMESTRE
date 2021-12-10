import React from "react";
import { SubTitle, Title } from "../Description/styles";
import {Wrapper } from "./styles";
import ReviewSlider from "./ReviewSlider";
export default function BottomReviews() {
  return (
    <Wrapper>
      <SubTitle TextColor="#fff">Avaliações dos nossos clientes</SubTitle>
      <Title TextColor="#fff">Faça parte da nossa história</Title>
      <ReviewSlider /> 
    </Wrapper>
  );
}
