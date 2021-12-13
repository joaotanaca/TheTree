import styled from "styled-components";

export const InputContainer = styled.input`
  background-color: #000000;
  width: 25vw;
  height: 1.125rem;
  margin-bottom: 1rem;
  font-size: 16px;
  border-bottom: solid 1px #6c757d;
  padding-left: 8px;
  margin-left: 5px;

  &:focus {
    outline: none;
  }
`;

export const SelectContainer = styled.select`
  background-color: #000000;
  width: 25vw;
  height: 1.125rem;
  margin-bottom: 10px;
  font-size: 16px;
  border-bottom: solid 1px #6c757d;
  padding-left: 5px;
  margin-left: 5px;

  &:focus {
    outline: none;
  }
`;
