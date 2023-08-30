import styled from "styled-components";

export const StyledLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  min-height: 100vh;
  max-width: ${({ maxWidth }) => maxWidth ?? "2000px"};

  main {
    flex: 1 0 100%;
  }
`;
