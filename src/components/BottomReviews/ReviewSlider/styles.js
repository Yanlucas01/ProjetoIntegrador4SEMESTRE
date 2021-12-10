import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 25px;
  position: relative;
  z-index: 5;
  background-color: #f6f6f6;
  margin: 5rem 0;
  .slick-slide {
    padding: 2rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    div {
      width: 100%;
    }
  }
`;

export const ImgReview = styled.img`
  border-radius: 250px;
  margin-left: 10rem;
  width: 435px;
  height: 435px;
`;

export const Div = styled.div`
  width: 100%;
`;

export const ReviewText = styled.p`
  font-family: "Brush Script MT", cursive;
  font-size: 45px;
  font-weight: 600;
  text-align: center;
  width: 100%;
  margin-left: 1rem;
`;

export const TextDivAlign = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const StarsReview = styled.img`
  height: 55px;
  margin: -2rem 3rem 3rem 3rem;
`;
