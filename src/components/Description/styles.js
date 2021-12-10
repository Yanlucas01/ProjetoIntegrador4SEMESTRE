import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin: 5rem 0 5rem 8rem;
`;
export const SubTitle = styled.h5`
  font-size: 25px;
  margin: 10px 0 25px 0;
  font-weight: 500;
  ${({ TextColor }) =>
    TextColor &&
    css`
      color: ${TextColor};
    `}
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  ${({ TextColor }) =>
    TextColor &&
    css`
      color: ${TextColor};
    `}
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
