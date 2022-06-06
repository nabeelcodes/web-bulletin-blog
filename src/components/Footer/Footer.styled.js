import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 200px;

  .footMenu ul {
    display: flex;
  }

  .footMenu li:not(:last-child) {
    margin-right: 0.5rem;
  }

  outline: 1px solid red;
`;
