import styled from "styled-components";

export const CharacterSheetPage = styled.div`
  height: 100%;
  background-color: #000000;
  color: #ffffff;
  font-size: 1.125rem;

  display: grid;
  padding: 20px;
  grid-template-columns: 30vw 30vw;
  grid-template-rows: 72vh 65vh 65vh;

  grid-gap: 30px 15px;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 1.125rem;
  margin-bottom: 1rem;
  padding-bottom: 0.625rem;
  border-bottom: solid 1px #6c757d;
  text-align: center;
  width: 90%;
`;
