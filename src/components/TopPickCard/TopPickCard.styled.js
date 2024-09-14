import styled from 'styled-components';

export const StyledTopPickCard = styled.article`
	grid-column: span 8;

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

		h2 {
			grid-column: span 6;
			font-size: clamp(1.75rem, 2.8vw, 3rem);
			font-weight: 600;
			letter-spacing: -0.03rem;
		}

		p {
			font-weight: 300;
			opacity: 0.6;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}

		.readMoreContainer {
			grid-column: 9 / span 4;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		a {
			align-self: flex-start;
			display: block;
			cursor: pointer;
			border: none;
			text-transform: uppercase;
			font-weight: 700;
			letter-spacing: 0.5rem;
			font-size: 0.8rem;
			padding: 0.8rem 1.2rem;
			background-color: ${({ theme }) => theme.colors.secondaryAccent};
			color: ${({ theme }) => theme.colors.fontColor};
		}
	}
`;
