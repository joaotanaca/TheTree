import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 100%;

  .animated {
    animation: spin 6s linear infinite;
    
    &-fast {
      animation: spin 0.7s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
