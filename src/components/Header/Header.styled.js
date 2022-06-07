import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 70px;
  border-bottom: 1px solid #eaeaea;

  .navBrand {
    height: 100%;
    width: 20%;
    position: relative;
  }

  .navLogo {
    position: absolute;
    top: 10px;
  }

  .navMenu ul {
    display: flex;
  }

  .navMenu li {
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase;
    color: #737373;
  }

  .navMenu li:not(:last-child) {
    margin-right: 1rem;
  }
`;
