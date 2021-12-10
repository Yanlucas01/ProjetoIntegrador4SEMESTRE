import React from "react";
import styled from "styled-components";

export default function DescriptionCircles({
  CardImg,
  SubTitle,
  Text,
  CardImgAlt,
}) {
  return (
    <CardsWrapper>
      <Card>
        <CardImg>
          <img
            src={require(`../assets/${CardImg}.png`).default}
            alt={CardImgAlt}
          />
        </CardImg>
        <CardSubTitle>{SubTitle}</CardSubTitle>
        <CardText>{Text}</CardText>
      </Card>
    </CardsWrapper>
  );
}
export const CardsWrapper = styled.div`
  min-width: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 8rem;
`;

export const CardImg = styled.div`
  background-color: #fbc101;
  width: 180px;
  height: 180px;
  border-radius: 250px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10rem;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

export const CardSubTitle = styled.h5`
  margin-top: 3rem;
  font-size: 22px;
  font-weight: 500;
`;

export const CardText = styled.p`
  margin-top: 2rem;

  font-size: 18px;
  margin-bottom: 15px;
`;
