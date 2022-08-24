import styled from 'styled-components';

export const StyledTopPickCard = styled.article`
	fieldset {
		cursor: pointer;
		margin-bottom: 2.8rem;
		padding: 1.3rem 1.5rem;
		border-radius: 10px;
		border: 3px solid ${({ theme }) => theme.colors.secondaryAccentLight};

		@media ${({ theme }) => theme.breakpoints.sm} {
			padding: 1rem 0.7rem 1.3rem;
		}
	}

	legend {
		opacity: 0.8;
		font-size: 1.4rem;
		font-weight: 600;
		padding-inline: 0.5rem;
	}

	.outerContainer {
		gap: 1.6rem;

		img {
			border-radius: 10px;
		}

		@media ${({ theme }) => theme.breakpoints.ipad} {
			flex-direction: column;
		}
	}

	.innerContainer {
		time {
			display: inline-block;
			background-color: ${({ theme }) => theme.colors.secondaryAccentLight};
			color: ${({ theme }) => theme.colors.secondaryAccent};
			font-weight: 500;
			padding: 0.5rem 1rem;
			border-radius: 50px;
		}

		h2 {
			font-size: clamp(1.25rem, 2.8vw, 2.3rem);
			margin-top: 0.8rem;
		}

		p {
			opacity: 0.6;
			font-weight: 500;
			margin-top: 0.8rem;
		}
	}
`;
