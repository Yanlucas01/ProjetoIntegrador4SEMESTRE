import React, { useRef } from "react";

import emailjs from "emailjs-com";
import {
  ContactAlign,
  ContactInput,
  ContactSubmit,
  ContactText,
} from "./styles";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o4f976g",
        "template_l4ecqhe",
        e.target,
        "user_sECRj9XBkUUO0LKfL2snV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <ContactAlign ref={form} onSubmit={sendEmail}>
      <ContactInput type="text" name="subject" placeholder="Assunto" />
      <ContactInput type="text" name="name" placeholder="Nome" />
      <ContactInput type="email" name="email" placeholder="Email" />
      <ContactText name="message" placeholder="Mensagem" />
      <ContactSubmit type="submit" value="Enviar" />
    </ContactAlign>
  );
}
