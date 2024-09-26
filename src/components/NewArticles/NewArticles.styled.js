import styled from 'styled-components';

export const StyledNewArticles = styled.div`
	grid-column: span 4;
	color: rgba(255, 255, 255, 0.8);
	background-color: #121212;
	padding: 2rem;

	@media ${({ theme }) => theme.breakpoints.lg} {
		grid-column: span 12;
	}

	.title {
		color: ${({ theme }) => theme.colors.secondaryAccent};
		font-size: clamp(1.75rem, 2.8vw, 2.3rem);
		font-weight: 500;
		margin-bottom: 2rem;
	}

	.post-link:not(:last-of-type) {
		display: block;
		padding-bottom: 1.5rem;
		margin-bottom: 1.5rem;
		cursor: pointer;
		border-bottom: 1px solid rgba(265, 265, 265, 0.3);
	}

	.postTitle {
		font-size: clamp(1rem, 2.8vw, 1.35rem);
		margin-bottom: 0.75rem;

		@media ${({ theme }) => theme.breakpoints.hover} {
			&:hover {
				color: ${({ theme }) => theme.colors.secondaryAccent};
			}
		}
	}

	.postDescription {
		font-size: 1rem;
		color: gray;
	}
`;
