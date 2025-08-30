import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  height: 70px;
  width: 100%;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.secondaryAccentLight};

  .navBrand {
    height: 100%;
    width: 147px;
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

  @media ${({ theme }) => theme.breakpoints.sm} {
    nav {
      width: 95%;
    }

    .navMenu ul {
      gap: 0;
    }

    li:last-child span {
      padding-left: 0;
      padding-right: 0.6rem;
    }
  }
`;

export const StyledLi = styled.li`
  color: ${({ theme }) => theme.colors.inactive};
  cursor: pointer;
  font-weight: 620;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  border-radius: 5px;
  transition:
    0.2s color ease-in-out,
    0.2s background-color ease-in-out;
  padding: 0.75rem 0rem;

  span {
    padding: 0.75rem 1rem;
  }

  ${({ activeLink }) =>
    activeLink
      ? css`
          color: ${({ theme }) => theme.colors.secondaryAccent};
        `
      : css`
          @media ${({ theme }) => theme.breakpoints.hover} {
            &:hover {
              background-color: ${({ theme }) =>
                theme.colors.secondaryAccentLight};
            }
          }
        `};
`;
