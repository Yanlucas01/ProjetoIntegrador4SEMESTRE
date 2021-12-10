import React from "react";
import { LogoWrapper, TopMenuOption, Wrapper, Img, MenuAlign } from "./styles";
import logo from "../../assets/glasses.png";
import logoText from "../../assets/logotext.png";
export default function TopBar() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Img src={logo} alt="logo" />
        <Img src={logoText} alt="logo" />
      </LogoWrapper>
      <MenuAlign>
        <TopMenuOption>ARMAÇÕES</TopMenuOption>
        <TopMenuOption>LENTES</TopMenuOption>
        <TopMenuOption>ORÇAMENTOS</TopMenuOption>
        <TopMenuOption>AVALIAÇÕES</TopMenuOption>
        <TopMenuOption>LOCALIZAÇÃO</TopMenuOption>
      </MenuAlign>
    </Wrapper>
  );
}
