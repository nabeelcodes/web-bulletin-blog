import styled from "styled-components";

export const Styled404 = styled.section`
  display: grid;
  place-content: center;
  min-height: calc(100vh - 170px);

  h1 {
    text-align: center;
    font-size: 6rem;
    margin: 0 0 0.5rem 0;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
  }

  button {
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 5px;
    color: #36395a;
    background-color: #fcfcfd;
    text-decoration: none;
    cursor: pointer;

    box-shadow:
      rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      #d6d6e7 0 -3px 0 inset;
    transition:
      box-shadow 0.15s,
      transform 0.15s;

    @media ${({ theme }) => theme.breakpoints.hover} {
      &:hover {
        box-shadow:
          rgba(45, 35, 66, 0.4) 0 4px 8px,
          rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
          #d6d6e7 0 -3px 0 inset;
        transform: translateY(-2px);
      }
    }
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 1.2rem;
      text-align: center;
    }

    div {
      gap: 1rem;
    }
  }
`;
