import styled from 'styled-components';
import { css } from 'styled-components';

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
			width: 91%;
		}

		.navMenu ul {
			gap: 0;

			li:nth-child(2) {
				padding-inline: 0.3rem;
			}
		}
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
					@media ${({ theme }) => theme.breakpoints.hover} {
						&:hover {
							background-color: ${({ theme }) =>
								theme.colors.secondaryAccentLight};
						}
					}
			  `};
`;
