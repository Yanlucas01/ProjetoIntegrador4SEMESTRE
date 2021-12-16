import React from "react";
import {
  Header,
  Img,
  ImgWrapper,
  Wrapper,
  SocialTitle,
  SocialIcons,
  WhiteWrapper,
  SocialImg,
  InfoWrapper,
} from "./styles";

import logo from "../../assets/glasses.png";
import logoText from "../../assets/logotext.png";
import FacebookIcon from "../../assets/FacebookIcon.png";
import InstagramIcon from "../../assets/InstagramIcon.png";
import TwitterIcon from "../../assets/TwitterIcon.png";
import InfoCard from "./InfoCard";
import SubOptions from "./InfoCard/SubOptions";

export default function SiteInfo({ BackgroundColor }) {
  return (
    <Wrapper BackgroundColor={BackgroundColor}>
      <WhiteWrapper>
        <Header>
          <ImgWrapper>
            <Img src={logo} alt="logo" />
            <Img src={logoText} alt="logo" />
          </ImgWrapper>
          <SocialTitle>
            REDES SOCIAIS
            <SocialIcons>
              <SocialImg src={FacebookIcon} alt="logo" />
              <SocialImg src={InstagramIcon} alt="logo" />
              <SocialImg src={TwitterIcon} alt="logo" />
            </SocialIcons>
          </SocialTitle>
        </Header>
        <InfoWrapper>
          <InfoCard
            Title="Localização Patos de Minas"
            SubText="R. Maj. Gote, 808 - Caiçaras, Patos de Minas - MG, 38700-207 Centro
          Universitário de Patos de Minas, endereço"
            Telefone-=" TELEFONE: (34) 3823-0300"
          />
          <InfoCard
            Title="Localização Presidente Olegário"
            SubText="R. Maj. Gote, 808 - Caiçaras, Patos de Minas - MG, 38700-207 Centro
        Universitário de Patos de Minas, endereço"
            Telefone-=" TELEFONE: (34) 3823-0300"
          />
          <InfoCard
            Title="Localização Minas Gerias"
            SubText="SAUN - Quadra 5 - Lote B - Ed. Banco do Brasil - 3º andar - CEP: 70040-912 - Brasília - DF."
            Telefone-=" TELEFONE: (34) 3823-0300"
          />
          <SubOptions />
        </InfoWrapper>
      </WhiteWrapper>
    </Wrapper>
  );
}
