import styled from "styled-components";

export const Container = styled.div`
  font-size: 0.8rem;
  justify-content: end;
  display: flex;
  flex-direction: column;
  h1 {
    max-width: 76px;
  }
`;

export const InputDice = styled.input`
  width: 5vw;
  height: 2.125rem;
  font-size: 2rem;
  background-color: #000000;
  margin-bottom: 1rem;
  border-bottom: solid 1px #6c757d;
  padding-left: 5px;
  text-align: center;

  &:focus {
    outline: none;
  }
`;
