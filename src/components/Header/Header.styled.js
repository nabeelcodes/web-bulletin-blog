import styled from 'styled-components';
import { css } from 'styled-components';

export const StyledHeader = styled.header`
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #eaeaea;

  .navBrand {
    height: 100%;
    width: 125px;
    position: relative;
  }

  .navLogo {
    position: absolute;
    top: 10px;
  }

  .navMenu ul {
    display: flex;
    gap: 1rem;
  }
`;

export const StyledLi = styled.li`
  color: ${({ theme }) => theme.colors.inactive};
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  transition: 0.2s color ease-in-out, 0.2s background-color ease-in-out;

  ${({ activeLink }) =>
    activeLink
      ? css`
          color: ${({ theme }) => theme.colors.active};
        `
      : css`
          &:hover {
            background-color: ${({ theme }) => `${theme.colors.secondaryAccent}25`};
          }
        `};
`;
