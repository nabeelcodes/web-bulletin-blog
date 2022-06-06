import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 70px;
  border-bottom: 1px solid #eaeaea;

  .navMenu ul {
    display: flex;
  }

  .navMenu li:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
