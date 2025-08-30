import styled from "styled-components";

export const StyledTopPickCard = styled.article`
  grid-column: span 8;
  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-column: span 12;
  }

  .outerContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
  }

  .imageContainerWrapper {
    overflow: hidden;
  }

  .innerContainer {
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    @media ${({ theme }) => theme.breakpoints.lg} {
      gap: 1rem;
    }

    h2 {
      grid-column: span 6;
      font-size: clamp(1.75rem, 2.8vw, 3rem);
      font-weight: 600;
      letter-spacing: -0.03rem;

      @media ${({ theme }) => theme.breakpoints.lg} {
        grid-column: span 12;
      }
    }

    .readMoreContainer {
      grid-column: 9 / span 4;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media ${({ theme }) => theme.breakpoints.lg} {
        grid-column: span 12;
      }
    }

    p {
      font-weight: 300;
      opacity: 0.6;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    a {
      align-self: flex-start;
      position: relative;
      display: block;
      cursor: pointer;
      border-radius: 1px;
      text-transform: uppercase;
      font-weight: 800;
      letter-spacing: 0.5rem;
      font-size: 0.8rem;
      padding: 0.8rem 1.2rem;
      transition: padding 0.2s linear;
      background-color: ${({ theme }) => theme.colors.secondaryAccent};
      color: ${({ theme }) => theme.colors.background};

      .chevronRight {
        position: absolute;
        top: 23%;
        right: -15%;
        opacity: 0;
        transition: all 0.2s linear;

        svg {
          width: 20px;
          height: 20px;
          fill: ${({ theme }) => theme.colors.background};
          stroke: ${({ theme }) => theme.colors.background};
          stroke-width: 3px;
        }
      }

      @media ${({ theme }) => theme.breakpoints.hover} {
        &:hover {
          padding-right: 2.2rem;

          .chevronRight {
            right: 6%;
            opacity: 1;
          }
        }
      }

      @media ${({ theme }) => theme.breakpoints.lg} {
        align-self: unset;
        text-align: center;
        transition: none;

        .chevronRight {
          display: none;
        }

        &:hover {
          padding-right: 1.2rem;
        }
      }
    }
  }
`;
