import styled from 'styled-components';

export const StyledFooter = styled.footer`
	height: 100px;
	border-top: 1px solid #eaeaea;

	.footBrand {
		font-size: 1.5rem;
		font-weight: 700;
		padding-left: 0.7em;
	}

	.footMenu {
		ul {
			display: flex;
		}

		li:not(:last-child) {
			margin-right: 2rem;
		}

		svg {
			cursor: pointer;
		}
	}

	@media ${({ theme }) => theme.breakpoints.sm} {
		.footerContainer {
			width: 85%;
		}

		.footBrand {
			padding-left: unset;
		}

		.footMenu {
			li:not(:last-child) {
				margin-right: 1rem;
			}
		}
	}
`;
