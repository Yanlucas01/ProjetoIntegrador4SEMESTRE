import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;
export const ImgResizer = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`;
export const SubText = styled.h5`
  position: absolute;
  font-size: 19px;
  line-height: 1.5;
  font-weight: 400;
  top: 25%;
  right: 18%;
`;
export const SubTitle = styled.h5`
  position: absolute;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  top: 11%;
  right: 30%;
  ${({ TextColor }) =>
    TextColor &&
    css`
      color: ${TextColor};
    `}
`;

export const Title = styled.h1`
  position: absolute;
  font-size: 48px;
  font-weight: 700;
  top: 15%;
  right: 16.5%;
`;