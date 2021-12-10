import React from "react";
import MidImg from "../../assets/MidImg.png";
import { SubText, SubTitle, Title, Wrapper } from "./styles";
import { ImgResizer } from "./styles";
export default function MidBanner() {
  return (
    <Wrapper>
      <ImgResizer>
        <img src={MidImg} alt="MidImg" />
      </ImgResizer>
      <SubTitle>FEITO PARA VOCÊ</SubTitle>
      <Title>Faça seu estilo próprio </Title>
      <SubText>
        Lorem ipsum dolor sit amet, consectetur adipiscing  <br />
        Sem fringilla ut morbi tincidunt augue interdum velit <br />
        Nec nam aliquam sem et tortor. Lacus viverra vitae <br />
        Aliquam malesuada bibendum arcu vitae. Quam lacus <br />
        Tristique senectus et netus.
      </SubText>
    </Wrapper>
  );
}
