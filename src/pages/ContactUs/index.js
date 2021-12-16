import React from "react";
import TopBar from "../../components/TopBar";
import ContactForm from "./ContactForm";
import {
  ContactImg,
  ContactImgAlign,
  ContactTitle,
  ContactWrapper,
  Wrapper,
} from "./styles";
import ContactUsIMG from "../../assets/ContactUsIMGFixed.png";
import SiteInfo from "../../components/SiteInfo";
export default function ContactUs() {
  return (
    <>
      <TopBar />
      <Wrapper>
        <ContactImgAlign>
          <ContactWrapper>
            <ContactTitle>Entrar em Contato</ContactTitle>
            <ContactForm />
          </ContactWrapper>
          <ContactImg src={ContactUsIMG} alt="ContactUsIMG" />
        </ContactImgAlign>
      </Wrapper>
      <SiteInfo BackgroundColor="#d9e3fe" />
    </>
  );
}
