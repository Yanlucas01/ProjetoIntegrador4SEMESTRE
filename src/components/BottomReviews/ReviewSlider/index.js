import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Review1 from "../../..//assets/Review1.png";
import Review2 from "../../../assets/Review2.png";
import Review3 from "../../../assets/Review3.png";
import Review_4Stars from "../../../assets/Review-4Stars.png";
import Review_5Stars from "../../../assets/Review-5Stars.png";

import {
  Wrapper,
  ImgReview,
  Div,
  ReviewText,
  TextDivAlign,
  StarsReview,
} from "./styles";

export default function ReviewSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <Div>
          <TextDivAlign>
            <ImgReview src={Review1} alt="MidImg" />

            <ReviewText>
              <StarsReview src={Review_5Stars} alt="Review2" />
              "Muito atenciosos, só cheguei batendo na porta, eles me atenderam
              rapidão "
            </ReviewText>
          </TextDivAlign>
        </Div>
        <Div>
          <TextDivAlign>
            <ImgReview src={Review2} alt="Review2" />
            <ReviewText>
              <StarsReview src={Review_5Stars} alt="Review2" />
              "Incrível os valores dessa loja, é uma explosão de preços na nossa
              cara"
            </ReviewText>
          </TextDivAlign>
        </Div>
        <Div>
          <TextDivAlign>
            <ImgReview src={Review3} alt="Review3" />
            <ReviewText>
              <StarsReview src={Review_4Stars} alt="Review2" />
              "Excelente qualidade e muito conforto, os metais se encaixam como
              uma luva"
            </ReviewText>
          </TextDivAlign>
        </Div>
      </Slider>
    </Wrapper>
  );
}
