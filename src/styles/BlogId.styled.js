import styled from 'styled-components';

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
		color: #000000b5;
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
			margin: 0;
			width: 75%;
			margin-inline: auto;
			align-items: stretch;
		}

		.blogDetailsInnerWrapper {
			max-width: max-content;
		}
	}

	@media ${({ theme }) => theme.breakpoints.md} {
		.blogDetailsOuterWrapper {
			padding-top: 0;
			margin-bottom: 3rem;
		}

		.blogDetailsOuterWrapper > div {
			width: 100%;

			img {
				border-radius: 0px;
			}
		}

		.blogDetailsInnerWrapper {
			margin: 0px 4.8rem;
		}
	}

	@media ${({ theme }) => theme.breakpoints.sm} {
		.blogDetailsOuterWrapper {
			margin-bottom: 3rem;
			padding-bottom: 3rem;
		}

		.blogDetailsInnerWrapper {
			margin: 0px 1.22rem;

			.publishingDate {
				font-size: 1rem;
			}
		}
	}
`;
