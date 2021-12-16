import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #d9e3fe;
  height: 95vh;
  padding: 10rem 1rem;
`;

export const ContactTitle = styled.p`
  font-family: "Brush Script MT", cursive;
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 3rem;
`;

export const ContactWrapper = styled.div`
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  transform: scale(1.5);
`;

export const ContactAlign = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactInput = styled.input`
  margin: 1rem;
  outline: 1px solid #000;
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
`;
export const ContactText = styled.textarea`
  margin: 1rem;
  outline: 1px solid #000;
  border-radius: 10px;
  padding: 1rem;
  height: 120px;
  width: 100%;
`;

export const ContactSubmit = styled.input`
  font-family: cursive;
  font-size: 22px;
  margin: 1rem;
  outline: 1px solid #000;
  border-radius: 10px;
  padding: 0.75rem;
  transition: background-color 0.1s ease-in-out;
  background-color: #ff6b8e;
  width: 150px;
  &:hover {
    background-color: lightgreen;
  }
`;
export const ContactImg = styled.img``;
export const ContactImgAlign = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  > div:first-of-type {
    width: 40%;
  }
`;
