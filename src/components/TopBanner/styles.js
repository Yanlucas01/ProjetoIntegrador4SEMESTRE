import styled, { css } from "styled-components";

export const ImgResize = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Slogan = styled.div`
  position: absolute;
  top: 20%;
  right: 2%;
  font-size: 85px;
  text {
    font-weight: 500;
  }
  line-height: 1.1;
  padding: 1rem;
  border-radius: 15px;
  text-shadow: 1px 1px 1px #caca;
`;

export const ShopButton = styled.button`
  &:hover {
    background-color: #383836;
    transform: scale(1.03);
  }
  transition: transform 0.05s ease-in-out;
  position: absolute;
  border-radius: 7px;
  font-weight: 500;
  background-color: #000;
  white-space: normal;
  font-size: 20px;
  color: #fff;
  padding: 2rem 2.5rem;
  bottom: -50%;
  ${({ left }) =>
    left &&
    css`
      left: ${left}%;
    `}
`;
