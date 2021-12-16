import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #08222a;

  ${({ BackgroundColor }) =>
    BackgroundColor &&
    css`
      background-color: ${BackgroundColor};
    `}
`;
export const WhiteWrapper = styled.div`
  width: 100%;
  padding: 8rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 5px 15px 2px rgba(0, 0, 0, 0.2); 
`;
export const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0.1rem;
  justify-content: space-between;
`;
export const Img = styled.img`
  padding: 1rem;
`;

export const ImgWrapper = styled.div`
  display: flex;
`;

export const SocialTitle = styled.div`
  font-size: 20px;
  margin-right: 5%;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  font-weight: 500;
`;

export const SocialIcons = styled.div`
  display: flex;
  margin-left: 1rem;
  img {
    padding: 0.1rem;
    margin: 0.3rem;
    height: 50px;
    width: 50px;
  }
`;

export const SocialImg = styled.img`
  border-radius: 15px;
`;

export const InfoWrapper = styled.div`
  display: flex;
`;
