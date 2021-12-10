import React from "react";
import { SubTitle } from "../../Description/styles";
import { InfoWrapper, Wrapper, InfoSubText } from "./styles"; 
export default function InfoCard({ Title, SubText, Telefone }) {
  return (
    <Wrapper>
      <InfoWrapper>
        <SubTitle>{Title}</SubTitle>
        <InfoSubText>
          {SubText}
          <br />
          <br /> <strong>{Telefone}</strong>
        </InfoSubText>
      </InfoWrapper>
    </Wrapper>
  );
}
