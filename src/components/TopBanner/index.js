import React from "react";
import ImagemInicial from "../../assets/ImagemInicial.jpg";
import { ImgResize, ShopButton, Slogan } from "./styles";
export default function TopBanner() {
  return (
    <ImgResize>
      <img src={ImagemInicial} alt="imagem" />;
      <Slogan>
        <text>Veja o mundo</text> <br />
        <text>da melhor forma</text> <br />
        <ShopButton left={10}>Óculos de Sol</ShopButton>
        <ShopButton left={55}>Óculos de Grau</ShopButton>
      </Slogan>
    </ImgResize>
  );
}
