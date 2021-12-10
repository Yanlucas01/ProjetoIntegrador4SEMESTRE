import React from "react";
import styled, { css } from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { SubTitle } from "./Description/styles";

export default function DescriptionCards({ Title, SquareImg, Texto, Scale }) {
  return (
    <Wrapper>
      <Box>
        <SubTitleDescription>{Title}</SubTitleDescription>
        <Img
          src={require(`../assets/${SquareImg}.png`).default}
          alt={SquareImg}
        />
        <ArrowWrapper>
          <p style={{fontSize:"25px"}}>{Texto}</p> <BsArrowRight size="40" />
        </ArrowWrapper>
      </Box>
    </Wrapper>
  );
}
export const ArrowWrapper = styled.div`
  display: flex;
  font-size: 20px;
  align-items: center;
  margin: 2rem 0;
  p {
    margin-right: 1rem;
  }
  border-radius: 10px;
  padding: 0.5rem;

  transition: transform 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  margin-top: -3rem;
`;
export const SubTitleDescription = styled(SubTitle)`
  margin: 1rem 0 5rem 0;
  text-align: center;
  font-size: 28px;
`;

export const Wrapper = styled.div`
  img {
    ${({ scale }) =>
      scale &&
      css`
        transform: ${scale};
      `}
  }
  margin: 5rem 0;
`;

export const Box = styled.div`
  box-shadow: 2px 5px 5px 2px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  flex-direction: column;
  display: flex;
  background-color: #fbc101;
  border-radius: 10px;
  height: 350px;
  width: 350px;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.8s;
`;
