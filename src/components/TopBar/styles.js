import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 9vh;
  background-color: #fbc101;
  align-items: center;
  display: flex;
  justify-content: right;
  position: relative;
  > p:last-of-type {
    margin-right: 5rem;
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  img {
    height: 100%;
    padding-bottom: 0.85rem;
    margin-left: 2rem;
  }
`;

export const Img = styled.img`
  padding: 1rem;
`;
export const MenuAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
`;

export const TopMenuOption = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 1.5rem;
  padding: 1rem;
  font-size: 20px;
  color: #000;
  transition: transform 0.05s ease-in-out;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #ECB919;
    transform: scale(1.02);
    border-radius: 10px;
  }
`;
