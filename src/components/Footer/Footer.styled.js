import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 100px;
  border-top: 1px solid #eaeaea;

  .footMenu ul {
    display: flex;
  }

  .footMenu li:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
