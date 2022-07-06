import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.div`
	height: ${({ height }) => height ?? '100%'};
	width: ${({ width }) => width ?? '100%'};
	margin-inline: auto;

	${({ flex }) =>
		flex &&
		css`
			display: flex;
			justify-content: space-between;
			align-items: center;
		`}
`;

export const StyledBlogDetailsPage = styled.section`
	width: 100%;

	.blogDetailsOuterWrapper {
		background-color: ${({ theme }) => theme.colors.secondaryAccentLight};
		padding: 4rem 0;
		margin-bottom: 4rem;
	}

	.blogDetailsInnerWrapper {
		max-width: 28rem;
	}

	.blogTitle {
		font-size: clamp(1.75rem, 1.39rem + 1.79vw, 3rem);
		font-weight: 480;
	}

	.blogDescription {
		font-size: 1.12rem;
		line-height: 1.7rem;
	}

	.publishingDate {
		display: inline-block;
		font-weight: 600;
		font-size: 1.12rem;
		background-color: ${({ theme }) => theme.colors.secondaryAccent};
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 5px;
	}

	img {
		border-radius: 5px;
	}

	@media ${({ theme }) => theme.breakpoints.ipad} {
		.blogDetailsOuterWrapper > div {
			flex-direction: column-reverse;
			gap: 3rem;
		}

		.blogDetailsInnerWrapper {
			max-width: 35rem;
		}
	}

	@media ${({ theme }) => theme.breakpoints.sm} {
		.blogDetailsOuterWrapper {
			margin-bottom: 3rem;
		}
	}
`;
