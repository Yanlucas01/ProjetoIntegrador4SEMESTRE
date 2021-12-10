import React from "react";
import DescriptionCircles from "../DescriptionCircles";
import { Title, Wrapper, CardsWrapper } from "./styles";
import { SubTitle } from "./styles";

export default function Description() {
  return (
    <Wrapper>
      <SubTitle>Como funciona</SubTitle>
      <Title>
        Conheça o futuro dos <br /> óculos Premium
      </Title>
      <CardsWrapper>
        <DescriptionCircles
          SubTitle="Feito para você"
          Text="Os nossos óculos são feitos sob medidas exclusivamente para você, para o seu melhor conforto."
          CardImg="Circle1"
          alt="circle1"
        />

        <DescriptionCircles
          SubTitle="Estilizado por você"
          Text="Selecione o seu modelo preferido, a sua cor, o seu tamanho, descubra o seu estilo próprio."
          CardImg="Circle2"
          alt="circle2"
        />
        <DescriptionCircles
          SubTitle="Feito do zero"
          Text="Cada óculos é criado para uma pessoa de cada vez, com a melhor qualidade de metais e lentes existentes."
          CardImg="Circle3"
          alt="circle3"
        />
        <DescriptionCircles
          SubTitle="Perfeição, nós garantimos"
          Text="Nós garantimos que seus óculos encaixarão perfeitamente, e você se sentirá melhor do que nunca"
          CardImg="Circle4"
          alt="circle4"
        />
      </CardsWrapper>
    </Wrapper>
  );
}

// CardImgLink,
// SubTitle,
// Text,
// CardImgAlt,
